const sectionArticleReducer = (state = "home", action) => {
  switch (action.type) {
    case "arts":
      return "arts";
    case "home":
      return "home";
    case "fashion":
      return "fashion";

    case "business":
      return "business";

    case "sports":
      return "sports";

    case "books":
      return "books";
    case "science":
      return "science";

    default:
      return state;
  }
};

export default sectionArticleReducer;
