
interface textProps {
    color?: string;
    fontSize?: string;
    children?: any;
    fontWeight?: number;
    handleClick?: Function;
}

export default function Text({ color, fontSize = '14px', children, fontWeight = 700, handleClick }: textProps) {
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight
    };
    return (
        <span style={style} onClick={()=>handleClick()}>
            {children}
        </span>
    );
}
