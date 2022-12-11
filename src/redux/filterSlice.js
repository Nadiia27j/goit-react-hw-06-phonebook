import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});



export const getFilter = state => state.filter;
export const { setFilter } = filterSlice.actions;


export const filterReducer = filterSlice.reducer;
  









