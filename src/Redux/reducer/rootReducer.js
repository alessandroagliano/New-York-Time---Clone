import sectionArticleDisplay from "./sectionArticleDisplay";
import searchArticleReducer from "./searchArticleReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  section: sectionArticleDisplay,
  search: searchArticleReducer,
});

export default rootReducer;
