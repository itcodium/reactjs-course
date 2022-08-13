import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    add(state, action) {
      state.data = addTocart(state, action);
    },
    removeItem(state, action) {
      state.data = state.data.filter(item => {
        return item.id !== action.payload.id
      })
    },
    clearCart(state) {
      state.data = [];
    },

  }
})

export const isInCart = (cart, id) => {
  return cart.find(item => item.id === id);
}
export const getTotal = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.units;
  });
  return total;
}
export const countCartUnits = (cart) => {
  let total = 0;
  cart.forEach(item => {
    total += item.units;
  });
  return total;
}

export const { add, removeItem, clearCart } = cart.actions
export default cart.reducer


const addTocart = (state, action) => {
  const ix = state.data.findIndex(item => {
    return action.payload.id === item.id;
  });
  let data = [];
  if (ix === -1) {
    data = [...state.data, action.payload]
  } else {
    data = [
      ...state.data.slice(0, ix),
      action.payload,
      ...state.data.slice(ix + 1, state.data.length)
    ]
    
  }
  return data;
}