import React from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/aboutMe.css';


const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutMe">

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

      <h1>About Me</h1>
      <p>
        Hi! I'm <span className="highlight">Kesha</span>, a passionate 
        <span className="highlight"> UI/UX Designer</span> specializing in 
        <span className="highlight"> React.js</span> and modern web technologies. 
        I love creating engaging, user-friendly applications.
      </p>
      <p>
        Currently, I’m working on a <span className="highlight">streaming project website</span> 
        that focuses on <em>education, social issues, and trends</em>.
      </p>
      <p>
        Beyond coding, I serve as a <span className="highlight">Layout Artist and Managing Editor for Finance </span> 
        for the <span className="highlight">Venom Publication</span>, creating publication material and managing finances.
      </p>
      <p>Let’s connect and create something amazing!</p>
    </div>
  );
}

export default AboutMe;
