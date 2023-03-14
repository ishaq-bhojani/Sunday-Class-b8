import { createSlice } from "@reduxjs/toolkit";

const verifyId = (cartItem, id) => cartItem.id === id;

const initialState = [];

export const cartSubTotal = () => (_, getState) => {
  const { cart } = getState();

  return cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const addedCartItem = state.find((item) => verifyId(item, id));
      if (addedCartItem) {
        addedCartItem.quantity = addedCartItem.quantity + 1;
      } else {
        action.payload.quantity = 1;
        state.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.find((item, index) => {
        if (verifyId(item, id)) {
          return index;
        }
        return undefined;
      });
      state.splice(itemIndex, 1);
    },
    setItemQuantity: (state, action) => {
      const { id, mode } = action.payload;
      const addedCartItem = state.find((item) => verifyId(item, id));
      if (addedCartItem) {
        if (mode === "add") {
          addedCartItem.quantity = addedCartItem.quantity + 1;
        } else if (mode === "remove") {
          if (addedCartItem.quantity > 1) {
            addedCartItem.quantity = addedCartItem.quantity - 1;
          }
        }
      }
    },
    emptyCart: () => initialState,
  },
});
export const { addItem, deleteItem, setItemQuantity, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
