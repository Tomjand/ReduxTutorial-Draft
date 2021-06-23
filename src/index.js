import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import "./styles.css";

const FunkcjaJakoJakoBazaDanych = (state = 1) => {
  return state;
};

const mystore = createStore(FunkcjaJakoJakoBazaDanych);

console.log("mystore : ", mystore);
console.log("STAN: ", mystore.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
