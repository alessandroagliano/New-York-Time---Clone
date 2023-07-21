import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// import ArticleHome from "../Section/ArticleHome";
import SearchHomeNews from "../Section/SearchHomeNews";

/* Questo componente verrà utilizzato in 'Section.js'
  Struttura:
  1.Quando cambia lo stato di : inputValue il programma fa una chiamata
  fetch all'Api del NYT con il valore della parola chiave cercata ( inputValue).

  2.Come risposta restituisce un Array di elementi ( searchNews)
  
  3.A questo array si applica un map() metodo in cui viene renderizzato
  il componente 'SearchHomeNews'
 
  */
const apiKey = process.env.REACT_APP_API_KEY; // Variabile di ambiente, chiave personale Api

const SearchArticle = () => {
  const inputValue = useSelector((state) => state.search.inputValue); // Valore input della ricerca

  const [searchNews, setSearchNews] = useState([]); // Array delle notizie ricevute
  const initialInputValue = ""; // Valore iniziale input

  useEffect(
    () => {
      // La ricerca viene effettuata quando il valore dell'input è diverso da una stringa vuota
      if (inputValue !== initialInputValue) {
        fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${inputValue}&api-key=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.response.docs.length === 0) {
              // Controlla la lunghezza dell'array docs
              setSearchNews([]);
              console.log("è vuoto");
            } else {
              setSearchNews(data.response.docs);
            }
          })
          .catch((error) => {
            console.error("Errore nella richiesta API:", error);
          });
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue, initialInputValue]
  );

  /* Ho messo un if/else( ternary operator) nel caso
  -la ricerca non da risultati : renderizza l'h2 dicendo che non ha trovato risultati

  -Se la ricerca produce risultati : fa un .map() del risultati e ci crea un
  'SearchHomeNews' componente per ogni elemento dell'array 'searchNews' */

  return (
    <div>
      <div className="col">
        {searchNews.length === 0 ? (
          <div className="col text-center py-5">
            <h2> 0 risultati trovati per {inputValue}</h2>
            <div className="d-flex flex-column h-100"></div>
          </div>
        ) : (
          // Qui il ternary operator
          searchNews.map((article) => {
            //Per ricevere l'url corretto bisogna aggiungere il prefisso 'urlBaseFoto'
            const endPointUrlFoto = article.multimedia[0]?.url;
            const urlBaseFoto = "https://static01.nyt.com/";
            const urlCompleto = urlBaseFoto + endPointUrlFoto;

            return (
              <div className="col" key={article._id}>
                <div className="d-flex flex-column h-100">
                  <SearchHomeNews
                    title={article.headline.main}
                    abstract={article.abstract}
                    img={endPointUrlFoto ? urlCompleto : null}
                    // Se 'enPoinUrlFoto' esiste renderizzare la foto, altrimenti 'urlCompleto = null
                    url={article.web_url}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchArticle;
