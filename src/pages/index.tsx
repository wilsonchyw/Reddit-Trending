import { useEffect, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import { useDispatch, useSelector } from 'react-redux';
import Bar from 'src/components/chart/Bar';
import Pie from 'src/components/chart/Pie';
import Distribution from 'src/components/home/Distribution';
import Forums from 'src/components/home/Forums';
import KeyWordHeat from 'src/components/home/KeyWordHeat';
import Notice from 'src/components/home/Notice';
import ThreadTrendChart from 'src/components/home/ThreadTrendChart';
import ThreadTrendTable from 'src/components/home/ThreadTrendTable';
import graphQLHandler from 'src/lib/graphQLHandler';
import restHandler from 'src/lib/restHandler';
import { RootState } from 'src/store';
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from 'src/store/rawDataSlice';
import FORUMS from 'src/variables/forum.json';
import { GraphQuery } from 'src/variables/graphQL';
import Forumbar from 'src/components/home/ForumBar';

export interface State {
    MAX:number
    MIN:number
    change:number
    forum:string
    id:string
    title:string
}

export default function Dashboard() {
    const dispatch = useDispatch();
    const [showForums, setShowForums] = useState<any>(FORUMS);
    const [target, setTarget] = useState('vote');
    const [lastUpdate, setLastUpdate] = useState(null);
    const [totalRecord, setTotalRecord] = useState(null);
    const [totalThread, setTotalThread] = useState(null);

    const { fetchLimit, minVote, minComment, dateRange, notice, search, useRestApi } = useSelector((state: RootState) => state.setting);
    const { forums, lastestVote, lastestComment } = useSelector((state: RootState) => state.raw);

    const params = {
        limit: fetchLimit,
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
    };
    useEffect(() => {
        if (useRestApi) {
            restHandler([
                [{ url: '/state/all', params }, data => dispatch(setTrendsData(data))],
                [{ url: '/state/vote', params }, data => dispatch(setLastestVote(data))],
                [{ url: '/state/comment', params }, data => dispatch(setLastestComment(data))],
                [{ url: '/state/distribution', params }, data => dispatch(setHeat(data))],
                [{ url: '/count/forum', params }, data => dispatch(setForumData(data))],
                [{ url: '/count/latest' }, setLastUpdate],
                [{ url: '/count/thread' }, setTotalThread],
                [{ url: '/count/threadState' }, setTotalRecord]
            ]);
        } else {
            graphQLHandler(GraphQuery.fetchAll, params, [
                data => dispatch(setTrendsData(data.state.all)),
                data => dispatch(setLastestVote(data.state.vote)),
                data => dispatch(setLastestComment(data.state.comment)),
                data => dispatch(setHeat(data.state.distribution)),
                data => dispatch(setForumData(data.count.forum)),
                data => setLastUpdate(data.count.latest),
                data => setTotalThread(data.count.thread),
                data => setTotalRecord(data.count.threadState)
            ]);
        }
    }, []);

    return (
        <>
            <Container fluid>
                <Stack id="main-content" className="my-2">
                    <ThreadTrendChart target={target} showForums={showForums} />
                </Stack>

                <Stack className="my-2">
                    <ThreadTrendTable
                        target={target}
                        datas={target == 'vote' ? lastestVote : lastestComment}
                        showForums={showForums}
                        handleThreadFetch={handleThreadFetch}
                        //setUserSearch={s => dispatch(setSearch(s))}
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

                        <Col lg={6} className="mb-2 ">
                            <KeyWordHeat showForums={showForums} />
                        </Col>

                        <Col lg={6} className="mb-2 pe-lg-0">
                            <Bar title={'SubReddit'} subTitle={'Total'} data={forumData} />
                        </Col>

                        <Col lg={6} className="mb-2">
                            <Forumbar datas={target == 'vote' ? lastestVote : lastestComment} />
                        </Col>

                        <Col lg={6} className="mb-2 pe-lg-0">
                            <Pie title={'SubReddit'} subTitle={'Total'} data={forumData} />
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
