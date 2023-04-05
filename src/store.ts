import { configureStore } from '@reduxjs/toolkit';
import rawDataSlice from 'src/store/rawDataSlice';
import settingSlice from 'src/store/settingSlice';
import symbolSlice from 'src/store/symbolSlice'

import messageSlice from 'src/store/messageSlice';
export const store = configureStore({
    reducer: {
        setting: settingSlice,
        raw: rawDataSlice,
        message: messageSlice,
        symbol:symbolSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
