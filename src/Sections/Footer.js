import React from "react";
import packageJson from "../../package.json";

export default function Footer() {
  return (
    <div>
      <h4>Contact Me</h4>
      <p>pathakvineet3@gmail.com</p>
      <p>Download resume</p>
      <p>Last Updated</p>
      <p>website version: {packageJson?.version}</p>
    </div>
  );
}
