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
};

const searchArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "searchArticle":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchArticleReducer;
