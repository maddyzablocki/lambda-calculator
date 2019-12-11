import React from "react";
import "../../../App.css";

import OperatorButton from "./OperatorButton.js";
import { operators } from "../../../data.js"
const Operators = (props) => {
  return (
      <div>
        {operators.map(operator => <OperatorButton operator={operator}
                                                 addOperator={props.addOperator} />)}
      </div>
  );
};

export default Operators;
