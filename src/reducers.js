import { combineReducers } from "redux";
//import { updateMovieTitle } from "./actions";

const heros = (stateHeros = [], action) => {
  if (action.type === "insertHero") {
    return [...stateHeros, action.name];
  }
  if (action.type === "deleteAllHeros") {
    return [];
  }
  if (action.type === "deleteHero") {
    console.log("action: ", action.name);
    return stateHeros.filter(e => e !== action.name);
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

export default changeDatabase;
