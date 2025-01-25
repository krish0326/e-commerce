import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cart: [], // An array of items in the cart
};

const cartSlice = createSlice({
  name: "cart", // The name of the slice
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const existingitem = state.Cart.find((item) => item.id === action.payload.id);
      if (existingitem) {
        // If the item already exists, update its quantity
        state.Cart = state.Cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 } // Increment the quantity
            : item // Return the item unchanged
        );
      } else {
        state.Cart.push(action.payload); // Adds a new item to the Cart array
      }
    },
    removefromcart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);
    },
    incrementqty:(state,action) => {
      state.Cart = state.Cart.map((item) => item.id === action.payload.id ? {...item,qty:item.qty + 1} : item);
    },
    decrementqty:(state,action) =>{
      state.Cart = state.Cart.map((item) => item.id === action.payload.id ? {...item,qty:item.qty - 1} : item);
    }
  },

});

// Export both actions
export const { addtocart, removefromcart,incrementqty,decrementqty } = cartSlice.actions;

export default cartSlice.reducer; // Default export is the reducer
