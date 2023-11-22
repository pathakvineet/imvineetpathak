import React from "react";
import "../assets/css/skills.css";

export function SkillDetail(props) {
  return (
    <div className="skill-detail-holder">
      <p>{props.name || "none"}</p>
      <div style={{ border: "1px solid #ccc" }}>
        <div
          className="skill-detail-bar"
          style={{
            height: "24px",
            color: "white",
            width: props.percentage + "%",
            textAlign: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="skills-container">
      <h3>Skills</h3>
      <SkillDetail name="React.js" percentage={86} />
      <SkillDetail name="Node.js" percentage={78} />
      <SkillDetail name="MondoDB" percentage={72} />
      <SkillDetail name="CSS" percentage={80} />
      <SkillDetail name="Debugging and Troubleshooting" percentage={68} />
      <SkillDetail name="Collaboration / Team Player" percentage={96} />
      <SkillDetail name="Continuous Learning" percentage={75} />
      <SkillDetail name="Creativity" percentage={90} />
    </div>
  );
}
