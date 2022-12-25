import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface settingState {
    fetchLimit: number;
    minVote: number;
    minComment: number;
    maxYAxis: number;
    dateRange: number;
    cache: boolean;
    notice: boolean;
    search: string;
    useRestApi: boolean;
    visible: boolean;
}

const initialState: settingState = {
    //fetchLimit: 6000,
    minVote: 0,
    minComment: 0,
    maxYAxis: 2000,
    dateRange: 1,
    cache: true,
    notice: true,
    search: '',
    useRestApi: true,
    visible: false
};

export const settingSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setVisible: (state: settingState, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
        /* setFetchLimit: (state, action) => {
            state.cache = false;
            state.fetchLimit = parseInt(action.payload);
        }, */
        setMinVote: (state, action) => {
            state.cache = false;
            state.minVote = parseInt(action.payload);
        },
        setMinComment: (state, action) => {
            state.cache = false;
            state.minComment = parseInt(action.payload);
        },
        setMaxYAxis: (state, action) => {
            state.maxYAxis = parseInt(action.payload);
        },
        setDateRange: (state, action) => {
            state.cache = false;
            state.dateRange = parseInt(action.payload);
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        toggleCache: state => {
            state.cache = !state.cache;
        },
        toggleNotice: state => {
            state.notice = !state.notice;
        },
        toggleUseRestApi: state => {
            state.useRestApi = !state.useRestApi;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    //setFetchLimit,
    setMinVote,
    setMinComment,
    setMaxYAxis,
    setDateRange,
    toggleCache,
    toggleNotice,
    setSearch,
    toggleUseRestApi,
    setVisible
} = settingSlice.actions;

export default settingSlice.reducer;
