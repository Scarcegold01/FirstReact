import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="Nav-links">
        <h3> Navigation links</h3>
        <ul>
          <li>Home</li>
          <li>Signal</li>
          <li>Contact Us</li>
          <li>Communities</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <hr />
      </div>
      <div className="Copyright">
        <h4> Copyright Information</h4>
        <p> © 2023 YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
