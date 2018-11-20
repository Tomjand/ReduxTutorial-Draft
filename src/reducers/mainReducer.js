import { combineReducers } from "redux";
import heros from "./herosReducers";
import movies from "./moviesReducers";
//import { updateMovieTitle } from "./actions";

const changeDatabase = combineReducers({
  movies,
  heros
});

export default changeDatabase;
