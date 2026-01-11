import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UIState } from "@/lib/types";

const initialState: UIState = {
  searchQuery: "",
  contentTypeFilter: "all",
  isLoading: false,
  error: null,
  isSidebarOpen: false,
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
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSearchQuery, setContentTypeFilter, setLoading, setError, toggleSidebar, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
