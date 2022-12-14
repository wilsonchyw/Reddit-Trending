import Text from 'src/components/Text';
import { Button } from 'react-bootstrap';
import { FONT } from 'src/variables/css';
export default function Toggle({ title, content, callback }) {
    return (
        <div className="my-2">
            <div className="d-flex justify-content-between align-items-center">
                <Text fontSize={FONT.normal}>{title}</Text>
                <Button onClick={callback}>{content}</Button>
            </div>
        </div>
    );
}
