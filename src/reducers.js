import { combineReducers } from "redux";
//import { updateMovieTitle } from "./actions";

const heros = (stateHeros = {}, action) => {
  //sprawdzic co tu ma stateHeros
  switch (action.type) {
    case "toggleSelectedHero":
      return stateHeros.map(hero =>
        hero.id_hero === action.id
          ? { ...hero, selected: !hero.selected }
          : hero
      );
    case "toggleFilteredHero":
      return stateHeros.map(hero =>
        hero.id_hero === action.id ? { ...hero, visible: !hero.visible } : hero
      );
    case "showAllHeros":
      return stateHeros.map(hero => {
        return { ...hero };
      });
    case "showVisibleTrue":
      return stateHeros.filter(hero => {
        return !hero.visible;
      });
    case "insertHero":
      return [
        ...stateHeros,
        {
          id_hero: stateHeros.length + 1,
          movie: " no title",
          name: action.name,
          visible: true
        }
      ];
    case "deleteAllHeros":
      return [];
    case "deleteHero":
      return stateHeros.filter(e => e.name !== action.name);
    default:
      return stateHeros;
  }
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
