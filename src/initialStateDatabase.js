const initialStateDatabase = {
  movie: [
    {
      id_movie: 0,
      title: "no movie"
    },
    {
      id_movie: 1,
      title: "StarWars"
    },
    {
      id_movie: 2,
      title: "Star Trek"
    }
  ],
  heros: [
    {
      id_hero: 0,
      movie: "StarWars",
      name: "R2D2"
    },
    {
      id_hero: 1,
      movie: "StarWars",
      name: "3PO"
    },
    {
      id_hero: 2,
      movie: "Star Trek",
      name: "Spock"
    }
  ],
  visibilityFilter: "SHOW_ALL"
};

export default initialStateDatabase;
