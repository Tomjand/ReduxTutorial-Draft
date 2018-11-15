//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand
import React from "react";
import AddHero from "../containers/AddHero";
import VisibleHerosList from "../containers/VisibleHerosList";
import ShowAllHerosContainer from "../containers/ShowAllHerosContainer";
import DeleteAllHerosContainer from "../containers/DeleteAllHerosContainer";

const App = () => {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 15 ver. 2</h1>
      <h2>zagadnienia :</h2>
      <ol>
        <li>
          poprawka dla komponentu deleteAll Heros - rozbicie na komp
          prezentacyjny i kontener - powinno być we wczesniejszych lekcjach{" "}
        </li>
        <li>zamiana konstrukcji if na switch case </li>
        <li>
          ukrywanie/filtrowanie elementów w zależności od zmiennej visible
        </li>
        <li>przycisk: pokaż wszystko</li>
      </ol>
      <h2>zadanie :</h2>
      <AddHero />
      <VisibleHerosList />
      <DeleteAllHerosContainer />
      <ShowAllHerosContainer />
    </div>
  );
};

export default App;
