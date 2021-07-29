import React from "react";
import Skills from '../../components/layout/skills'
import { skillsBar} from '../../profile'

import "./skills.styles.css";

const SkillComp = () => {
  return (
    <div className="pt-3 pb-3 bg" id="skills">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <div id="Skills"> 
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) => 
                        <Skills faClass={x.faClass} label={x.name}/>
                    )}
                </div> 
      </div>
          
    </div>
  );
};

export default SkillComp;
