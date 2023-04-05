import React, { useEffect, useState } from 'react';
interface Loading {
    isWhite?: Boolean;
    size?: number;
}
export default function Loading({ isWhite = false, size = 96 }: Loading) {
    const [dot, setDot] = useState<string>('   ');
    const _css = {
        width: size + 'px',
        height: size + 'px'
    };

    const loadingCSS = {
        position: 'relative',
        top: '-60%',
        fontSize: size / 10 + 'px',
        whiteSpace: 'pre-wrap'
    } as React.CSSProperties;

    useEffect(() => {
        const i = setInterval(() => {
            setDot(pre => {
                if (pre == '...') return '   ';
                return '.' + pre.slice(0, 2);
            });
        }, 500);
        return () => clearInterval(i);
    }, []);

    return (
        <div className="m-0 p-0 d-flex justify-content-center p-5">
            <div className="p-5 justify-content-center align-items-center" style={_css}>
                <div className={`spinner-border m-auto w-100 h-100 ${isWhite ? 'text-white' : ''}`} role="status">
                    <span className="sr-only"></span>
                </div>
                <div className={`text-center ${isWhite ? 'text-white' : ''}`} style={loadingCSS}>
                    Loading{dot}
                </div>
            </div>
        </div>
    );
}