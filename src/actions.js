//actions:
export const updateMovieTitle = text => {
  return {
    type: "updateMovieTitle",
    text: text
  };
};

export const insertHero = text => {
  return {
    type: "insertHero",
    name: text
  };
};

export const deleteAllHeros = () => {
  return {
    type: "deleteAllHeros"
  };
};

export const deleteHero = text => {
  console.log("tu:", text);
  return {
    type: "deleteHero",
    name: text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};
