

import React from "react";
import App from "./components/App";
import ReactDOM from "react-dom";
import initialStateDatabase from "./initialStateDatabase";
import changeDatabase from "./reducers/mainReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import "./styles.css";

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
  //Co dokÅadnie robi PROVIDER i co w tym kontekscie robi connect w komponentach ???
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
