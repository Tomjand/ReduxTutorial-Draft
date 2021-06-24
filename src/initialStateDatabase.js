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
      movie: "Star Wars",
      name: "R2D2",
      selected: true,
      visible: true
    },
    {
      id_hero: 1,
      movie: "Star Wars",
      name: "3PO",
      selected: true,
      visible: false
    },
    {
      id_hero: 2,
      movie: "Star Trek",
      name: "Spock",
      selected: false,
      visible: true
    }
  ]
};

export default initialStateDatabase;
