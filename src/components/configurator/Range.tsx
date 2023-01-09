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

/**
 * A function that returns a slider element.
 * @param {Object} props - The properties for the slider.
 * @param {string} props.title - The title for the slider.
 * @param {number} [props.min=0] - The minimum value for the slider.
 * @param {number} props.max - The maximum value for the slider.
 * @param {number} props.value - The current value of the slider.
 * @param {Function} props.reducers - A function that dispatches an action to update the state.
 * @param {boolean} [props.input=false] - A boolean indicating whether to show a text input for the slider value.
 * @returns {JSX.Element} A slider element.
 */
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
