import React from "react";
import "../../../App.css";

const SpecialButton = (props) => {
  console.log("special", props);
  return (
    <button>
      <div className="special-parent">{props.text}</div>
    </button>
  );
};

export default SpecialButton;
