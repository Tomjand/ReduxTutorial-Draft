import React from "react";
import ReactDOM from "react-dom";
import changeDatabase from "./reducers";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./styles.css";

const initialStateDatabase = {
  movie: "no movie",
  heros: ["R2D2"]
};

const mystore = createStore(
  changeDatabase,
  initialStateDatabase,
  composeWithDevTools()
);

mystore.subscribe(() => {
  console.log("myDatabase :", mystore.getState());
});

const updateMovieTitle = text => {
  return {
    type: "updateMovieTitle",
    text: text
  };
};

const insertHero = text => {
  return {
    type: "insertHero",
    name: text
  };
};

const deleteAllHeros = () => {
  return {
    type: "deleteAllHeros"
  };
};

mystore.dispatch({ type: "", text: "" }); //show (like SELECT) InitialState
mystore.dispatch(updateMovieTitle("StarWars")); // like UPDATE in SQL
mystore.dispatch(updateMovieTitle("BladeRunner"));
//mystore.dispatch(insertHero("Luke")); // like INSERT in SQL
mystore.dispatch(insertHero("Ray"));
mystore.dispatch(insertHero("Han Solo"));
//mystore.dispatch(deleteAllHeros());

const AddHero = () => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          mystore.dispatch(insertHero(input.value));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Hero</button>
      </form>
    </div>
  );
};

const DeleteAllHeros = () => {
  const del = () => {
    mystore.dispatch(deleteAllHeros());
  };
  return <button onClick={del}>delete All Heros</button>;
};

const Hero = ({ text }) => <li>{text}</li>;

const HerosList = ({ heros }) => (
  <ul>
    {heros.map(hero => {
      return <Hero key={hero} text={hero} />;
    })}
  </ul>
);

const mapStateToProps = state => {
  return {
    heros: state.heros
  };
};

const VisibleHerosList = connect(mapStateToProps)(HerosList);

function App() {
  return (
    <div className="App">
      <h1>moj kurs Redux lekcja 10 ver. 2</h1>
      <h3>stworzenie App.js</h3>
      <h3>dodanie: usuwanie Herosów</h3>
      <h3>stworzenie plkiu reducers.js</h3>

      <AddHero />
      <VisibleHerosList />
      <DeleteAllHeros />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
