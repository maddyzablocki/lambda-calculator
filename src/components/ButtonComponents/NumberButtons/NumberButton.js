import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
  console.log("NumberButton", props);
  return (
      <button className="number-button" onClick={() => props.addNumber(props.text)}>
    <div className="number-parent">{props.text}</div>
    </button>
  );
};

export default NumberButton;
