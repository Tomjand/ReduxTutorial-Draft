import React from "react";

const BtnFilter = ({ onButtonClick, filter, active }) => {
  return (
    <button onClick={onButtonClick} disabled={active}>
      {filter}
    </button>
  );
};

export default BtnFilter;
