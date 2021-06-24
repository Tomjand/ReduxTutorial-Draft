import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import "./styles.css";

const initialStateDatabase = {
  text: "no movie",
  heros: ["R2D2"]
};

const insertHero = (stateOnlyHeros = [], action) => {
  if (action.type === "insertHero") {
    return [...stateOnlyHeros, action.name];
  }
  return stateOnlyHeros;
};

const updateMovieTitle = (stateOnlyMovieTitle = "", action) => {
  if (action.type === "updateMovieTitle") {
    return action.text;
  }
  return stateOnlyMovieTitle;
};

const changeDatabase = (stateDatabase = {}, action) => {
  if (action.type === "updateMovieTitle") {
    return {
      ...stateDatabase,
      text: updateMovieTitle(stateDatabase.text, action)
    };
  }
  if (action.type === "insertHero") {
    return {
      ...stateDatabase,
      heros: insertHero(stateDatabase.heros, action)
    };
  }
  return stateDatabase;
};

const mystore = createStore(changeDatabase, initialStateDatabase);

//console.log("mystore : ", mystore);

mystore.subscribe(() => {
  console.log("myDatabase : ", mystore.getState());
});
mystore.dispatch({ type: "", text: "" });
mystore.dispatch({ type: "updateMovieTitle", text: "StarWars" });
mystore.dispatch({ type: "updateMovieTitle", text: "BladeRunner" });
mystore.dispatch({ type: "insertHero", name: "Luke" });
mystore.dispatch({ type: "insertHero", name: "Ray" });
mystore.dispatch({ type: "insertHero", name: "HanSolo" });

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 06 ver. 2</h1>
      <h3>
        wprowadzamy funkcje reducer dla textu czyli nazwy filmu naszego stanu
      </h3>
      <ul>
        <li>obrazek bazy danych - czyli stanu</li>
        <li>reducer composition</li>
        <li>
          store - baza danych z narzedziami czyli metodami: subscribe,
          dispatch..itd
        </li>
        myDatabase &#123; text: 'Starwars', number: 9, heros: [Ray, Luke,
        Leila], &#125;
        <li>obrazek stanu</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
