import React, { useState, useEffect } from "react";
import ArticleHome from "../Section/ArticleHome";
import SearchHomeNews from "../Section/SearchHomeNews";

const SearchArticle = () => {
  const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
  const [search, setSearch] = useState("");
  const [searchNews, setSearchNews] = useState([]);

  const searchGet = () => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchNews(data.response.docs);
        console.log(data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Cerca..."
        aria-label="Cerca"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchGet} className="btn btn-primary" type="button">
        Cerca
      </button>
      <div>
        {searchNews.map((article) => {
          let foto = article;
          console.log(article.headline.main);
          return (
            <div className="col " key={article.id}>
              <div className="d-flex flex-column h-100">
                <SearchHomeNews
                  title={article.headline.main}
                  abstract={article.abstract}
                  /*   img={foto} */
                  url={article.url}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchArticle;

/* 
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
       
        console.log(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [apiKey]); */
