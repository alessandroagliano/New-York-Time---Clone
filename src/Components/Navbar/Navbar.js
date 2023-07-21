//Importo i vari Hooks di React e react-redux
import React, { useState } from "react";
import { /* useSelector,  */ useDispatch } from "react-redux";

// Importo i vari Componenti
import CategoriesNews from "./CategoriesNews";
/* import SearchArticle from "./SearchArticle";
 */ import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="container-fluid d-block navbar  navbar-light bg-light">
      <div className=" container-lg w-100   justify-content-center">
        <div className="w-100">
          <div className="d-flex">
            <InputSearchArticle />
          </div>
          <Header />
        </div>
      </div>
      <div className=" container-lg collapse navbar-collapse  " id="navbarNav">
        <CategoriesNews />
      </div>
    </nav>
  );
};

export default Navbar;

/* ----------------------------------------------------------------------------  */

const InputSearchArticle = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const display = true;

  /* tramite ' handleInputChange ' cambio lo stato di 'InputText' che servirà
   nel dispatch per ricercare la news tramite la parola chiave' */
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  /* Tramite  handleButtonClick' faccio due dispatch per :
  -definire il valore dell'input della barra
  -impostare il valore del display di 'searchArticle' in true
  */
  const handleButtonClick = () => {
    dispatch({ type: "searchArticle", payload: inputText });
    dispatch({ type: "getArticleSearch", payload: display });
  };

  //Stile Css del campo input per la ricerca delle News
  const inputStyle = {
    padding: "12px",
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Esegui qui la tua logica o chiama la tua funzione
      handleButtonClick();
    }
  };

  return (
    <div>
      <div className="input-group" style={inputStyle}>
        <input
          type="text"
          className="form-control"
          placeholder="Cerca..."
          aria-label="Cerca"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={handleButtonClick}
          className="btn btn-primary"
          type="button"
        >
          Cerca
        </button>
      </div>
    </div>
  );
};

/* ---------------------- HEADER  ------------------------ */

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
            {
              // Data di oggi
              weekday + " " + formattedDate
            }
          </li>
        </div>
        <li className="nav-item">
          <a className="nav-link active" href="/img">
            {/* Logo del New York Times */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/The_New_York_Times_Logo.svg"
              alt="logo"
              width="100%"
            ></img>
          </a>
        </li>
        <div className="dropdown">
          {/* Dropdown di Account */}
          <button
            className=" dropdown-toggle border-0 outline-0 bg-light "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Account
          </button>
          <ul className="dropdown-menu bg-light">
            <li>
              <a className="dropdown-item" href="#profilo">
                Profilo
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#impostazioni">
                Impostazioni
              </a>
            </li>
            <li>
              <a className="dropdown-item " href="#logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};
