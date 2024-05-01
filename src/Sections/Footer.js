import React from "react";
import packageJson from "../../package.json";
import "../assets/css/footer.css";

export default function Footer() {
  function updatedAt() {
    const originalDate = new Date(packageJson?.lastUpdatedAt);
    return originalDate.toLocaleDateString("en-GB");
  }

  return (
    <div className="footer-container">
      <hr />
      <div className="footer-sections">
        <div>
          <h6>Say Hello</h6>
          <p>pathakvineet3@gmail.com</p>
        </div>
        <div>
          <h6 style={{ cursor: "pointer" }}>Grab my CV ⬇️</h6>
          <p>Last update: {updatedAt()}</p>
          <p>website / CV version: {packageJson?.version}</p>
        </div>
      </div>
      {/* <hr /> */}
      <p className="copyright">
        © [2024] <strong>Vineet Pathak</strong>. Crafted with ❤️ and code.
      </p>
    </div>
  );
}
