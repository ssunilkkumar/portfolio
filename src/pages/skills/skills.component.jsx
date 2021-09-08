import React from "react";
import HTML5 from "../../assets/img/tech/html.png";
import CSS3 from "../../assets/img/tech/css-3.png";
import REACT from "../../assets/img/tech/react.png";
import REDUX from "../../assets/img/tech/redux.png";
import MATERIALUI from "../../assets/img/tech/material-ui.png";
import MONGODB from "../../assets/img/tech/mongodb.png";
import JAVASCRIPT from "../../assets/img/tech/javascript.png";

import "./skills.styles.css";
const arr = [HTML5, CSS3, JAVASCRIPT, REACT, REDUX, MATERIALUI, MONGODB]

const SkillComp = () => {
  return (
    <div className="pt-3 pb-3 bg" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <div id="Skills"> 
                <div className="tech">
                    {arr.map((x) => 
                        <div>
                            <img src={x} alt="img" />
                        </div>
                    )}
                </div> 
      </div>
          
    </div>
  );
};

export default SkillComp;
