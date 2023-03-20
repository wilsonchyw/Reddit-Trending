import { useMemo, useState ,useEffect} from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Tree from 'src/components/chart/Tree';
import Text from 'src/components/Text';
import { RootState } from 'src/store';
import { setSearch } from 'src/store/settingSlice';
import { FONT, FONT_COLOR } from 'src/variables/css';

interface SymbolHeat {
    data: string[];
    forum: { [key: string]: number };
    id: string;
    totle: number;
}

interface HeatmapData {
    x: string;
    y: number;
}

interface HeatmapDatas extends Array<HeatmapData> {}

export default function KeyWordHeat({ showForums }) {
    const [min, setMin] = useState<number>(2);
    const dispatch = useDispatch();
    const { symbolHeat } = useSelector((state: RootState) => state.raw);
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRender(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [shouldRender]);

    

    const heatmapData = useMemo(
        (): HeatmapDatas =>
            symbolHeat
                .map((record: SymbolHeat) => {
                    let total = 0;
                    for (const forum in record.forum) {
                        if (showForums[forum]) total += record.forum[forum];
                    }
                    return { x: record.id, y: total };
                })
                .filter((data: HeatmapData) => data.y >= min),
        [symbolHeat, showForums, min]
    );

    if (!shouldRender) return null;

    const header = (
        <Stack>
            <Text color={FONT_COLOR.grey}>Distribution</Text>
            <div className="d-flex justify-content-between">
                <Text fontSize={FONT.large}>Keywords</Text>
                <Slider value={min} handleChange={setMin} />
            </div>
        </Stack>
    );

    return <Tree title={'Keywords'} subTitle={'Heat map'} data={heatmapData} setSearchTarget={s => dispatch(setSearch(s))} header={header} />;
}

function Slider({ value, handleChange }) {
    return (
        <Row>
            <Col xs={4}>
                <Text fontSize={FONT.normal}>{`Min ${value}`}</Text>
            </Col>
            <Col>
                <input type="range" className="form-range" min={0} max={10} value={value} onChange={e => handleChange(e.target.value)} />
            </Col>
        </Row>
    );
}
