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
import ThreadTrendTable from 'src/components/SymbolDetailPage/ThreadTrendTable';
import graphQLHandler from 'src/lib/graphQLHandler';
import restHandler from 'src/lib/restHandler';
import { RootState } from 'src/store';
import { setForumData, setHeat, setLastestComment, setLastestVote, setTrendsData } from 'src/store/rawDataSlice';
import forumS from 'src/variables/forum.json';
import { GraphQuery } from 'src/variables/graphQL';
import useAgent from 'src/lib/useAgent';
import _Card from 'src/components/card/Card';
import SymbolDetail from 'src/components/SymbolDetailPage/SymbolDetail';
import { SymbolRaw } from 'src/types/Symbol';
import SymbolChart from 'src/components/SymbolDetailPage/SymbolDetailChart';
import SymbolInfo from 'src/components/SymbolDetailPage/SymbolVerbAndThread';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Breadcrumbs from 'src/components/SymbolDetailPage/Breadcrumb';

export default function Symbol() {
    const router = useRouter();
    const { query } = router;
    //const { symbol, threads } = router.query;
    //console.log(router.query);
    const [threadStats, setThreadStat] = useState([]);
    const [symbol, setSymbol] = useState(null);
    const [symbolRaw, setSymbolRaw] = useState<SymbolRaw>([]);

    useEffect(() => {
        console.log(query.symbol);
        const symbolFromQuery = query.symbol ? JSON.parse(query.symbol) : null;
        
        setSymbol(symbolFromQuery);
        if (!symbolFromQuery) {
            console.log('no data');
        } else {
            restHandler([
                [{ url: '/state/lastest', params: { symbols: symbolFromQuery.threads } }, setThreadStat],
                [{ url: '/symbol/one', params: { id: symbolFromQuery.symbol } }, setSymbolRaw]
            ]);
        }
    }, [query]);

    if (!symbol) return null;

    return (
        <Container fluid="xxl">
            <Breadcrumbs symbol={symbol} />
            <Row className="my-3">
                <Col md={6} xl={4} xs={12} className="my-3">
                    <SymbolDetail symbol={symbol} />
                </Col>
                <Col md={6} xl={4} xs={12} className="my-3">
                    <SymbolChart datas={symbolRaw} />
                </Col>
                <Col md={6} xl={4} xs={12} className="my-3">
                    <SymbolInfo symbol={symbol} />
                </Col>
            </Row>
            <Stack className="my-3">
                <ThreadTrendTable datas={threadStats} handleThreadFetch={() => {}} userSearch="" />
            </Stack>
        </Container>
    );
}
