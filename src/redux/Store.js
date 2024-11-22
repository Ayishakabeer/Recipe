import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slice/recipeSlice'

export const store = configureStore({
    reducer: {
        recipesReducer: recipeSlice
    },
});