import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import _Card from 'src/components/card/Card';
import formatDate from 'src/lib/formatDate';
import { capitalizeFirstLetter } from 'src/lib/text';
import { Symbol } from 'src/types/Symbol';
import { FONT } from 'src/variables/css';
import Text from '../Text';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
    symbol: Symbol;
}

export default function SymbolInfo({ symbol }: Props): ReactElement {
    const option = {
        chart: {
            height: 'auto',
            type: 'bar',
            toolbar: {
                show: false
            }
        },

        toolbar: { show: false },
        plotOptions: {
            bar: {
                borderRadius: 4
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            tickAmount: 3,
            labels: {
                show: true,
                rotate: 0
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return parseInt(val);
                }
            }
        },

        fill: {
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
        },
        labels: symbol.daily.vote.map((_, index) => formatDate(30 - index))
        //colors:['#000033']
    } as ApexOptions;

    return (
        <_Card style={{ width: '100%', paddingBottom: '100%' }} nopadding>
            <div style={{ position: 'absolute' }} className="p-3 w-100">
                <Row>
                    <div>
                        <Text fontWeight={700} fontSize={FONT.normal}>
                            Related verbs
                        </Text>
                    </div>
                    <div className="d-flex align-items-start flex-wrap">
                        {symbol.verb.slice(0,40).map(
                            (
                                v //.sort()
                            ) => (
                                <Text key={v}>
                                    <Badge variant="primary" className="m-1">
                                        {capitalizeFirstLetter(v)}
                                    </Badge>
                                </Text>
                            )
                        )}
                    </div>
                </Row>

                <Row className="h-50">
                    <div>
                        <Text fontWeight={700} fontSize={FONT.normal}>
                            Related threads
                        </Text>
                    </div>
                    <div>
                        <Chart
                            options={option}
                            height="100%"
                            series={[
                                {
                                    name: 'Quantity',
                                    data: symbol.daily.threads
                                }
                            ]}
                            type="bar"
                        />
                    </div>
                </Row>
            </div>
        </_Card>
    );
}
