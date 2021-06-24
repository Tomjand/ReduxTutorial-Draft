import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import "./styles.css";

const initialStateDatabase = {
  movie: "no movie",
  heros: ["R2D2"]
};

const heros = (stateHeros = [], action) => {
  if (action.type === "insertHero") {
    return [...stateHeros, action.name];
  }
  return stateHeros;
};

const movie = (stateMovie = "", action) => {
  if (action.type === "updateMovieTitle") {
    return action.text;
  }
  return stateMovie;
};

const changeDatabase = combineReducers({
  movie,
  heros
});

const mystore = createStore(changeDatabase, initialStateDatabase);

mystore.subscribe(() => {
  console.log("myDatabase :", mystore.getState());
});

const updateMovieTitle = text => {
  return {
    type: "updateMovieTitle",
    text: text
  };
};

const insertHero = text => {
  return {
    type: "insertHero",
    name: text
  };
};

mystore.dispatch({ type: "", text: "" }); //show (like SELECT) InitialState
mystore.dispatch(updateMovieTitle("StarWars")); // like UPDATE in SQL
mystore.dispatch(updateMovieTitle("BladeRunner"));
//mystore.dispatch(insertHero("Luke")); // like INSERT in SQL
mystore.dispatch(insertHero("Ray"));
mystore.dispatch(insertHero("Han Solo"));

function App() {
  let input;
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 08 ver. 2</h1>
      <h3>kosmetyka w Akcjach</h3>
      <h4>dodanie funkcji insertHero i updateMovie</h4>
      <form
        onSubmit={e => {
          e.preventDefault();
          mystore.dispatch(insertHero(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add</button>
      </form>

      <button onClick={() => mystore.dispatch(insertHero("Luke"))}>
        Add Luke
      </button>

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
