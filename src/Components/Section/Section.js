import "./Section.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ArticleHome from "./ArticleHome";
import RealTimeNews from "./RealTimeNews/RealTimeNews";
import SearchArticle from "../Navbar/SearchArticle";

const apiKey = process.env.REACT_APP_API_KEY; // Variabile di ambiente, chiave personale Api

function Section() {
  const [articles, setArticles] = useState([]);
  const [realTimeNews, setRealTimeNews] = useState([]);
  const categories = useSelector((state) => state.section);

  /* HOME PRINCIPALE  */

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${categories}.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [categories]);

  /* REAL TIME NEWS */

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/news/v3/content/nyt/${categories}.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRealTimeNews(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [categories]);

  const DisplaySearchArticle = useSelector(
    (state) => state.search.DisplaySearchArticle
  );
  const DisplaySection = useSelector((state) => state.search.DisplaySection);

  /* const myStyle = {
    display: valoreDisplay,
  }; */

  return (
    <div>
      <div className="container-lg d-flex d-md-block mt-2">
        <div className="row px-2" id="containerPrincipale">
          {/* Se 'displaySearchArticle è true si crea il componente 'SearchArticle */}
          {DisplaySearchArticle && <SearchArticle />}
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
                    {/* Se 'DisplaySection è true si crea il componente 'ArticleHome */}

                    {DisplaySection && (
                      <ArticleHome
                        title={article.title}
                        abstract={article.abstract}
                        img={foto}
                        url={article.url}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-3" id="realTimeNews">
            {realTimeNews.map((news) => {
              let multimedia;
              if (news.multimedia[2]) {
                multimedia = news.multimedia[2].url;
              }

              return (
                <div>
                  {/* Se 'DisplaySection è true si crea il componente 'RealTimeNews */}
                  {DisplaySection && (
                    <RealTimeNews
                      title={news.title}
                      abstract={news.abstract}
                      img={multimedia}
                      url={news.url}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
