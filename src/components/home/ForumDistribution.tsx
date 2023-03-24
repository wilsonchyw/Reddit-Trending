import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useSelector } from 'react-redux';
import Bar from 'src/components/chart/Bar';
import Pie from 'src/components/chart/Pie';
import Text from 'src/components/Text';
import { State } from 'src/pages';
import { RootState } from 'src/store';
import { FONT, FONT_COLOR } from 'src/variables/css';
import ChartInterface from '../chart/chart.interface';

enum Chart {
    Bar = 'Bar',
    Pie = 'Pie'
}

export default function ForumDistribution({ datas }: { datas: State[] }) {
    const [chart, setChart] = useState<string>(Chart.Bar);
    const { dateRange } = useSelector((state: RootState) => state.setting);
    let map = {};
    datas.forEach((data: State) => {
        if (!map[data.forum]) map[data.forum] = 0;
        map[data.forum]++;
    });
    map = Object.fromEntries(Object.entries(map).sort(([, a]: [string, number], [, b]: [string, number]) => b - a));

    const _data = {
        labels: Object.keys(map),
        data: Object.values(map)
    };

    const header = (
        <Stack>
            <Text color={FONT_COLOR.grey}>Distribution</Text>
            <div className="d-flex justify-content-between">
                <Text fontSize={FONT.large}>{dateRange * 24 + 'hrs'}</Text>
                <ButtonGroup className="px-3">
                    <Button onClick={() => setChart(Chart.Pie)} variant={chart == Chart.Pie ? 'primary' : 'outline-primary'} size="sm">
                        {Chart.Pie}
                    </Button>{' '}
                    <Button onClick={() => setChart(Chart.Bar)} variant={chart == Chart.Bar ? 'primary' : 'outline-primary'} size="sm">
                        {Chart.Bar}
                    </Button>
                </ButtonGroup>
            </div>
        </Stack>
    );

    if (chart == Chart.Pie) {
        return <Pie data={_data} title={'SubReddit'} subTitle={dateRange * 24 + 'hr'} header={header} />;
    } else {
        return <Bar data={_data} title={'SubReddit'} subTitle={dateRange * 24 + 'hr'} color={'#00E396'} header={header} />;
    }
}
