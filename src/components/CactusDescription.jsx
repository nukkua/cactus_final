import React from "react";
import "./CactusDescription.css";
import AddItems from "./AddItems";
import Review from "./Review";

const CactusDescription = () => {
  return (
    <div className="cactusdescription-container">
      <div className="cactus-describe">
        <h2>Standard Cactus</h2>
        <span>Succulent</span>
      </div>
      <h2>$20.0</h2>
    </div>
  );
};

export default CactusDescription;
