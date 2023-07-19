/* Definisco il reducer per gli articoli ricercati 
tramite la barra di ricerca */

/* Per lo stato iniziale definisco il display di section in 'true
e il display di SeartArticle in false.
L'il valore dell'input della barra di ricerca in una stringa vuota */
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
