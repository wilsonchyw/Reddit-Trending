import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Stack } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { FONT, FONT_COLOR } from 'src/variables/css';
import ChartInterface from './chart.interface';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieProps extends ChartInterface {
    header?: any;
}



export default function Pie({ data, title, subTitle, header = null }: PieProps) {
    const pieChartOptions = {
        chart: {
            width: 350,
            type: 'donut'
        },
        labels: data.labels,
        legend: {
            position: 'bottom'
        },
        stroke: {
            show: false
        }
    } as ApexOptions

    return (
        <_Card>
            {header ? (
                header
            ) : (
                <Stack>
                    <Text color={FONT_COLOR.grey}>{subTitle}</Text>
                    <Text fontSize={FONT.large}>{title}</Text>
                </Stack>
            )}

            {data.data.length ? (
                typeof window !== 'undefined' && (
                    <div style={{ minHeight: '400px', maxHeight: '400px' }}>
                        <Chart options={pieChartOptions} series={data.data} type="donut" width="100%" height="100%" />{' '}
                    </div>
                )
            ) : (
                <Loading size={300} />
            )}
        </_Card>
    );

    return typeof window !== 'undefined' && <Chart options={pieChartOptions} series={data.data} type="donut" width="100%" height="100%" />;
}
