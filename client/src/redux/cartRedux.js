import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    courses: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addCourse: (state, action) => {
      state.quantity += 1;
      state.courses.push(action.payload);
      state.total += action.payload.price;
    },
  },
});

export const { addCourse } = cartSlice.actions;
export default cartSlice.reducer;
