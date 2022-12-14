import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Text from 'src/components/Text';
import { FONT } from 'src/variables/css';

interface Slider {
    title: string;
    min?: number;
    max: number;
    reducers: Function;
    input?: boolean;
    value?: any;
}
export default function Slider({ title, min = 0, max, value, reducers, input = false }: Slider) {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="d-flex justify-content-between">
                <Text fontSize={FONT.normal}>{title}</Text>
                {input ? (
                    <Form.Control
                        size="sm"
                        className="w-25 text-end"
                        type="text"
                        value={value}
                        onChange={e => dispatch(reducers(e.target.value ? e.target.value : 1))}
                    />
                ) : (
                    <Text fontSize={FONT.normal}>{value}</Text>
                )}
            </div>

            <input type="range" className="form-range" min={min} max={max} value={value} onChange={e => dispatch(reducers(e.target.value))} />
        </div>
    );
}
