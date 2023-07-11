import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/reducer/rootReducer";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

const store = createStore(rootReducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <hr></hr>
        <Section />;
      </Provider>
    </div>
  );
}

export default App;

// Sostituisci con l'ID della ricetta desiderata

/*

  const numberRecipes = 5;
  let recipeId;


fetch(
    `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const recipe = data;
      // Puoi ora utilizzare l'oggetto "recipe" per accedere alle informazioni della ricetta desiderata.
      console.log(recipe);
    })
    .catch((error) => {
      console.error("Errore nella richiesta API:", error);
    }); */
