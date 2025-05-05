import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../assets/styles/navBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="nav-container" ref={navRef}>
      <div className="nav-inner">
        <button
          className="burger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <GiHamburgerMenu size={24} />
        </button>

        <div className={`navBar ${menuOpen ? "open" : ""}`}>
          <button onClick={() => navigate("/")} className={isActive("/") ? "active" : ""}>Home</button>
          <button onClick={() => navigate("/about")} className={isActive("/about") ? "active" : ""}>About Me</button>
          <button onClick={() => navigate("/cert")} className={isActive("/cert") ? "active" : ""}>Skills and Certificates</button>
          <a href="https://keshaeductourblog.netlify.app/" target="_self">
  <button className={isActive("https://keshaeductourblog.netlify.app/") ? "active" : ""}>
    Blogs
  </button>
</a>          <button onClick={() => navigate("/expe")} className={isActive("/expe") ? "active" : ""}>Experience</button>
          <button onClick={() => navigate("/proj")} className={isActive("/proj") ? "active" : ""}>Projects</button>
          <button onClick={() => navigate("/resume")} className={isActive("/resume") ? "active" : ""}>My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
