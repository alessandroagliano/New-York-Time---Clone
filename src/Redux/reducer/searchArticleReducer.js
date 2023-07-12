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
  valoreDisplay: "none",
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
        valoreDisplay: action.payload,
      };
    case "hideDisplaySearch":
      return {
        ...state,
        valoreDisplay: action.payload,
      };
    default:
      return state;
  }
};

export default searchArticleReducer;
