import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import "./styles.css";

const initialState = "no movie";

const ChangeText = (state = "", action) => {
  if (action.type === "changeText") {
    return (state = "StarWars");
  }
  return state;
};

const mystore = createStore(ChangeText, initialState);
console.log("myAllData : ", mystore.getState());
console.log("mystore : ", mystore);

mystore.subscribe(() => {
  console.log("myAllData : ", mystore.getState());
});

mystore.dispatch({ type: "changeText" });

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 03 ver. 2</h1>
      <h3>zmiana stanu w postaci tekstowej</h3>
      <ul>
        <li>Prezentacja obiektu stanu myAllData ( state )</li>
        <li>obrazek stanu</li>
        myAllData &#123; text: 'Starwars', number: 9, array: [Ray, Luke, Leila],
        &#125;
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
