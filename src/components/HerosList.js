//Presentational Components:
//Purpose: How things look (markup, styles) +
//Aware of Redux: No +
//To read data: Read data from props +
//To change data: Invoke callbacks from props +
//Are written: By hand +
import React from "react";
import Hero from "./Hero";

const HerosList = ({ heros }) => (
  <ul>
    {heros.map((hero, index) => {
      return (
        <Hero
          key={index}
          id={hero.id_hero}
          heroName={hero.name}
          movie={hero.movie}
          selected={hero.selected}
          visible={hero.visible}
        />
      );
    })}
  </ul>
);

export default HerosList;
