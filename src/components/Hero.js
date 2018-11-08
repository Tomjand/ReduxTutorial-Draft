//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand

import React from "react";
import { connect } from "react-redux";
import { deleteHero } from "../actions";

import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ heroName, movie, dispatch }) => {
  const delHero = e => {
    dispatch(deleteHero(e.currentTarget.parentNode.firstChild.textContent));
  };
  return (
    <li>
      {heroName}
      <span onClick={delHero}> delete</span>
      <FontAwesomeIcon icon={faStroopwafel} onClick={delHero} />

      <span onClick={delHero}> {movie}</span>
    </li>
  );
};

export default connect()(Hero);
