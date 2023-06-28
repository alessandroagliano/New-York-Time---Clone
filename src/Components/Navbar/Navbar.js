import React from "react";
import CategoriesNews from "./CategoriesNews";
import SearchArticle from "./SearchArticle";
import "./Navbar.css";

const Navbar = () => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const today = new Date();

  // Ottenere il giorno della settimana
  const weekday = today.toLocaleDateString("it-IT", { weekday: "long" });

  // Ottenere la data nel formato desiderato
  const formattedDate = today.toLocaleDateString("it-IT", options);

  return (
    <nav className="container-fluid d-block navbar  navbar-light bg-light">
      <div className=" container-lg w-100   justify-content-center">
        <div className="w-100">
          {/* -------------------------------------------- */}
          <div className="d-flex">
            {" "}
            {
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            }
            <SearchArticle />
          </div>
          {/* ----------------------------------------------------------------------------- */}
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
