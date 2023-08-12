import React from "react";
import "../css/Footer.css";

export default function Footer({ mode }) {
  return (
    <div
      id="footer"
      className={`${mode === "white" ? "footer-light" : "footer-dark"}`}
    >
      <div className="footer-base py-2">
        <div>Copyright &copy; Shubham Sharan</div>
        <div>shubhamsharanofficial@gmail.com</div>
      </div>
    </div>
  );
}
