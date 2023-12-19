import React from "react";
import "../assets/css/me.css";

export default function Me() {
  return (
    <div class="me-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h4>👋. I am,</h4>
        <h1>
          Vineet Pathak<span className="blinking">|</span>
        </h1>
      </div>
      <img src="" alt="" />
    </div>
  );
}
