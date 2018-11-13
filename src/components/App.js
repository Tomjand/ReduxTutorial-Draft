//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand
import React from "react";
import AddHero from "../containers/AddHero";
import VisibleHerosList from "../containers/VisibleHerosList";
import DeleteAllHeros from "../containers/DeleteAllHeros";

const App = () => {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 14 ver. 2</h1>
      <h2>zagadnienia :</h2>
      <ul>
        <li>wprowadzenie styled-components</li>
        <li>dynamiczne stylestyled-components</li>
        <li>kolorowanie items zaleznie od zmiennej selected</li>
      </ul>
      <h2>zadanie :</h2>
      <AddHero />
      <VisibleHerosList />
      <DeleteAllHeros />
    </div>
  );
};

export default App;
