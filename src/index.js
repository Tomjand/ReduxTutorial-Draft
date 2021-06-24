import React from "react";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  insertHero,
  updateMovieTitle,
  deleteAllHeros,
  deleteHero
} from "./actions";
import ReactDOM from "react-dom";

import changeDatabase from "./reducers";
import { Provider, connect } from "react-redux";
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

//dispatch/run actions
mystore.dispatch({ type: "", text: "" }); //show (like SELECT) InitialState

//Presentational Components
const AddHero = () => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          mystore.dispatch(insertHero(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Hero</button>
      </form>
    </div>
  );
};

const DeleteAllHeros = () => {
  const del = () => {
    mystore.dispatch(deleteAllHeros());
  };
  return <button onClick={del}>delete All Heros</button>;
};

const Hero = ({ text }) => {
  const delHero = e => {
    mystore.dispatch(
      deleteHero(e.currentTarget.parentNode.firstChild.textContent)
    );
  };
  return (
    <li>
      {text}
      <span onClick={delHero}> delete </span>
      <FontAwesomeIcon icon={faStroopwafel} onClick={delHero} />
    </li>
  );
};

const HerosList = ({ heros }) => (
  <ul>
    {heros.map((hero, index) => {
      return <Hero key={index} text={hero} />;
    })}
  </ul>
);

const mapStateToProps = state => {
  return {
    heros: state.heros
  };
};
//Container Components
const VisibleHerosList = connect(mapStateToProps)(HerosList);

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 11 ver. 2</h1>
      <h3>dodanie: usuwanie pojedynczego Herosa</h3>
      <h3>stworzenie plkiu actions.js</h3>

      <AddHero />
      <VisibleHerosList />
      <DeleteAllHeros />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
