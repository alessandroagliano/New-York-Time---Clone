/* Queste sono tutte le actions che utilizzo nel reducer: 'sectionArticleReducer.
Servono per cambiare la categoria degli articoli visualizzati nella Section. */

export const homeCategories = {
  type: "home",
};
export const artsCategories = {
  type: "arts",
};

export const fashionCategories = {
  type: "fashion",
};

export const businessCategories = {
  type: "business",
};

export const sportsCategories = {
  type: "sports",
};

export const booksCategories = {
  type: "books",
};

export const scienceCategories = {
  type: "science",
};

export const hideDisplaySearch = {
  type: "hideDisplaySearch",
  payload: false,
};
