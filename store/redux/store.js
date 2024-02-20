import { configureStore } from "@reduxjs/toolkit";
// import favoriteSlice from "./favoriteSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    // favoriteMeals : favoriteSlice
    favoriteMeals: favoriteReducer,
  },
});
