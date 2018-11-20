const movie = (stateMovie = "", action) => {
  if (action.type === "UPDATE_MOVIE_TITLE") {
    return action.text;
  }
  return stateMovie;
};
