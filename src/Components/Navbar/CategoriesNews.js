import React, { useState, useEffect } from "react";

const CategoriesNews = () => {
  const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        /*         arrayArticle.map((article) => console.log(article.title));
         */ /*         console.log(data.results);
         */
        setArticles(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [apiKey]);

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Arts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Fashion
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Finance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Sport
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Books
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active " href="#">
              Shopping
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoriesNews;
