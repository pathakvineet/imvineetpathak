import React from "react";
import "../assets/css/me.css";

export default function Me() {
  return (
    <div className="me-container">
      <h5 style={{ paddingLeft: "5%" }}>👋 I am,</h5>
      <h1 style={{ paddingLeft: "5%" }}>
        Vineet Pathak<span className="blinking">|</span>
      </h1>
    </div>
  );
}
