const heros = (stateHeros = {}, action) => {
  switch (action.type) {
    case "TOGGLE_SELECTED_HERO":
      return stateHeros.map(hero =>
        hero.id_hero === action.id
          ? { ...hero, selected: !hero.selected }
          : hero
      );
    case "TOGGLE_FILTERED_HERO":
      return stateHeros.map(hero =>
        hero.id_hero === action.id ? { ...hero, visible: !hero.visible } : hero
      );
    case "SHOW_ALL":
      return stateHeros.map(hero => {
        return { ...hero, visible: true };
      });
    case "SHOW_SELECTED": //like SELECT in SQL ;)
      return stateHeros.map(hero =>
        hero.selected === true
          ? { ...hero, visible: true }
          : { ...hero, visible: false }
      );
    case "SHOW_NO-SELECTED":
      return stateHeros.map(hero =>
        hero.selected === false
          ? { ...hero, visible: true }
          : { ...hero, visible: false }
      );
    case "INSERT_HERO":
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
    case "DELETE_ALL_HEROS":
      return [];
    case "DELETE_HERO":
      return stateHeros.filter(e => e.name !== action.name);
    default:
      return stateHeros;
  }
};
export default heros;
