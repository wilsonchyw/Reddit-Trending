import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { Badge, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { RootState } from 'src/store';
import { setSearch } from 'src/store/settingSlice';
import { lineChartOptions } from 'src/variables/charts';
import { FONT, FONT_COLOR } from 'src/variables/css';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ThreadTrendChart({ target, showForums }) {
    const { maxYAxis } = useSelector((state: RootState) => state.setting);
    const [max, setMax] = useState<number>(maxYAxis);
    const [visible, setVisible] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [initData, setInitData] = useState<any[]>([]);
    const dispatch = useDispatch();
    const { trends } = useSelector((state: RootState) => state.raw);

    lineChartOptions.chart.events = {
        click(event, chartContext, config) {
            const id = config.config.series[config.seriesIndex].name.split('@')[0];
            if (id) dispatch(setSearch(id));
        }
    };

    useMemo(() => {
        if (trends.length && (trends[0].name == 'Vote' || trends[0].name == 'Comment')) return setData(trends);
        const skip = {};
        const trendMap = {};
        trends
            .filter(row => showForums[row.forum])
            .forEach(row => {
                if (!trendMap[row.id]) trendMap[row.id] = { name: `${row.id}@${row.title}`, data: [] };
                if (!skip[row.id]) skip[row.id] = false;
                const quantity = row[target];
                if (quantity < 2000 && quantity > 100 && !skip[row.id]) trendMap[row.id].data.push([row.updated, quantity]);
                skip[row.id] = !skip[row.id];
            });
        const data = Object.values(trendMap).filter((t: any) => {
            return t.data[0] ? (t.data[0][1] - t.data.at(-1)[1]) / t.data.at(-1)[1] > 0.2 : false;
        });
        setData(data);
        return data;
    }, [showForums, trends, target]);

    useMemo(() => {
        if (trends.length && trends[0].name != 'Vote' && trends[0].name != 'Comment') setInitData(data);
    }, [showForums, trends, target]);

    const reset = () => setData(initData);

    const opt = {
        ...lineChartOptions,
        yaxis: {
            ...lineChartOptions.yaxis,
            max: maxYAxis
        }
    } as ApexOptions;

    if (!visible) {
        return (
            <_Card background={'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'} hide minW="100%">
                <Row onClick={() => setVisible(!visible)}>
                    <Col>
                        <Text color={FONT_COLOR.white} fontSize={FONT.large}>
                            Chart
                        </Text>
                    </Col>

                    <Col className="d-flex justify-content-end p-1">
                        <Badge bg="light" text="dark" onClick={() => setVisible(!visible)} style={{ maxHeight: '30px' }}>
                            {visible ? 'HIDE' : 'SHOW'}
                        </Badge>
                    </Col>
                </Row>
            </_Card>
        );
    }

    return (
        <_Card background={'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'} minW="100%">
            <Row>
                <Col direction="column">
                    <Text color={FONT_COLOR.grey} fontSize={FONT.normal}>
                        Tread
                    </Text>
                    <br />
                    <Text color={FONT_COLOR.white} fontSize={FONT.large}>
                        {target == 'comment' ? 'Comment' : 'Vote'}
                    </Text>
                </Col>

                <Col>
                    <Badge bg="light" text="dark" onClick={() => setVisible(!visible)} className="float-end mx-2">
                        {visible ? 'Hide' : 'Show'}
                    </Badge>
                    <Badge bg="primary" className="float-end mx-2" onClick={reset}>
                        Reset
                    </Badge>
                </Col>
            </Row>

            {data.length ? (
                <div className="m-0 p-0 w-100 h-100" style={{ minHeight: '450px', minWidth: '100%' }}>
                    {typeof window !== 'undefined' && <Chart options={opt} series={data} type="line" width="100%" height="100%" />}
                </div>
            ) : (
                <Loading isWhite={true} size={450} />
            )}
        </_Card>
    );
}
