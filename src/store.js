import { configureStore } from '@reduxjs/toolkit'
import rawDataSlice from 'store/rawDataSlice'
import settingSlice from 'store/settingSlice'
export const store = configureStore({
  reducer: {
      setting:settingSlice,
      raw:rawDataSlice
  },
})