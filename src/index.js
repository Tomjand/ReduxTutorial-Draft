import React from "react";

import App from "./components/App";
import ReactDOM from "react-dom";

import changeDatabase from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import "./styles.css";

const initialStateDatabase = {
  movie: "no movie",
  heros: ["R2D2"]
};

const mystore = createStore(
  changeDatabase,
  initialStateDatabase,
  composeWithDevTools()
);

mystore.subscribe(() => {
  console.log("myDatabase :", mystore.getState());
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  //Co dokładnie robi PROVIDER i co w tym kontekscie robi connect w komponentach ???
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
