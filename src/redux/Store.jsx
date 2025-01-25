import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices.jsx/Cartslice"; // Path to your cartSlice file
import categoryslice from "./Slices.jsx/categoryslice";
import Searchslice from "./Slices.jsx/Searchslice";
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add the cartReducer to the store
    category : categoryslice ,
    search : Searchslice,
  },
});

export default store;
