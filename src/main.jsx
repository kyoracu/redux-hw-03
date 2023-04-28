import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "./store/store.js";

const store = configureStore({
  reducer: {
    game: gameSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);