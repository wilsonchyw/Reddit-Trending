import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messageQueue: [],
    message: '',
    type: 'normal',
    duration: null
};

export const messageSlice = createSlice({
    name: 'dialog',
    initialState,
    reducers: {
        deQueue: state => {
            state.messageQueue = state.messageQueue.slice(1);
        },
        setMessage: (state, action) => {
            state.messageQueue = [...state.messageQueue, action.payload];
        },
        setMessageQueue: (state, action) => {
            state.messageQueue = action.payload;
        }
    }
});

export const { setMessage, setMessageQueue, deQueue } = messageSlice.actions;
export default messageSlice.reducer;

export function setMsg(content, type = 'normal', duration = 2000) {
    return async (dispatch, getState) => {
        dispatch(setMessage({ content, type }));
        setTimeout(() => dispatch(deQueue()), duration);
    };
}
