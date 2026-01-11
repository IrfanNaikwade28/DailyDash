import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UIState } from "@/lib/types";

const initialState: UIState = {
  searchQuery: "",
  contentTypeFilter: "all",
  isLoading: false,
  error: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setContentTypeFilter: (state, action: PayloadAction<"all" | "news" | "movie" | "social">) => {
      state.contentTypeFilter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchQuery, setContentTypeFilter, setLoading, setError } = uiSlice.actions;
export default uiSlice.reducer;
