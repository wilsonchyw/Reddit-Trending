import { Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
export default function Slider({ title, min = 0, max, value, reducers }) {
    const dispatch = useDispatch();
    return (
        <div mb="16px">
            <div className="d-flex justify-content-between">
                <Text fontSize="md" fontWeight="600" mb="4px" >
                    {title}
                </Text>
                <Text fontSize="md" fontWeight="600" mb="4px">
                    {value}
                </Text>
            </div>

            <input type="range" className="form-range" min={min} max={max} value={value} onChange={(e) => dispatch(reducers(e.target.value))} />
        </div>
    );
}
