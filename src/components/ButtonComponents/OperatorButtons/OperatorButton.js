import React from "react";
import "../../../App.css";

const OperatorButton = (props) => {
  console.log(props);
  return (
    <button onClick={() => props.addOperator(props.operator.value)}>
    <div className="operator-parent">{props.operator.char}</div>
    </button>
  );
};

export default OperatorButton;
