/* Definisco il rootReducer principale  */

import sectionArticleReducer from "./sectionArticleDisplay";
import searchArticleReducer from "./searchArticleReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  section: sectionArticleReducer,
  search: searchArticleReducer,
});

export default rootReducer;
