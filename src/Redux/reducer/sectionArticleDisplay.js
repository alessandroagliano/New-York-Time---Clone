const sectionArticleReducer = (state = "home", action) => {
  switch (action.type) {
    case "arts":
      /*       console.log(state);
       */
      return "arts";
    case "home":
      /*       console.log(state);
       */
      return "home";
    case "fashion":
      /*       console.log(state);
       */
      return "fashion";

    case "business":
      /*       console.log(state);
       */
      return "business";

    case "sports":
      /*       console.log(state);
       */
      return "sports";

    case "books":
      /*       console.log(state);
       */
      return "books";
    case "science":
      /*       console.log(state);
       */
      return "science";

    default:
      return state;
  }
};

export default sectionArticleReducer;
