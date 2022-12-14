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
