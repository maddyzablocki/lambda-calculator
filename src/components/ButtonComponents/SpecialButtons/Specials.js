import React from "react";
import "../../../App.css";
import SpecialButton from "./SpecialButton.js";
import { specials } from "../../../data.js";

const Specials = () => {


  return (
    <div>
       {specials.map(special => <SpecialButton text={special} />)}
    </div>
  );
};

export default Specials;
