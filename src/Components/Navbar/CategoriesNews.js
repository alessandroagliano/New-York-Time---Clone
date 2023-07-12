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
  hideDisplaySearch,
} from "../../Redux/actions/homeDisplay";
const CategoriesNews = () => {
  // const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
  // const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();
  /*   const displayNone = "none";
   */

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <ul className="navbar-nav ">
          <li
            className="nav-item"
            onClick={() => {
              dispatch(homeCategories);
              dispatch(hideDisplaySearch);
            }}
          >
            <a className="nav-link active " href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active "
              href="#"
              onClick={() => {
                dispatch(artsCategories);
                dispatch(hideDisplaySearch);
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
                dispatch(hideDisplaySearch);
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
                dispatch(hideDisplaySearch);
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
                dispatch(hideDisplaySearch);
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
                dispatch(hideDisplaySearch);
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
                dispatch(hideDisplaySearch);
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
