import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Stack } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { FONT, FONT_COLOR } from 'src/variables/css';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Forums({ data, title, subTitle, color = '#03A9F4' }) {
    console.log(data);
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
            colors: [color]
        }
    } as ApexOptions;
    option.xaxis.categories = data.labels; //<BarChart chartData={[{ data: [15022, 13663, 10992, 5462, 5371, 1622, 668, 61] }]} chartOptions={barChartOptions} />
    return (
        <_Card>
            <Stack>
                <Text color={FONT_COLOR.grey}>{subTitle}</Text>
                <Text fontSize={FONT.large}>{title}</Text>
            </Stack>

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
