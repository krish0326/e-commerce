import { createSlice } from "@reduxjs/toolkit";

const categoryslice = createSlice({
    name: "category",
    initialState: {
        category: "All", // Default category
    },
    reducers: { // Make sure this is lowercase 'reducers', not 'Reducers'
        setCategory: (state, action) => {
            state.category = action.payload; // Update category with the payload
        },
    },
});

export const { setCategory } = categoryslice.actions;
export default categoryslice.reducer; // Don't forget to export the reducer!
