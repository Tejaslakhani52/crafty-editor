import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  pannelbar: boolean;
  databar: boolean;
  report: boolean;
  gridView: boolean;
  bottombar: boolean;
  content: string;
  textAnimation: string;
  pageAnimation: string;
  photoAnimation: string;
  elementAnimation: string;
  effects: string;
  effectsShape: string;
  activeAnimationP: string;
  activeShapeAnimationP: string;
  dialogRender: boolean;
}

const initialState: DataState = {
  pannelbar: false,
  report: false,
  databar: false,
  gridView: false,
  bottombar: false,
  content: "",
  textAnimation: "",
  pageAnimation: "",
  photoAnimation: "",
  elementAnimation: "",
  effects: "None",
  effectsShape: "None",
  activeAnimationP: "",
  activeShapeAnimationP: "",
  dialogRender: false,
};

const dataSlice = createSlice({
  name: "pannelbar",
  initialState,
  reducers: {
    pannelbar: (state, action: PayloadAction<boolean>) => {
      state.pannelbar = action.payload;
    },
    databar: (state, action: PayloadAction<boolean>) => {
      state.databar = action.payload;
    },
    content: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
    gridView: (state, action: PayloadAction<boolean>) => {
      state.gridView = action.payload;
    },
    bottombar: (state, action: PayloadAction<boolean>) => {
      state.bottombar = action.payload;
    },
    textAnimation: (state, action: PayloadAction<any>) => {
      state.textAnimation = action.payload;
    },
    pageAnimation: (state, action: PayloadAction<string>) => {
      state.pageAnimation = action.payload;
    },
    photoAnimation: (state, action: PayloadAction<any>) => {
      state.photoAnimation = action.payload;
    },
    elementAnimation: (state, action: PayloadAction<any>) => {
      state.elementAnimation = action.payload;
    },
    report: (state, action: PayloadAction<boolean>) => {
      state.report = action.payload;
    },
    effects: (state, action: PayloadAction<string>) => {
      state.effects = action.payload;
    },
    effectsShape: (state, action: PayloadAction<string>) => {
      state.effectsShape = action.payload;
    },
    activeAnimationP: (state, action: PayloadAction<string>) => {
      state.activeAnimationP = action.payload;
    },
    activeShapeAnimationP: (state, action: PayloadAction<string>) => {
      state.activeShapeAnimationP = action.payload;
    },
    dialogRender: (state, action: PayloadAction<boolean>) => {
      state.dialogRender = action.payload;
    },
  },
});

export const {
  pannelbar,
  databar,
  content,
  gridView,
  bottombar,
  textAnimation,
  pageAnimation,
  photoAnimation,
  elementAnimation,
  report,
  effects,
  effectsShape,
  activeAnimationP,
  activeShapeAnimationP,
  dialogRender,
} = dataSlice.actions;
export default dataSlice.reducer;
