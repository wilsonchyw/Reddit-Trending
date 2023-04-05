interface textProps {
    color?: string;
    fontSize?: string;
    children?: any;
    fontWeight?: number;
    handleClick?: Function;
    className?:string
}

export default function Text({ color,className="", fontSize = '0.9rem', children, fontWeight = 700, handleClick=()=>{} }: textProps) {
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight
    };
    return (
        <span className={className} style={style} onClick={() => handleClick()}>
            {children}
        </span>
    );
}
