import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  disabledProducts: [], // Track disabled products here
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.disabledProducts.push(action.payload.id); // Disable the product after adding
      }
    },

    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.disabledProducts = state.disabledProducts.filter(
        (id) => id !== action.payload
      ); // Enable the product after removing
    },

    clearCart(state) {
      state.cartItems = [];
      state.disabledProducts = []; // Re-enable all products when clearing the cart
    },

    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },

    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
