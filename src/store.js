import { configureStore } from "@reduxjs/toolkit";
import rawDataSlice from "store/rawDataSlice";
import settingSlice from "store/settingSlice";
import messageSlice from "store/messageSlice";
export const store = configureStore({
    reducer: {
        setting: settingSlice,
        raw: rawDataSlice,
        message: messageSlice,
    },
});
