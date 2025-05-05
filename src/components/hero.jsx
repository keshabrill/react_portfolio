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
    <div className="postcard">
      <div className="hero-container">
        <div className="profilePhoto">
          <img src={myImage} alt="Quecia Mae Brilliantes" />
        </div>
        
        <div className="hero-content">
          <h1 className='myName'>Hi, I'm Quecia Mae Brilliantes</h1>
          <h2 className='bio'>Aspiring UI/UX Designer</h2>
          <p className='bio2'>Bringing ease to the web.</p>
          <p className='contactIcon'>You're welcome to reach out via the icons below.</p>
          <div className="socialIcon">
            <a href="https://www.linkedin.com/in/queciabrilliantes/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={linkedIn} alt="LinkedIn" />
            </a>
            <a href="https://github.com/keshabrill" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={gitHub} alt="GitHub" />
            </a>
            <a href="mailto:queciamaebrilliantes@gmail.com" className="icon-link">
              <img src={myEmails} alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;