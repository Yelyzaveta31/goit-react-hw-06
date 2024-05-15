import { createStore } from "redux";
import { contactsReducer } from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
const enhancer = devToolsEnhancer();

export const store = createStore(contactsReducer, enhancer);
