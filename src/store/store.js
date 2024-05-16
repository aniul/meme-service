import { createStore } from "redux";
import { memeReducer } from "./reducers/globalReducer";

const store = createStore(memeReducer);
export default store;
