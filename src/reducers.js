import { combineReducers } from "redux";
//import { updateMovieTitle } from "./actions";

const heros = (stateHeros = {}, action) => {
  //sprawdzic co tu ma stateHeros
  //console.log(action.id);
  if (action.type === "toggleHeros") {
    return stateHeros.map(hero =>
      hero.id_hero === action.id ? { ...hero, selected: !hero.selected } : hero
    );
  }
  if (action.type === "insertHero") {
    return [
      ...stateHeros,
      {
        id_hero: stateHeros.length + 1,
        movie: " no title",
        name: action.name,
        visible: true
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
