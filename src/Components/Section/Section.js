import "./Section.css";
import React, { useState, useEffect } from "react";
/* import axios from "axios";*/
import ArticleHome from "./ArticleHome";
import RealTimeNews from "../RealTimeNews/RealTimeNews";
function Section() {
  const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
  const [articles, setArticles] = useState([]);
  const [realTimeNews, setRealTimeNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        /*         arrayArticle.map((article) => console.log(article.title));
         */ /*         console.log(data.results);S
         */
        setArticles(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [apiKey]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRealTimeNews(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [apiKey]);

  return (
    <div>
      <div className="container-lg d-flex d-md-block mt-2">
        <div className="row px-2" id="containerPrincipale">
          <div className="col-12 col-lg-9" id=" articleHome">
            {articles.map((article) => {
              let foto;
              if (article.multimedia) {
                foto = article.multimedia[0].url;
              } else {
                foto = null;
              }

              return (
                <div className="col " key={article.id}>
                  <div className="d-flex flex-column h-100">
                    <ArticleHome
                      title={article.title}
                      abstract={article.abstract}
                      img={foto}
                      url={article.url}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-3" id="realTimeNews">
            <p className="text-center"> LIVE </p>

            {realTimeNews.map((news) => {
              let multimedia;
              if (news.multimedia[2]) {
                multimedia = news.multimedia[2].url;
              }

              return (
                <RealTimeNews
                  title={news.title}
                  abstract={news.abstract}
                  img={multimedia}
                  url={news.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;