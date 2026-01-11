import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { NormalizedContent } from "@/lib/types";

interface ContentState {
  feedOrder: string[];
  allContent: Record<string, NormalizedContent>;
}

const initialState: ContentState = {
  feedOrder: [],
  allContent: {},
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<NormalizedContent[]>) => {
      const content = action.payload;
      content.forEach((item) => {
        state.allContent[item.id] = item;
      });
      state.feedOrder = content.map((item) => item.id);
    },
    reorderFeed: (state, action: PayloadAction<string[]>) => {
      state.feedOrder = action.payload;
    },
    loadFeedOrder: (state, action: PayloadAction<string[]>) => {
      state.feedOrder = action.payload;
    },
  },
});

export const { setContent, reorderFeed, loadFeedOrder } = contentSlice.actions;
export default contentSlice.reducer;
