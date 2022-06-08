import { legacy_createStore } from "redux";
import { reducer } from "../component/reducer";

export const store = legacy_createStore(reducer);
