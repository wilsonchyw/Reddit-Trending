import Canvas from './Canvas';

import React, { ReactElement } from 'react';

export default function TagCloud(): ReactElement {
    return (
        <div
            className="d-flex align-items-center justify-content-center flex-column"
            id="panel"
            key="cloudTag"
            style={{ background: 'linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)', height: '45vh' }}
        >
            <div>
                <Canvas />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3 zoom" >
                <i className="fas fa-angle-double-down zoom-in-out " style={{ fontSize: '70px', color: 'white' }}></i>{' '}
            </div>
        </div>
    );
}

