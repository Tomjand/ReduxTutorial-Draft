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

export const toggleSelectedHeroAction = id => {
  return {
    type: "toggleSelectedHero",
    id: id
  };
};

export const toggleFilteredHeroAction = id => {
  return {
    type: "toggleFilteredHero",
    id: id
  };
};

export const deleteAllHerosAction = () => {
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

export const showAllHerosAction = () => {
  return {
    type: "showAllHeros"
  };
};

export const showVisibleTrueAction = () => {
  return {
    type: "showVisibleTrue"
  };
};
export const setVisibilityFilter = filter => {
  return {
    // type: "SET_VISIBILITY_FILTER",
    // filter
  };
};
