//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand
import React from "react";
import AddHero from "../containers/AddHero";
import VisibleHerosList from "../containers/VisibleHerosList";
import DeleteAllHerosContainer from "../containers/DeleteAllHerosContainer";
import FilterShowContainer from "../containers/FilterShowContainer";
import MyTasksCourse from "./myTasksCourse";

const App = () => {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 18 (synchroniczna)</h1>
      <h2>zagadnienia :</h2>
      <MyTasksCourse />
      <h2>aplikacja:</h2>
      <AddHero />
      <VisibleHerosList />
      <DeleteAllHerosContainer />
      <hr />
      <FilterShowContainer filter={"SHOW_ALL"} />
      <FilterShowContainer filter={"SHOW_SELECTED"} />
      <FilterShowContainer filter={"SHOW_NO-SELECTED"} />
    </div>
  );
};

export default App;
