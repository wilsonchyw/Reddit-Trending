import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import _Card from 'src/components/card/Card';
import Loading from 'src/components/Loading';
import type { SymbolRaw } from 'src/types/Symbol';
import { lineChartOptions } from 'src/variables/charts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
    datas: SymbolRaw[];
}

export default function SymbolChart({ datas }: Props): ReactElement {
    const opt = {
        ...lineChartOptions,
        xaxis: {
            ...lineChartOptions.xaxis,
            axisTicks: {
                show: true,
                borderType: 'solid'
            },

            tickAmount: 10
            //categories: datas.map(x => x.created)
        },
        yaxis: {
            ...lineChartOptions.yaxis,
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: true,
                borderType: 'solid'
            }
        },
        chart: {
            animations: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 3,
            dashArray: 0
        },
        labels: datas.map(x => x.created)
    } as ApexOptions;

    const vote = {
        name: 'Vote',
        data: []
    };
    const comment = {
        name: 'Comment',
        data: []
    };

    for (const data of datas) {
        vote.data.push(data.vote);
        comment.data.push(data.comment);
    }
    //return <_Card background={'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'} className="h-100"><Loading isWhite={true} size={250} /></_Card>
    return (
        <_Card background={'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)'} style={{ width: '100%', paddingBottom: '100%' }} nopadding>
            {datas ? ( //datas.length
                <div className="m-0 p-0 w-100 h-100" style={{ position: 'absolute' }}>
                    {typeof window !== 'undefined' && <Chart options={opt} series={[vote, comment]} type="line" width="100%" height="95%" />}
                </div>
            ) : (
                <Loading isWhite={true} size={250} />
            )}
        </_Card>
    );
}
