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
        return { ...hero, visible: true };
      });
    case "showSelected":
      return stateHeros.map(hero =>
        hero.selected === true
          ? { ...hero, visible: true }
          : { ...hero, visible: false }
      );
    case "showNo-Selected":
      return stateHeros.map(hero =>
        hero.selected === false
          ? { ...hero, visible: true }
          : { ...hero, visible: false }
      );
    case "insertHero":
      return [
        ...stateHeros,
        {
          id_hero: stateHeros.length + 1,
          movie: " no title",
          name: action.name,
          selected: false,
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
