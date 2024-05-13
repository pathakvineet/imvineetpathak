import React from "react";
import "../assets/css/skills.css";
const skillsList = [
  {
    name: "Technical Expertise",
    description: "Proficient in React.js, Node.js, MongoDB, CSS, and troubleshooting.",
  },
  {
    name: "Creative Problem-Solving",
    description: "Combining technical expertise with creativity to tackle challenges innovatively.",
  },
  {
    name: "Collaborative Spirit",
    description:
      " Enjoy working in teams and leveraging collective strengths to achieve shared goals.",
  },
  {
    name: "Passionate Learner",
    description:
      "Constantly exploring new technologies and approaches to stay ahead in the ever-evolving tech landscape.",
  },
  {
    name: "Outside the Box Thinker",
    description: "Bringing fresh perspectives and unconventional ideas to projects",
  },
];

export function SkillDetail({ name, description }) {
  return (
    <div className="skill-detail-holder">
      <h4>{name || "none"}</h4>
      <p>{description || ""}</p>
    </div>
  );
}

export default function SkillSpectrum() {
  return (
    <div className="skills-container">
      <h3 style={{ marginBottom: "30px" }}>Skill Spectrum</h3>
      {skillsList.map((item) => {
        return <SkillDetail name={item.name} description={item.description} />;
      })}
    </div>
  );
}
