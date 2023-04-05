import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    targetSymbol: null
};

export const symbolSlice = createSlice({
    name: 'symbol',
    initialState,
    reducers: {
        setSymbol: (state, action) => {
            state.targetSymbol = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setSymbol } = symbolSlice.actions;

export default symbolSlice.reducer;
