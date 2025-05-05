import React from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/aboutMe.css';


const AboutMe = () => {
  const navigate = useNavigate();
  return (
    
    <div className="aboutMe">
     
      <h1>About Me</h1>
      <p>
        A passionate 
        <span className="highlight"> UI/UX Designer</span> specializing in 
        <span className="highlight"> React.js</span> and modern web technologies. 
        I love creating engaging, user-friendly applications.
      </p>
     
      <p>
        Beyond coding, I serve as a <span className="highlight">Layout Artist and Managing Editor for Finance </span> 
        for the College of Computing Studies- the <span className="highlight">Venom Publication</span>, creating publication material and managing finances.
      </p>
      <p>
        Currently, I’m working on a <span className="highlight"> project website </span> 
        that focuses on <em>education, social issues, and trends to create impact while practicing and improving my skills.</em>
      </p>
      <p>Let’s connect and create something amazing!</p>
    </div>
  );
}

export default AboutMe;
