import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  templates: any[];
  loading: boolean;
}

const initialState: DataState = {
  templates: [],
  loading: true,
};

const dataSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {
    templates: (state, action: PayloadAction<any>) => {
      state.templates = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { templates, loading } = dataSlice.actions;
export default dataSlice.reducer;
