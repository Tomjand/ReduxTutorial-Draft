import React from "react";
import { deleteAllHeros } from "../actions";
import { connect } from "react-redux";

const DeleteAllHeros = ({ dispatch }) => {
  const del = () => {
    dispatch(deleteAllHeros());
  };
  return <button onClick={del}>delete All Heros</button>;
};

export default connect()(DeleteAllHeros);
