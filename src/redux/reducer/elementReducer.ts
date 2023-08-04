import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  loading: boolean;
  seeAllName: string;
}

const initialState: DataState = {
  loading: true,
  seeAllName: "",
};

const dataSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    seeAllName: (state, action: PayloadAction<string>) => {
      state.seeAllName = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { loading, seeAllName } = dataSlice.actions;
export default dataSlice.reducer;
