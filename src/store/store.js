import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: Math.ceil(Math.random() * 100),
  status: "in progress",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    guessNumber: (state, action) => {
      if (action.payload === state.number) {
        state.status = "win";
      } else if (action.payload < state.number) {
        state.status = "lower";
      } else if (action.payload > state.number) {
        state.status = "higher";
      }
    },
    resetGame: (state) => {
      state.number = Math.ceil(Math.random() * 100);
      state.status = "in progress";
    },
  },
});

export const { guessNumber, resetGame } = gameSlice.actions;
export default gameSlice.reducer;