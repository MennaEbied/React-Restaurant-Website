import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: Record<number, number>; 
  totalCount: number;
}

const initialState: CartState = {
  items: {},
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItem: (state, action: PayloadAction<number>) => { 
      const itemId = action.payload;
      state.items[itemId] = (state.items[itemId] || 0) + 1;
      state.totalCount += 1;
    },
    decrementItem: (state, action: PayloadAction<number>) => { 
      const itemId = action.payload;
      if (state.items[itemId] && state.items[itemId] > 0) {
        state.items[itemId] -= 1;
        state.totalCount -= 1;
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalCount = 0;
    },
  },
});

export const { incrementItem, decrementItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;