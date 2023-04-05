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

/**
 * A function that returns a pie chart wrapped in a Card component.
 * @param {Object} props - The properties for the pie chart and Card component.
 * @param {Object} props.data - The data for the pie chart.
 * @param {string[]} props.data.labels - The labels for the pie chart.
 * @param {any[]} props.data.data - The data for the pie chart.
 * @param {string} props.title - The title for the pie chart.
 * @param {string} props.subTitle - The subtitle for the pie chart.
 * @param {JSX.Element} [props.header] - The header for the Card component.
 * @returns {JSX.Element} A pie chart wrapped in a Card component.
 */
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
        //colors: ['#000033', '#00004d', '#000066', '#000080']
        /* fill: {
            colors: ['rgb(49, 56, 96)', 'rgb(21, 25, 40)']
          } */
    } as ApexOptions;

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
                <div style={{ minHeight: '400px', maxHeight: '400px' }}>
                <Chart options={pieChartOptions} series={data.data} type="donut" width="100%" height="100%" />{' '}
            </div>
            ) : (
                <Loading size={300} />
            )}
        </_Card>
    );
}
