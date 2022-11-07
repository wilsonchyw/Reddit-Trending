// Chakra Imports
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { HSeparator } from "components/Separator/Separator";
import graphQLHandler from "lib/graphQLHandler";
import restHandler from "lib/restHandler";
import React, { useRef, useState } from "react";
import GitHubButton from "react-github-btn";
import { useDispatch, useSelector } from "react-redux";
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from "store/rawDataSlice";
import { setDateRange, setFetchLimit, setMaxYAxis, setMinComment, setMinVote, toggleNotice, toggleUseRestApi } from "store/settingSlice";
import { getQueryAllString } from "variables/graphQL";
import Slider from "./Range";
import Toggle from "./Toggle";

export default function Configurator(props) {
    const dispatch = useDispatch();
    const { sidebarVariant, setSidebarVariant, secondary, isOpen, onClose, fixed, ...rest } = props;
    const [switched, setSwitched] = useState(props.isChecked);

    const { colorMode, toggleColorMode } = useColorMode();

    let bgButton = useColorModeValue("linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)", "white");
    let colorButton = useColorModeValue("white", "gray.700");
    const bgDrawer = useColorModeValue("white", "navy.800");
    const settingsRef = useRef();
    const { fetchLimit, minVote, minComment, maxYAxis, dateRange, cache, notice, useRestApi } = useSelector((state) => state.setting);

    const fetchData = () => {
        const reducers = [setTrendsData, setForumData, setLastestVote, setLastestComment, setHeat];
        reducers.forEach((reducer) => dispatch(reducer([])));
        const params = {
            limit: fetchLimit,
            minVote: minVote,
            minComment: minComment,
            dateRange: dateRange,
        };
        if (useRestApi) {
            restHandler([
                [{ url: "/state/all", params }, (data) => dispatch(setTrendsData(data))],
                [{ url: "/state/vote", params }, (data) => dispatch(setLastestVote(data))],
                [{ url: "/state/comment", params }, (data) => dispatch(setLastestComment(data))],
                [{ url: "/state/distribution", params }, (data) => dispatch(setHeat(data))],
                [{ url: "/count/forum", params }, (data) => dispatch(setForumData(data))],
            ]);
        } else {
            const query = getQueryAllString(params);
            graphQLHandler(query, [
                (data) => dispatch(setTrendsData(data.state.all)),
                (data) => dispatch(setLastestVote(data.state.vote)),
                (data) => dispatch(setLastestComment(data.state.comment)),
                (data) => dispatch(setHeat(data.state.distribution)),
                (data) => dispatch(setForumData(data.count.forum)),
            ]);
        }
    };

    return (
        <>
            <Drawer isOpen={props.isOpen} onClose={props.onClose} placement={document.documentElement.dir === "rtl" ? "left" : "right"} finalFocusRef={settingsRef} blockScrollOnMount={false}>
                <DrawerOverlay />
                <DrawerContent bg={bgDrawer}>
                    <DrawerHeader pt="24px" px="24px">
                        <DrawerCloseButton />
                        <Text fontSize="xl" fontWeight="bold" mt="16px">
                            Settings
                        </Text>

                        <HSeparator />
                    </DrawerHeader>
                    <DrawerBody w="340px" ps="24px" pe="40px">
                        <Flex flexDirection="column">
                            <Slider title="Min Vote" max={200} value={minVote} reducers={setMinVote} />
                            <Slider title="Min Comment" max={200} value={minComment} reducers={setMinComment} />
                            <Slider title="Max Chart Y Axis" max={4000} value={maxYAxis} reducers={setMaxYAxis} />
                            <Slider title="Max fetch quantity" max={4000} min={1000} value={fetchLimit} reducers={setFetchLimit} />
                            <Slider title="Max fetch date range" max={7} min={1} value={dateRange} reducers={setDateRange} />
                            <Button w="100%" mb="16px" bg={bgButton} color={colorButton} fontSize="xs" variant="no-effects" px="30px" onClick={fetchData}>
                                Refresh
                            </Button>
                            <HSeparator />
                            <Toggle title={"Notices"} content={`${notice ? "On" : "Off"}`} callback={() => dispatch(toggleNotice())} />
                            <Toggle title={"Dark/Light"} content={`Toggle ${colorMode === "light" ? "Dark" : "Light"}`} callback={toggleColorMode} />
                            <Toggle title={useRestApi ? "RestAPI" : "GraphQL"} content={`Toggle ${useRestApi === true ? "GraphQL" : "RestAPI"}`} callback={() => dispatch(toggleUseRestApi())} />

                            <HSeparator />
                            <Flex justifyContent="center" alignItems="center" w="100%" className="my-3">
                                <GitHubButton href="https://github.com/wilsonych/Reddit-Trending" data-icon="octicon-star" data-show-count="true" aria-label="Reddit-Trending on GitHub">
                                    Star
                                </GitHubButton>
                            </Flex>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
