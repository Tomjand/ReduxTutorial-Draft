//Presentational Components:
//Purpose: How things look (markup, styles)
//Aware of Redux: No
//To read data: Read data from props
//To change data: Invoke callbacks from props
//Are written: By hand

import React from "react";
import { connect } from "react-redux";
import {
  deleteHero,
  toggleSelectedHeroAction,
  toggleFilteredHeroAction
} from "../actions";
import styled from "styled-components";

import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ id, heroName, movie, selected, visible, dispatch }) => {
  const delHero = e => {
    dispatch(deleteHero(e.currentTarget.parentNode.firstChild.textContent));
  };

  const toggleSelectedHero = e => {
    dispatch(toggleSelectedHeroAction(id));
  };
  const toggleFilteredHero = e => {
    dispatch(toggleFilteredHeroAction(id));
  };

  const Li = styled.li`
    color: ${props => (props.selected === true ? "orange" : "white")}; 
    opacity: ${props => (props.visible === true ? "1" : "0.2")};
    display: ${props => (props.visible === true ? "block" : "none")};
    };
  `;

  return (
    <Li selected={selected} visible={visible}>
      {heroName}
      <span onClick={delHero}> delete</span>
      <FontAwesomeIcon icon={faStroopwafel} onClick={delHero} />
      <span> {movie}</span>
      <span onClick={toggleSelectedHero}>
        {selected ? " Selected" : " no-Selected"}
      </span>
      <span onClick={toggleFilteredHero}>
        {" "}
        visible: {visible ? " Ture" : " False"}
      </span>
    </Li>
  );
};

export default connect()(Hero);
