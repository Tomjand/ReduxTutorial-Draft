import { combineReducers } from "redux";
import heros from "./herosReducers";
import movies from "./moviesReducers";
//import { updateMovieTitle } from "./actions";

const changeDatabase = combineReducers({
  heros
});

export default changeDatabase;
