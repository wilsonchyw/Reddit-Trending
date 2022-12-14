import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import dynamic from 'next/dynamic';
import React from 'react';
import { Stack } from 'react-bootstrap';
import { FONT, FONT_COLOR } from 'variables/css';
import ChartInterface from './chart.interface';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieProps extends ChartInterface {
    header?: React.Element;
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
    };

    return (
        <_Card>
            {header ? (
                header
            ) : (
                <Stack direction="column" mb="40px" p="28px 0px 0px 22px">
                    <Text color={FONT_COLOR.grey}>{subTitle}</Text>
                    <Text fontSize={FONT.large}>{title}</Text>
                </Stack>
            )}

            {data ? (
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
