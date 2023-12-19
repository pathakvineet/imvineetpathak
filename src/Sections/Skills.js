import React from "react";
import "../assets/css/skills.css";
const skillsList = [
  { name: "React.js", percentage: 86, color: "#FE6F5E" },
  { name: "Nodejs", percentage: 78, color: "#FFBF00" },
  { name: "MongoDB", percentage: 72, color: "#EFDECD" },
  { name: "CSS", percentage: 80, color: "#03C03C" },
  { name: "Debugging and Troubleshooting", percentage: 68, color: "#8A2BE2" },
  { name: "Collaboration / Team Player", percentage: 96, color: "#00B7EB" },
  { name: "Continuous Learning", percentage: 75, color: "#CD7F32" },
  { name: "Creativity", percentage: 90, color: "#A91101" },
];

export function SkillDetail({ name, percentage, color }) {
  return (
    <div className="skill-detail-holder">
      <h4 style={{ paddingBottom: "8px" }}>{name || "none"}</h4>
      <div style={{ border: "1px solid #ccc", marginBottom: "16px" }}>
        <div
          style={{
            backgroundColor: color,
            height: "14px",
            color: "white",
            width: percentage + "%",
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
      {skillsList.map((item) => {
        return (
          <SkillDetail
            name={item.name}
            percentage={item.percentage}
            color={item.color}
          />
        );
      })}
    </div>
  );
}
