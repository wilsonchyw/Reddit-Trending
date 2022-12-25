import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Stack } from 'react-bootstrap';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import Text from 'src/components/Text';
import { FONT, FONT_COLOR } from 'src/variables/css';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function Tree({ data, title, subTitle, setSearchTarget, header = null }) {
    const options = {
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap',
            toolbar: { show: false },
            events: {
                click(event, chartContext, config) {
                    const label = config.config.series[config.seriesIndex].data[config.dataPointIndex].x;
                    setSearchTarget(label.toLowerCase());
                }
            }
        },
        plotOptions: {
            treemap: {
                shadeIntensity: 0.5,
                radius: 10,
                useFillColorAsStroke: true
            }
        },
        
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

            {data.length ? (
                typeof window !== 'undefined' && (
                    <div style={{ minHeight: '400px', maxHeight: '400px' }}>
                        <Chart options={options} series={[{ data: data }]} type="treemap" width="100%" height="100%" />
                    </div>
                )
            ) : (
                <Loading size={300} />
            )}
        </_Card>
    );
}
