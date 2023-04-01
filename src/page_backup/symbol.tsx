import { useRouter } from 'next/router';
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

export default function Symbol() {
    const router = useRouter();
    const symbol =  router.query.symbol
    console.log(symbol);
    const [threads, setThreads] = useState();

    useEffect(() => {
        symbol && restHandler([[{ url: '/state/lastest', params: { symbols: JSON.parse(symbol).threads} }, setThreads]]);
    }, [symbol]);

    return <div>{JSON.stringify(threads)}</div>;
}

/* export async function getStaticProps(context) {
    const { query } = context;
    const symbol = query.symbol;
    return {
        props: { symbol } // will be passed to the page component as props
    };
} */
/* <ThreadTrendTable
            target={'vote'}
            datas={target == 'vote' ? lastestVote : lastestComment}
            showForums={showForums}
            handleThreadFetch={handleThreadFetch}
            //setUserSearch={s => dispatch(setSearch(s))}
            //setChartVisible={setChartVisible}
            handleTargetToggle={setTarget}
            userSearch={search}
        /> */
