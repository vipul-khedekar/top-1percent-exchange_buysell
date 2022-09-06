import { createStore } from "redux";

import { addItemReducer } from "./reducers/addItemReducer";

export const store = createStore(addItemReducer);
