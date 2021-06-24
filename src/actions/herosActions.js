export const insertHero = text => {
  return {
    type: "INSERT_HERO",
    name: text
  };
};

export const deleteAllHerosAction = () => {
  return {
    type: "DELETE_ALL_HEROS"
  };
};

export const deleteHero = text => {
  return {
    type: "DELETE_HERO",
    name: text
  };
};

export const toggleSelectedHeroAction = id => {
  return {
    type: "TOGGLE_SELECTED_HERO",
    id: id
  };
};

export const toggleFilteredHeroAction = id => {
  return {
    type: "TOGGLE_FILTERED_HERO",
    id: id
  };
};

export const filterAction = filter => {
  return {
    type: filter
  };
};
