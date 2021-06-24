import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./styles.css";

const initialStateDatabase = {
  movie: "no movie",
  heros: ["R2D2"]
};
//reducers
const heros = (stateHeros = [], action) => {
  if (action.type === "insertHero") {
    return [...stateHeros, action.name];
  }
  return stateHeros;
};

const movie = (stateMovie = "", action) => {
  if (action.type === "updateMovieTitle") {
    return action.text;
  }
  return stateMovie;
};

const changeDatabase = combineReducers({
  movie,
  heros
});

//createStore
const mystore = createStore(
  changeDatabase,
  initialStateDatabase,
  composeWithDevTools()
);

mystore.subscribe(() => {
  console.log("myDatabase :", mystore.getState());
});
//actions:
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
//dispatch/run actions
mystore.dispatch({ type: "", text: "" }); //show (like SELECT) InitialState
mystore.dispatch(updateMovieTitle("StarWars")); // like UPDATE in SQL
mystore.dispatch(updateMovieTitle("BladeRunner"));
//mystore.dispatch(insertHero("Luke")); // like INSERT in SQL
mystore.dispatch(insertHero("Ray"));
mystore.dispatch(insertHero("Han Solo"));
// Components
const AddHero = ({ dispatch }) => {
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

const Hero = ({ text }) => <li>{text}</li>;

const HerosList = ({ heros }) => (
  <ul>
    {heros.map((hero, idx) => {
      return <Hero key={idx} text={hero} />;
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
      <h1>moj kurs Redux lekcja 09 ver. 2</h1>
      <h3>wypisanie listy herosów na ekranie</h3>
      <h3>dla listy li dodany key = idx</h3>

      <AddHero />
      <VisibleHerosList />
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
