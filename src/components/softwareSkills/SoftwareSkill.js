import React from "react";
import { skillsSection } from "../../portfolio";
import "./SoftwareSkill.scss";

export default function SoftwareSkill() {
  return (
    <div className="software-skills">
      {skillsSection.softwareSkills.map((skill, index) => (
        <div key={index} className="skill-icon" title={skill.skillName}>
          <img
            src={skill.imageSrc}
            alt={skill.skillName}
            className="skill-icon-image"
          />
          <p className="skill-name">{skill.skillName}</p>
        </div>
      ))}
    </div>
  );
}

