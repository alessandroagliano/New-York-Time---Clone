/* const searchArticle = (state = "", action) => {
  switch (action.type) {
    case "search":
      console.log(state);

      return "arts";
    case "home":
      console.log(state);

      return "home";

    default:
      return state;
  }
};
 */

const initialState = {
  inputValue: "",
  DisplaySearchArticle: false,
  DisplaySection: true,
};

const searchArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchArticle":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "getArticleSearch":
      return {
        ...state,
        DisplaySearchArticle: action.payload,
        DisplaySection: false,
      };
    case "hideDisplaySearch":
      return {
        ...state,
        DisplaySearchArticle: action.payload,
        DisplaySection: true,
      };
    default:
      return state;
  }
};

export default searchArticleReducer;
