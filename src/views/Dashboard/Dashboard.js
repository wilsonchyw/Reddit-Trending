// Chakra imports
import { Flex, Grid, SimpleGrid, useColorMode, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import Bar from "components/Chart/Bar";
import Pie from "components/Chart/Pie";
import Tree from "components/Chart/Tree";
import Distribution from "components/Dashboard/Distribution";
import Notice from "components/Dashboard/Notice";
import Setting from "components/Dashboard/Setting";
import ThreadTrendChart from "components/Dashboard/ThreadTrendChart";
import ThreadTrendTable from "components/Dashboard/ThreadTrendTable";
import { ClockIcon, DocumentIcon, StatsIcon } from "components/Icons/Icons.js";
import graphQLHandler from "lib/graphQLHandler";
import restHandler from "lib/restHandler";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChartData, setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from "store/rawDataSlice";
import { setSearch } from "store/settingSlice";
import FORUMS from "variables/forum.json";
import { getQueryAllString, getQueryOneString } from "variables/graphQL";
import Log from "lib/log"

export default function Dashboard() {
    const { fetchLimit, minVote, minComment, dateRange, notice, search, useRestApi } = useSelector((state) => state.setting);
    const { trends, forums, lastestVote, lastestComment, symbolHeat } = useSelector((state) => state.raw);
    const dispatch = useDispatch();
    const textColor = useColorModeValue("gray.700", "white");
    const { colorMode } = useColorMode();

    const [showForums, setShowForums] = useState(FORUMS);
    const [target, setTarget] = useState("vote");
    const [lastUpdate, setLastUpdate] = useState(null);
    const [totalRecord, setTotalRecord] = useState(null);
    const [totalThread, setTotalThread] = useState(null);

    

    const params = {
        limit: fetchLimit,
        minVote: minVote,
        minComment: minComment,
        dateRange: dateRange,
    };

    const forumData = useMemo(() => {
        const forum = forums.filter((f) => showForums[f.forum]).sort((a, b) => b.count - a.count);
        return {
            labels: forum.map((f) => f.forum),
            data: forum.map((f) => f.count),
        };
    }, [showForums, forums]);

    const handleThreadFetch = (id) => {
        const options = {
            url: "/thread/one",
            params: { ...params, id: id },
        };
        const callback = (data) => {
            dispatch(
                setChartData([
                    { name: "Vote", data: data.map((d) => [d.updated, d.vote]) },
                    { name: "Comment", data: data.map((d) => [d.updated, d.comment]) },
                ])
            );
        };
        if (useRestApi) {
            restHandler([[options, callback]]);
        } else {
            const query = getQueryOneString(options.params);
            graphQLHandler(query, [(data) => callback(data.thread.one)]);
        }
    };
    useEffect(() => {
        Log("test @ useEffect")
        if (useRestApi) {
            restHandler([
                [{ url: "/state/all", params }, (data) => dispatch(setTrendsData(data))],
                [{ url: "/state/vote", params }, (data) => dispatch(setLastestVote(data))],
                [{ url: "/state/comment", params }, (data) => dispatch(setLastestComment(data))],
                [{ url: "/state/distribution", params }, (data) => dispatch(setHeat(data))],
                [{ url: "/count/forum", params }, (data) => dispatch(setForumData(data))],
                [{ url: "/count/latest" }, setLastUpdate],
                [{ url: "/count/thread" }, setTotalThread],
                [{ url: "/count/threadState" }, setTotalRecord],
            ]);
        } else {
            const query = getQueryAllString(params);
            graphQLHandler(query, [
                (data) => dispatch(setTrendsData(data.state.all)),
                (data) => dispatch(setLastestVote(data.state.vote)),
                (data) => dispatch(setLastestComment(data.state.comment)),
                (data) => dispatch(setHeat(data.state.distribution)),
                (data) => dispatch(setForumData(data.count.forum)),
                (data) => setLastUpdate(data.count.latest),
                (data) => setTotalThread(data.count.thread),
                (data) => setTotalRecord(data.count.threadState),
            ]);
        }
    }, []);

    const lineChartData = useMemo(() => {
        const skip = {}
        const trendMap = {};
        trends
            .filter((row) => showForums[row.forum])
            .forEach((row) => {
                if (!trendMap[row.id]) trendMap[row.id] = { name: `${row.id}@${row.title}`, data: [] };
                if (!skip[row.id]) skip[row.id] = false
                const quantity = row[target];
                if (quantity < 2000 && quantity>50 && !skip[row.id]) trendMap[row.id].data.push([row.updated, quantity]);
                skip[row.id] = !skip[row.id]
            });
        const data = Object.values(trendMap).filter((t) => {
            return t.data[0] ? (t.data[0][1] - t.data.at(-1)[1]) / t.data.at(-1)[1] > 0.2 : false;
        });

        return data;
    }, [showForums, trends, target]);

    useEffect(() => {
        dispatch(setChartData(lineChartData));
    }, [lineChartData]);

    const heatmapData = useMemo(
        () =>
            symbolHeat.map((record) => {
                let total = 0;
                for (const forum in record.forum) {
                    if (showForums[forum]) total += record.forum[forum];
                }
                return { x: record.id, y: total };
            }),
        [symbolHeat, showForums]
    );

    return (
        <>
            <Flex flexDirection="column" className="m-3">
                {notice && (
                    <Grid templateColumns={{ sm: "1fr 1fr 1fr" }} templateRows={{ sm: "repeat(2, auto)" }} gap="20px" mb="20px" mt="20px">
                        <Notice title="Total record" content={totalRecord} Icon={StatsIcon} />
                        <Notice title="Total thread" content={totalThread} Icon={DocumentIcon} />
                        <Notice title="Last update" content={lastUpdate} Icon={ClockIcon} isDate={true} />
                    </Grid>
                )}

                <SimpleGrid columns={{ sm: 1 }} spacing="24px" mb="20px" id="main-content">
                    <Card bg={colorMode === "dark" ? "navy.800" : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"} p="0px">
                        <ThreadTrendChart target={target == "comment" ? "Comment" : "Vote"} data={lineChartData} />
                    </Card>
                </SimpleGrid>

                <Grid templateColumns={{ sm: "6fr 1fr" }} templateRows={{ sm: "repeat(2, auto)" }} gap="20px" mb="20px">
                    <Card p="0px" maxH={{ sm: "675px" }} minH={{ sm: "675px" }}>
                        <ThreadTrendTable
                            target={target}
                            datas={target == "vote" ? lastestVote : lastestComment}
                            showForums={showForums}
                            textColor={textColor}
                            handleThreadFetch={handleThreadFetch}
                            setUserSearch={(s) => dispatch(setSearch(s))}
                            userSearch={search}
                            reset={() => dispatch(setChartData(lineChartData))}
                        />
                    </Card>
                    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
                        <Setting forums={showForums} handleForumToggle={setShowForums} handleTargetToggle={setTarget} target={target} />
                    </Card>
                </Grid>
                {/** */}

                <Grid templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr", lg: "1fr 1fr  " }} templateRows={{ lg: "repeat(2, auto)" }} gap="20px" mb="20px" maxW={{ sm: "100%" }}>
                    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
                        <Distribution data={(target == "vote" ? lastestVote : lastestComment).filter((c) => showForums[c.forum])} target={target} />
                    </Card>

                    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
                        <Tree textColor={textColor} title={"Keywords"} subTitle={"Heat map"} data={heatmapData} setSearchTarget={(s) => dispatch(setSearch(s))} />
                    </Card>
                    {/**   */}
                    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
                        <Bar textColor={textColor} title={"SubReddit"} subTitle={"Total"} data={forumData} />
                    </Card>

                    <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
                        <Pie textColor={textColor} title={"SubReddit"} subTitle={"Total"} data={forumData} />
                    </Card>
                </Grid>
            </Flex>
        </>
    );
}
