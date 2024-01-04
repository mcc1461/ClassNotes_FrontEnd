import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

export const storage = createStore(counterReducer);

  

