import React from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/hero.css';
import myImage from '../assets/styles/images/profilePic.jpg';
import linkedIn from '../assets/styles/images/brownLinkedin.svg';
import gitHub from '../assets/styles/images/brownGithub.svg';
import myEmails from '../assets/styles/images/brownEnvelope.svg';


const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <h1>Hi, I'm Quecia Mae Brilliantes</h1>
      <h2>Aspiring UI/UX Designer</h2>
      <p>Bringing ease to the web.</p>

      <div className="navBar"> 
      <button onClick={() => navigate("/")}>
         Home
        </button>
      <button onClick={() => navigate("/about")}>
          About Me
        </button>
        <button>View My Work</button>
        <button>Hire Me</button>
        <button>Industry Visit Experience</button>
        <button>Download My Resume</button>
      </div>

      <div className="profilePhoto">
        <img src={myImage} alt="" />
      </div>

      <div className="socialIcon">
        <a href="https://www.linkedin.com" target="_blank" className="icon-link">
        <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a href="https://github.com" target="_blank" className="icon-link">
        <img src={gitHub} alt="GitHub" />
        </a>
        <a href="mailto:example@example.com" className="icon-link">
        <img src={myEmails} alt="Email" />
        </a>
     </div>
      
    </div>
  );
}

export default Hero;
