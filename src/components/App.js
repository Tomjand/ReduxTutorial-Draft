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
import ShowSelectedContainer from "../containers/ShowSelectedContainer";
import ShowNoSelectedContainer from "../containers/ShowNoSelectedContainer";
import MyTasksCourse from "./myTasksCourse";

const App = () => {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 16</h1>
      <h2>zagadnienia :</h2>
      <MyTasksCourse />
      <h2>aplikacja:</h2>
      <AddHero />
      <VisibleHerosList />
      <DeleteAllHerosContainer />
      <ShowAllHerosContainer />
      <ShowSelectedContainer />
      <ShowNoSelectedContainer />
    </div>
  );
};

export default App;
