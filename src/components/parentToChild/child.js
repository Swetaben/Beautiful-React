import React from "react";

const child = props => {
  return(
  <div>
    <button onClick={props.doWhatever}>{props.childtitle} </button>
  </div>
  );
};

export default child;
