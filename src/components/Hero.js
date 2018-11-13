//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand

import React from "react";
import { connect } from "react-redux";
import { deleteHero, toggleHeros } from "../actions";
import styled from "styled-components";

import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ id, heroName, movie, selected, visible, dispatch }) => {
  const delHero = e => {
    dispatch(deleteHero(e.currentTarget.parentNode.firstChild.textContent));
  };

  const toggHeros = e => {
    //console.log(e.target, id);
    dispatch(toggleHeros(id));
  };

  const Li = styled.li`
    color: ${props => (props.selected === true ? "orange" : "white")}; 
    };
  `;
  //if (visible) {
  return (
    <Li selected={selected}>
      {heroName}
      <span onClick={delHero}> delete</span>
      <FontAwesomeIcon icon={faStroopwafel} onClick={delHero} />
      <span> {movie}</span>
      <span onClick={toggHeros}>{selected ? " Selected" : " no-Selected"}</span>
    </Li>
  );
  //} else {
  //  return "";
  //}
};

export default connect()(Hero);
