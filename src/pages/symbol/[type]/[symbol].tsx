import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Breadcrumbs from 'src/components/SymbolDetailPage/Breadcrumb';
import SymbolDetail from 'src/components/SymbolDetailPage/SymbolDetail';
import SymbolChart from 'src/components/SymbolDetailPage/SymbolDetailChart';
import SymbolInfo from 'src/components/SymbolDetailPage/SymbolVerbAndThread';
import ThreadTrendTable from 'src/components/SymbolDetailPage/ThreadTrendTable';
import restHandler from 'src/lib/restHandler';
import { SymbolRaw } from 'src/types/Symbol';

export default function Symbol() {
    const router = useRouter();
    //const { query } = router;
    const { symbol,type } = router.query;
    //const { pathname } = router;
    //console.log(router.query);
    //const { _symbol } = useSelector((state: RootState) => state.symbol);
    const [threadStats, setThreadStat] = useState([]);
    const [_symbol, setSymbol] = useState(null);
    const [symbolRaw, setSymbolRaw] = useState<SymbolRaw>([]);

    useEffect(() => {
        if (symbol) {
            let localSymbol = localStorage.getItem('symbol') as any;
            localSymbol = localSymbol == 'undefined' ? {} : JSON.parse(localSymbol);
            if (!localSymbol || localSymbol.symbol != symbol) {
                //const type= pathname.includes("stock")?"stock":"crypto"
                restHandler([
                    [
                        { url: '/symbol', params: { id: symbol,type } },
                        datas => {
                            setSymbol(datas[0]);
                            localStorage.setItem('symbol', JSON.stringify(datas[0]));
                        }
                    ]
                ]);
            } else {
                setSymbol(localSymbol);
            }
        }
    }, [symbol]);

    useEffect(() => {
        if (_symbol) {
            console.log(_symbol.threads);
            restHandler([
                [{ url: '/state/lastest', params: { symbols: JSON.stringify(_symbol.threads.slice(0, 1000)) } }, setThreadStat],
                [{ url: '/symbol/one', params: { id: _symbol.symbol } }, setSymbolRaw]
            ]);
        }
    }, [_symbol]);

    if (!_symbol) return null;

    return (
        <Container fluid="xxl">
            <Breadcrumbs symbol={_symbol} />
            <Row className="my-3">
                <Col md={6} xl={4} xs={12} className="mb-3">
                    <SymbolDetail symbol={_symbol} />
                </Col>
                <Col md={6} xl={4} xs={12} className="mb-3">
                    <SymbolChart datas={symbolRaw} />
                </Col>
                <Col md={6} xl={4} xs={12} className="mb-3">
                    <SymbolInfo symbol={_symbol} />
                </Col>
            </Row>
            <Stack className="mb-3">
                <ThreadTrendTable datas={threadStats} handleThreadFetch={() => {}} userSearch="" />
            </Stack>
        </Container>
    );
}
