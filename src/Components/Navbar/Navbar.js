import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CategoriesNews from "./CategoriesNews";
import SearchArticle from "./SearchArticle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container-fluid d-block navbar  navbar-light bg-light">
      <div className=" container-lg w-100   justify-content-center">
        <div className="w-100">
          <div className="d-flex">
            {
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={SearchArticle}
              >
                <span className="navbar-toggler-icon" />
              </button>
            }
            <InputSearchArticle />
            {/*             <SearchArticle />
             */}{" "}
          </div>
          {/* ----------------------------------------------------------------------------- */}
          <Header />
        </div>
      </div>
      {/* ------------------------------------------------------- */}
      <div className=" container-lg collapse navbar-collapse  " id="navbarNav">
        <CategoriesNews />
      </div>
    </nav>
  );
};

export default Navbar;

/* ----------------------------------------------------------------------------  */

const InputSearchArticle = () => {
  /*   const apiKey = "0HfJ47DGfZOZ5uTIt6k1K6b7PL3hMty9"; // Sostituisci con la tua chiave API
   */
  const inputValue = useSelector((state) => state.search.inputValue);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    dispatch({ type: "searchArticle", payload: inputText });
  };
  /*   const [searchNews, setSearchNews] = useState([]);
   */
  /*  const searchGet = () => {
    return <SearchArticle />;
  }; */
  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Cerca..."
          aria-label="Cerca"
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          onClick={handleButtonClick}
          className="btn btn-primary"
          type="button"
        >
          Cerca
        </button>
      </div>
      <p> Valore dell'input : {inputValue}</p>
    </div>
  );
};

/* -------- Funzione per  InputSearchArticle --------------- */

const Header = () => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date();

  // Ottenere il giorno della settimana
  const weekday = today.toLocaleDateString("it-IT", { weekday: "long" });

  // Ottenere la data nel formato desiderato
  const formattedDate = today.toLocaleDateString("it-IT", options);
  return (
    <div className="container-fluid  ">
      <ul className="d-flex w-100" id="header">
        <div>
          <li className="nav-item text-nowrap" id="Date">
            {weekday + " " + formattedDate}
          </li>
        </div>
        <li className="nav-item">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/02/The_New_York_Times_Logo.svg"
            alt="logo"
            width="100%"
          ></img>
          <a className="nav-link active" href="#"></a>
        </li>
        <li className="nav-item" id="Account">
          <a className="nav-link active" href="#">
            Pricing
          </a>
        </li>
      </ul>
    </div>
  );
};
