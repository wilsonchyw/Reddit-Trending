import Card from 'react-bootstrap/Card';
interface _Card {
    children?: any;
    background?: string;
    minW?: string;
    minH?: string;
    maxH?: string;
    fontWeight?: string;
    className?: string;
    style?: Object;
    hide?: boolean;
}

/**
 * A function that returns a Card component from the react-bootstrap library.
 * @param {Object} props - The properties for the Card component.
 * @param {Object} [props.children] - The content of the Card component.
 * @param {string} [props.background] - The background color of the Card component.
 * @param {string} [props.minW] - The minimum width of the Card component.
 * @param {string} [props.minH] - The minimum height of the Card component.
 * @param {string} [props.maxH] - The maximum height of the Card component.
 * @param {string} [props.fontWeight] - The font weight of the Card component.
 * @param {string} [props.className] - A class name to be applied to the Card component.
 * @param {Object} [props.style] - An object containing styles to be applied to the Card component.
 * @param {boolean} [props.hide] - A boolean indicating whether to hide the content of the Card component.
 * @returns {JSX.Element} A Card component.
 */
export default function _Card(props: _Card) {
    const style = {
        ...props.style,
        background: props.background,
        minWidth: props.minW,
        minHeight: props.minH,
        maxHeight: props.maxH,
        fontWeight: props.fontWeight,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };
    return (
        <Card className={` bg-white rounded border-0 ${props.className}`} style={style}>
            <Card.Body className={props.hide ? 'py-0' : ''}>{props.children}</Card.Body>
        </Card>
    );
}
