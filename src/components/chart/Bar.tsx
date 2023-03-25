import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Stack } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { FONT, FONT_COLOR } from 'src/variables/css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

/**
 * A function that returns a bar chart wrapped in a Card component.
 * @param {Object} props - The properties for the bar chart and Card component.
 * @param {Object} props.data - The data for the bar chart.
 * @param {string[]} props.data.labels - The labels for the bar chart.
 * @param {number[]} props.data.data - The data for the bar chart.
 * @param {string} props.title - The title for the bar chart.
 * @param {string} props.subTitle - The subtitle for the bar chart.
 * @param {string} [props.color="#03A9F4"] - The color for the bars in the bar chart.
 * @param {JSX.Element} [props.header] - The header for the Card component.
 * @returns {JSX.Element} A bar chart wrapped in a Card component.
 */
export default function Forums({ data, title, subTitle, color = 'rgb(49, 56, 96)', header }) {
    const option = {
        chart: {
            type: 'bar',
            height: 350
        },
        toolbar: { show: false },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {},
        fill: {
            //colors: [color]
            type: 'gradient',
            gradient: {
                colorStops: [
                    {
                        offset: 0.6,
                        color: '#000033',
                        opacity: 50
                    },
                    {
                        offset: 100,
                        color: '#000080',
                        opacity: 1
                    }
                ]
            }
        }
        //colors:['#000033']
    } as ApexOptions;
    option.xaxis.categories = data.labels; //<BarChart chartData={[{ data: [15022, 13663, 10992, 5462, 5371, 1622, 668, 61] }]} chartOptions={barChartOptions} />
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
                        <Chart
                            options={option}
                            series={[
                                {
                                    data: data.data
                                }
                            ]}
                            type="bar"
                            width="100%"
                            height="100%"
                        />
                    </div>
                )
            ) : (
                <Loading size={300} />
            )}
        </_Card>
    );
}
