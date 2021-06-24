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

// const changeDatabase = (stateDatabase = {}, action) => {
//   if (action.type === "updateMovieTitle") {
//     return {
//       ...stateDatabase,
//       text: updateMovieTitle(stateDatabase.text, action)
//     };
//   }
//   if (action.type === "insertHero") {
//     return {
//       ...stateDatabase,
//       heros: insertHero(stateDatabase.heros, action)
//     };
//   }
//   return stateDatabase;
// };

// const changeDatabase = (stateDatabase = {}, action) => {
//   return {
//     movie: movie(stateDatabase.movie, action),
//     heros: heros(stateDatabase.heros, action)
//   };
// };

/*generuje blad: Unexpected keys "text", "heros" */
// const changeDatabase = combineReducers({
//   updateMovieTitle,
//   insertHero
// });

/*NIEgeneruje bladu: Unexpected keys "text", "heros" */
const changeDatabase = combineReducers({
  movie,
  heros
});

const mystore = createStore(changeDatabase, initialStateDatabase);

//console.log("mystore : ", mystore);

mystore.subscribe(() => {
  console.log("myDatabase :", mystore.getState());
});
mystore.dispatch({ type: "", text: "" }); //show (like SELECT) InitialState
mystore.dispatch({ type: "updateMovieTitle", text: "StarWars" });
mystore.dispatch({ type: "updateMovieTitle", text: "BladeRunner" });
mystore.dispatch({ type: "insertHero", name: "Luke" });
mystore.dispatch({ type: "insertHero", name: "Ray" });
mystore.dispatch({ type: "insertHero", name: "HanSolo" });

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 07 ver. 2</h1>
      <h3>kosmetyka changeDatabase: combineReducers</h3>
      <h4>
        Rozwiazanie problemu: "Unexpected keys "text", "heros" found in
        preloadedState argument passed to createStore"
      </h4>
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
