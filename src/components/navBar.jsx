import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../assets/styles/navBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-container">
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu size={24} />
      </button>
      <div className={`navBar ${menuOpen ? "open" : ""}`}>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About Me</button>
        <button onClick={() => navigate("/work")}>Works and Certificates</button>
        <button>Industry Visit Experience</button>
        <button>Contact Me</button>
        <button>Download My Resume</button>
      </div>
    </div>
  );
};

export default NavBar;

