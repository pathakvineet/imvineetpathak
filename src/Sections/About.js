import React from "react";
import "../assets/css/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h3>About me</h3>
      <div>
        <h4>Academic History</h4>
        <p>
          The Swaminarayan School, Nagpur
          <span style={{ paddingLeft: "8px" }}>(School)</span>
        </p>
        <p>
          Modern School, Nagpur
          <span style={{ paddingLeft: "8px" }}>(High School)</span>
        </p>
        <p>
          G.H.R.C.E., Nagpur
          <span style={{ paddingLeft: "8px" }}>(B.tech)</span>
        </p>
      </div>

      <div>
        <h4>Guiding Values</h4>
        <p>Love what you do.</p>
        <p>Simplicity is the ultimate sophistication.</p>
      </div>

      <div>
        <h4>Timeless Wisdom</h4>
        <p>Neurons that fire together, wire together.</p>
      </div>
    </div>
  );
}
