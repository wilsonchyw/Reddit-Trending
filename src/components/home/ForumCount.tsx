import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Bar from 'src/components/chart/Bar';
import Pie from 'src/components/chart/Pie';
import Text from 'src/components/Text';
import { FONT, FONT_COLOR } from 'src/variables/css';
import ChartInterface from '../chart/chart.interface';
enum Chart {
    Bar = 'Bar',
    Pie = 'Pie'
}

export default function ForumCount({ datas }: { datas: ChartInterface['data'] }) {
    const [chart, setChart] = useState<string>(Chart.Pie);

    const header = (
        <Stack>
            <Text color={FONT_COLOR.grey}>Total</Text>
            <div className="d-flex justify-content-between">
                <Text fontSize={FONT.large}>{'SubReddit'}</Text>
                <ButtonGroup className="px-3">
                    <Button onClick={() => setChart(Chart.Pie)} variant={chart == Chart.Pie ? 'success' : 'outline-primary'} size="sm">
                        {Chart.Pie}
                    </Button>{' '}
                    <Button onClick={() => setChart(Chart.Bar)} variant={chart == Chart.Bar ? 'primary' : 'outline-success'} size="sm">
                        {Chart.Bar}
                    </Button>
                </ButtonGroup>
            </div>
        </Stack>
    );

    if (chart == Chart.Pie) {
        return <Pie data={datas} title={'SubReddit'} subTitle={'hr'} header={header} />;
    } else {
        return <Bar data={datas} title={'SubReddit'} subTitle={'hr'} color={'#008FFB'} header={header} />;
    }
}
