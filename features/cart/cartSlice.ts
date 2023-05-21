import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

export interface CartState {
  products: TCartItem[];
}

const initialState: CartState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const itemInCart = state.products.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        if (item?.quantity === 1) {
          item.quantity = 1;
        } else {
          item.quantity--;
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.products.filter((item) => item.id !== action.payload);
      state.products = removeItem;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.products;

export default cartSlice.reducer;