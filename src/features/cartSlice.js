import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!cartItem) {
        state.cartItems.push(action.payload);
      } else {
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
