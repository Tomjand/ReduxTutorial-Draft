import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import "./styles.css";

const initialStateDatabase = {
  text: "no movie",
  heros: []
};

const insertHero = (stateOnlyHeros = [], action) => {
  console.log("heros name: " + action);
  if (action.type === "insertHero") {
    return [...stateOnlyHeros, action.name];
  }
};

const changeDatabase = (stateDatabase = initialStateDatabase, action) => {
  if (action.type === "updateText") {
    return {
      ...stateDatabase,
      text: "StarWars"
    };
  }
  if (action.type === "insertHero") {
    console.log(action.name);
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

mystore.dispatch({ type: "updateText" });
mystore.dispatch({ type: "insertHero", name: "Luke" });
mystore.dispatch({ type: "insertHero", name: "Ray" });
mystore.dispatch({ type: "insertHero", name: "HanSolo" });

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 05 ver. 2</h1>
      <h3>wprowadzamy zmiane w tablicy heros naszego stanu</h3>
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
