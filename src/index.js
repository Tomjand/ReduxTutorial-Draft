import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./styles.css";

const initialState = "no movie";

const ChangeText = (state = "") => {
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
      <h1>moj kurs Redux lekcja 02 ver. 2</h1>
      <h3>co to jest stan? Co to jest obiekt stanu?</h3>
      <ul>
        <li>Prezentacja obiektu stanu myAllData ( state )</li>
        <li>obrazek stanu</li>
        myAllData &#123; text: 'Starwars', number: 9, array: [Ray, Luke, Leila],
        &#125;
        <li>obrazek stanu</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
