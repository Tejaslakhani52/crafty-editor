import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./reducer/dataReducer";
import apiDataReducer from "./reducer/apiDataReducer";
import elementReducer from "./reducer/elementReducer";
import projectReducer from "./reducer/projectReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  apiData: apiDataReducer,
  elements: elementReducer,
  project: projectReducer,
});

export default rootReducer;
