import React from 'react';

interface textProps {
    color?: string;
    fontSize?: string;
    children?: React.Element;
    fontWeight?: number;
    onClick?: Function;
}

export default function Text({ color, fontSize = '14px', children, fontWeight = 700, onClick }: textProps): React.Element {
    const style = {
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight
    };
    return (
        <span style={style} onClick={onClick}>
            {children}
        </span>
    );
}
