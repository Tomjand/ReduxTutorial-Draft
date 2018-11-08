import { combineReducers } from "redux";
//import { updateMovieTitle } from "./actions";

const heros = (stateHeros = {}, action) => {
  //sprawdzic co tu ma stateHeros
  if (action.type === "SHOW_ALL") {
    return stateHeros;
  }
  if (action.type === "insertHero") {
    return [
      ...stateHeros,
      {
        id_hero: stateHeros.length + 1,
        movie: " no title",
        name: action.name
      }
    ];
  }
  if (action.type === "deleteAllHeros") {
    return {};
  }
  if (action.type === "deleteHero") {
    return stateHeros.filter(e => e.name !== action.name);
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
