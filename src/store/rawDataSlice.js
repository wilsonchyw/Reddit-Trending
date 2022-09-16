import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trendChart: [],
    trends: [],
    forums: [],
    lastestVote: [],
    lastestComment: [],
    symbolHeat: [],
};

export const rawDataSlice = createSlice({
    name:"raw",
    initialState,
    reducers: {
        setChartData: (state, action) => {
            state.trendChart = action.payload;
        },
        setTrendsData: (state, action) => {
            state.trends = action.payload;
        },
        setForumData: (state, action) => {
            state.forums = action.payload;
        },
        setLastestVote: (state, action) => {
            state.lastestVote = action.payload;
        },
        setLastestComment: (state, action) => {
            state.lastestComment = action.payload;
        },
        setHeat: (state, action) => {
            state.symbolHeat = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setChartData, setTrendsData, setForumData, setLastestVote, setLastestComment, setHeat } = rawDataSlice.actions;

export default rawDataSlice.reducer;
