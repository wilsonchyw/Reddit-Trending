import React from 'react';

interface GreyDivideLineProps {
    width?: number;
}

export default function Divider({ width=100 }: GreyDivideLineProps): React.FC<GreyDivideLineProps> {
    const style: React.CSSProperties = {
        width: `${width}%`,
        height: '1px',
        backgroundColor: '#ccc',
        margin: '10px 0'
    };

    return <div style={style} />;
}
