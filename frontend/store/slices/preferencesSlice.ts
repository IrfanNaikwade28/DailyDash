import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserPreferences } from "@/lib/types";

const initialState: UserPreferences = {
  newsCategories: ["technology", "business", "entertainment"],
  socialCategories: ["trending", "following"],
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setNewsCategories: (state, action: PayloadAction<string[]>) => {
      state.newsCategories = action.payload;
    },
    setSocialCategories: (state, action: PayloadAction<string[]>) => {
      state.socialCategories = action.payload;
    },
    loadPreferences: (state, action: PayloadAction<UserPreferences>) => {
      return action.payload;
    },
  },
});

export const { setNewsCategories, setSocialCategories, loadPreferences } =
  preferencesSlice.actions;
export default preferencesSlice.reducer;
