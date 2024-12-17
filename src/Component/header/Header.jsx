import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-main">
      <div className="Focux">
        <Link to={"/"}>Focux</Link>
      </div>

      <ul className="header-ul">
        <li>Signal</li>
        <li>Communities</li>
        <li>Contact Us</li>
        <li>
          <Link to={"/AboutUs"}>About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
