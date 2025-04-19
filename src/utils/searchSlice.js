import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState : {},
    reducers: {
        cacheSearchResults: (state, actions) => {
            return state =  {...state,...actions.payload}
            // state = Object.assign(state, actions.payload)
        },
    }
})
export const {cacheSearchResults} = searchSlice.actions;
export default searchSlice.reducer;

