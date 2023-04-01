import { useEffect, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { useDispatch, useSelector } from 'react-redux';
import Distribution from 'src/components/home/Distribution';
import ForumCount from 'src/components/home/ForumCount';
import ForumDistribution from 'src/components/home/ForumDistribution';
import Forums from 'src/components/home/Forums';
import KeyWordHeat from 'src/components/home/KeyWordHeat';
import Notice from 'src/components/home/Notice';
import ThreadTrendChart from 'src/components/home/ThreadTrendChart';
import ThreadTrendTable from 'src/components/home/ThreadTrendTable';
import graphQLHandler from 'src/lib/graphQLHandler';
import restHandler from 'src/lib/restHandler';
import { RootState } from 'src/store';
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from 'src/store/rawDataSlice';
import forumS from 'src/variables/forum.json';
import { GraphQuery } from 'src/variables/graphQL';
import useAgent from 'src/lib/useAgent';

export interface State {
    MAX: number;
    MIN: number;
    change: number;
    forum: string;
    ID: string;
    TITLE: string;
}

export default function Dashboard({ vote, comment, distribution, forums, latest, thread, threadState }) {
    useEffect(() => {
        restHandler([[{ url: '/state/all', params }, data => dispatch(setTrendsData(data))]]);
        //dispatch(setTrendsData(all));
        dispatch(setLastestVote(vote));
        dispatch(setLastestComment(comment));
        dispatch(setHeat(distribution));
        dispatch(setForumData(forums));
        setLastUpdate(latest);
        setTotalThread(thread);
        setTotalRecord(threadState);
    }, []);

    const isMobile = useAgent()
    const dispatch = useDispatch();
    const [showForums, setShowForums] = useState<any>(forumS);
    const [target, setTarget] = useState('vote');
    const [lastUpdate, setLastUpdate] = useState(null);
    const [totalRecord, setTotalRecord] = useState(null);
    const [totalThread, setTotalThread] = useState(null);
    const [chartVisible, setChartVisible] = useState<boolean>(false);

    const { minVote, minComment, dateRange, notice, search, useRestApi } = useSelector((state: RootState) => state.setting);
    const { lastestVote, lastestComment } = useSelector((state: RootState) => state.raw);

    const params = {
        minVote: minVote,
        minComment: minComment,
        dateRange: dateRange
    };

    const forumData = useMemo(() => {
        const forum = forums.filter(f => showForums[f.forum]).sort((a, b) => b.count - a.count);
        return {
            labels: forum.map(f => f.forum),
            data: forum.map(f => f.count)
        };
    }, [showForums, forums]);

    const handleThreadFetch = id => {
        const options = {
            url: '/thread/one',
            params: { ...params, id: id }
        };
        const callback = data => {
            dispatch(
                setTrendsData([
                    { name: 'Vote', data: data.map(d => [d.updated, d.vote]) },
                    { name: 'Comment', data: data.map(d => [d.updated, d.comment]) }
                ])
            );
        };
        if (useRestApi) {
            restHandler([[options, callback]]);
        } else {
            graphQLHandler(GraphQuery.fetchOne, { ...params, id: id }, [data => callback(data.thread.one)]);
        }
        setChartVisible(true)
    };

    return (
        <>
            <Container fluid>
                <Stack id="main-content" className="my-2">
                    <ThreadTrendChart target={target} showForums={showForums} chartVisible={chartVisible}  setChartVisible={setChartVisible} />
                </Stack>

                <Stack className="my-2">
                    <ThreadTrendTable
                        target={target}
                        datas={target == 'vote' ? lastestVote : lastestComment}
                        showForums={showForums}
                        handleThreadFetch={handleThreadFetch}
                        //setUserSearch={s => dispatch(setSearch(s))}
                        //setChartVisible={setChartVisible}
                        handleTargetToggle= {setTarget}
                        userSearch={search}
                    />
                </Stack>

                <Stack className="my-2">
                    <Forums
                        {...{
                            forums: showForums,
                            handleForumToggle: setShowForums,
                            handleTargetToggle: setTarget,
                            target: target
                        }}
                    />
                </Stack>

                <Stack className="mt-1">
                    <Row>
                        <Col lg={6} className="mb-2 pe-lg-0">
                            <Distribution data={(target == 'vote' ? lastestVote : lastestComment).filter(c => showForums[c.forum])} target={target} />
                        </Col>

                        {!isMobile &&<Col lg={6} className="mb-2 ">
                            <KeyWordHeat showForums={showForums} />
                        </Col>}

                        <Col lg={6} className="mb-2 pe-lg-0">
                            <ForumCount datas={forumData} />
                        </Col>

                        <Col lg={6} className="mb-2">
                            <ForumDistribution datas={target == 'vote' ? lastestVote : lastestComment} />
                        </Col>
                    </Row>
                </Stack>

                {notice && (
                    <Row className="px-1 mt-0">
                        <Notice title="Total record" content={totalRecord} Icon={''} />
                        <Notice title="Total thread" content={totalThread} Icon={''} />
                        <Notice title="Last update" content={lastUpdate} Icon={''} isDate={true} />
                    </Row>
                )}
            </Container>
        </>
    );
}

export async function getStaticProps(context) {
    const params = { minVote: 0, minComment: 0, dateRange: 1 };
    const [vote, comment, distribution, forums, latest, thread, threadState] = await restHandler([
        //[{ url: '/state/all' }],
        [{ url: '/state/vote' }],
        [{ url: '/state/comment', params }],
        [{ url: '/state/distribution', params }],
        [{ url: '/count/forum', params }],
        [{ url: '/count/latest' }],
        [{ url: '/count/thread' }],
        [{ url: '/count/threadState' }]
    ]);
    //console.log([all, vote, comment, distribution, forums, latest, thread, threadState]);
    for(const i of [vote, comment, distribution, forums, latest, thread, threadState]){
        if(i==undefined){
            throw new Error(`Failed to fetch posts, some API call fail`);
        }
    }
    
    return {
        props: { vote, comment, distribution, forums, latest, thread, threadState }, // will be passed to the page component as props
        revalidate: 1800
    };
}
