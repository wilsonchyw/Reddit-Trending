import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

/**
 * Message component displays a list of messages in the top right corner of the screen.
 * @returns {React.ReactElement} - A div element containing the list of messages.
 */
export default function Message() {
    const { messageQueue } = useSelector((state: RootState) => state.message);
    const dialog = { zIndex: '2000', position: 'fixed', right: '1%', top: '1%' } as React.CSSProperties;
    const style = { animation: 'fadeIn linear 1s' };
    return messageQueue.length ? (
        <div style={dialog}>
            {messageQueue.map(msg => (
                <div key={msg.content} style={style} className={msg.type === 'error' ? 'alert alert-danger' : 'alert alert-primary'} role="alert">
                    <pre>{msg.content}</pre>
                </div>
            ))}
        </div>
    ) : (
        <></>
    );
}
