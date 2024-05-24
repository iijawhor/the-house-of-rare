import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const addedToTheCart = () => toast("Product Added to Cart!");
const removeFromCart = () => toast("Product removed from the cart!");
const errorMessage = () => toast("Product is already in your cart");
const initialState = {
  cartItems: [],
  amount: 0,
  total: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id &&
          item.purchaseSize === action.payload.purchaseSize
      );
      if (!cartItem) {
        state.cartItems.push(action.payload);
        toast.success("Product added to the cart!");
      } else if (cartItem) {
        errorMessage();
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      toast.error("Product removed fron the cart!");
    },
    updateCartAmounts: (state, action) => {},
    calculateTotal: (state, action) => {}
  }
});

export const { addToCart, removeItem, updateCartAmounts, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
