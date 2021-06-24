import { createStore, combineReducers } from "redux";
const heros = (stateHeros = [], action) => {
  if (action.type === "insertHero") {
    return [...stateHeros, action.name];
  }
  if (action.type === "deleteAllHeros") {
    return [];
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
