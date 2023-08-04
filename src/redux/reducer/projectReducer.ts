import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  loading: boolean;
  activeTab: string;
  openFolder: string;
  openFolderCategory: string;
}

const initialState: DataState = {
  loading: true,
  activeTab: "All",
  openFolder: "",
  openFolderCategory: "All",
};

const dataSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    activeTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
    openFolder: (state, action: PayloadAction<string>) => {
      state.openFolder = action.payload;
    },
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    openFolderCategory: (state, action: PayloadAction<string>) => {
      state.openFolderCategory = action.payload;
    },
  },
});

export const { loading, activeTab, openFolder, openFolderCategory } =
  dataSlice.actions;
export default dataSlice.reducer;
