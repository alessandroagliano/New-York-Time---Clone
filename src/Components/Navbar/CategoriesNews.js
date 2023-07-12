/* eslint-disable jsx-a11y/anchor-is-valid */
import React /* , { useState, useEffect } */ from "react";
import { useDispatch } from "react-redux";
import {
  artsCategories,
  homeCategories,
  fashionCategories,
  businessCategories,
  booksCategories,
  sportsCategories,
  scienceCategories,
} from "../../Redux/actions/homeDisplay";

const CategoriesNews = () => {
  // const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
  // const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  /* 
  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
    
        setArticles(data.results);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  }, [apiKey]); */

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(homeCategories);
              }}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(artsCategories);
              }}
            >
              Arts
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(fashionCategories);
              }}
            >
              Fashion
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(businessCategories);
              }}
            >
              Business
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(sportsCategories);
              }}
            >
              Sport
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(booksCategories);
              }}
            >
              Books
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(scienceCategories);
              }}
            >
              Science
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CategoriesNews;
