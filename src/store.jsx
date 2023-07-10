import { createStore } from "redux";
import all_reducers from "./reducers/main";

export let store = createStore(all_reducers)