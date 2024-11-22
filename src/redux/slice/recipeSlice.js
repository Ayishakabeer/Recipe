import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch recipes
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await axios.get("https://dummyjson.com/recipes");
  return response.data.recipes;
});

// Slice definition
const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    allRecipes: [],
    dummyAllRecipes: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchRecipe: (state,actionByHeader)=>{
        state.allRecipes = state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.allRecipes = action.payload;
        state.dummyAllRecipes = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchRecipes.pending, (state) => {
        state.allRecipes = [];
        state.dummyAllRecipes = [];
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.allRecipes = [];
        state.dummyAllRecipes = [];
        state.loading = false;
        state.error = action.error.message || "API Fetch Failed";
      });
  },
});

export const {searchRecipe} = recipeSlice.actions
export default recipeSlice.reducer;
