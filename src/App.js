import "./App.css";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/reducer/rootReducer";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

//Store principale
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
