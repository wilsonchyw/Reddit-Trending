import Pie from 'src/components/chart/Pie';
import Text from 'src/components/Text';
import { useState } from 'react';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FONT, FONT_COLOR } from 'variables/css';

const formatRawData = (data, showOutlier) => {
    const filterOutliers = arr => {
        const values = arr.concat();
        values.sort((a, b) => a - b);

        const q1 = values[Math.floor(values.length / 4)];
        // Likewise for q3.
        const q3 = values[Math.ceil(values.length * (3 / 4))];
        const iqr = q3 - q1;

        // Then find min and max values
        const maxValue = q3 + iqr * 1.5;
        const minValue = q1 - iqr * 1.5;

        // Then filter anything beyond or beneath these values.
        const filteredValues = values.filter(x => x <= maxValue && x >= minValue);

        // Then return
        return filteredValues;
    };

    const roundHundred = value => Math.ceil(value / 100) * 100;

    const step = 10;
    data = data.map(f => f.MAX);

    if (showOutlier) data = filterOutliers(data);
    let max = roundHundred(Math.max(...data));

    const interval = Math.ceil(max / step);
    let distributionArr = Array(step - 1).fill(0);
    let distributions = Array(step)
        .fill('')
        .map((_, num) => max - interval * (step - num))
        .slice(1);
    data.forEach(value => {
        let grade = distributions.findIndex(d => d > value);
        distributionArr[grade]++;
    });
    return {
        data: distributionArr,
        labels: distributions.map((cur, index) => (index == 0 ? `0-${cur}` : `${distributions[index - 1]}-${cur}`))
    };
};

export default function Distribution({ data, target }) {
    const [showOutlier, SetShowOutlier] = useState(false);

    const header = (
        <Stack direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color={FONT_COLOR.grey}>Distribution</Text>
            <div className="d-flex justify-content-between">
                <Text fontSize={FONT.large}>{target}</Text>
                <ButtonGroup className="px-3">
                    <Button onClick={() => SetShowOutlier(true)} variant={showOutlier ? 'primary' : 'outline-primary'} size="sm">
                        Pureify
                    </Button>{' '}
                    <Button onClick={() => SetShowOutlier(false)} variant={showOutlier ? 'outline-primary' : 'primary'} size="sm">
                        Original
                    </Button>
                </ButtonGroup>
            </div>
        </Stack>
    );

    const formattedData = formatRawData(data, showOutlier);

    return (
        <>
            <Pie data={formattedData} header={header} title="" subTitle="" />
        </>
    );
}
