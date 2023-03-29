import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import Loading from 'src/components/Loading';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SymbolChart({ data }) {
    const option = {
        chart: {
            type: 'line',
            toolbar: { show: false },
            parentHeightOffset: 0,
        },

        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false,
                offsetX: -15,
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
        //colors:['#000033']
    } as ApexOptions;

    return data.length ? (
        <Chart
            height={'100px'}
            width={"20%"}
            options={option}
            series={[
                {
                    data: data
                }
            ]}
        />
    ) : (
        <Loading size={300} />
    );
}
