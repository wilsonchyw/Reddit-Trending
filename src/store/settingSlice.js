import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fetchLimit: 2000,
    minVote: 50,
    minComment: 50,
    maxYAxis: 2000,
    dateRange: 1,
    cache: true,
    notice:true,
    search:"",
    useRestApi:true
};

const equalToInitialState = (state) => {
    for (const key in initialState) {
        if (initialState[key] != state[key]) return false;
    }
    return true;
};

export const settingSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setFetchLimit: (state, action) => {
            state.cache = false
            state.fetchLimit = parseInt(action.payload);
        },
        setMinVote: (state, action) => {
            state.cache = false
            state.minVote = parseInt(action.payload);
        },
        setMinComment: (state, action) => { 
            state.cache = false  
            state.minComment = parseInt(action.payload);
        },
        setMaxYAxis: (state, action) => {
            state.maxYAxis = parseInt(action.payload);
        },
        setDateRange: (state, action) => {
            state.cache = false
            state.dateRange = parseInt(action.payload);
        },
        setSearch:(state,action)=>{
            state.search=action.payload
        },
        toggleCache: (state) => {
            state.cache = !state.cache;
        },
        toggleNotice: (state) => {
            state.notice = !state.notice;
        },
        toggleUseRestApi:(state)=>{
            state.useRestApi = !state.useRestApi
        }

    },
});

// Action creators are generated for each case reducer function
export const { setFetchLimit, setMinVote, setMinComment, setMaxYAxis, setDateRange, toggleCache ,toggleNotice,setSearch,toggleUseRestApi} = settingSlice.actions;

export default settingSlice.reducer;
