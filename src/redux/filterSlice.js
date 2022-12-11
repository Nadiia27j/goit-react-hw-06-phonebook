import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '0',
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
});



export const getFilter = state => state.contacts.filter;


export default filterSlice.reducer;
  









