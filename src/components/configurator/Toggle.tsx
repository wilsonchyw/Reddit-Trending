import { Button } from 'react-bootstrap';
import Text from 'src/components/Text';
import { FONT } from 'src/variables/css';

/**
 * A function that returns a toggle element.
 * @param {Object} props - The properties for the toggle.
 * @param {string} props.title - The title for the toggle.
 * @param {string} props.content - The content for the toggle button.
 * @param {Function} props.callback - A function to be called when the toggle button is clicked.
 * @returns {JSX.Element} A toggle element.
 */
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
