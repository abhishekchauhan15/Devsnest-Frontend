import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //increase
    incremented(state) {
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    //decrease

    //reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
