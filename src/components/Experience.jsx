import React from 'react';
import '../assets/styles/ExperiencePage.css';
import companyLogo from '../assets/styles/images/sk/AIDSLOGO.png'; // Update path as needed

const ExperiencePage = () => {
  return (
    <div className="experience-container">
      <header className="experience-header">
        <h1>Software Engineering Experience</h1>
        <div className="experience-intro">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
          <div>
            <h2 className="company-name">Adaptive Issue Dynamic Solvers (AIDS)</h2> {/* Replace with your actual group/company name */}
            <p><strong>Role:</strong> Project Manager</p>
            <p><strong>Duration:</strong> January 2024 – May 2024</p>
            <p><strong>Project:</strong> Sangguniang Kabataan Community CMS Website of Tetuan, Zamboanga City</p>
          </div>
        </div>
      </header>

      <section className="project-section">
        <h2>Company Background</h2>
        <div className="company-info">
          <p>
          Adaptive Issue Dynamic Solvers (AIDS) is a forward-thinking information management company known for its innovative mindset and technical excellence. With a vision to expand globally, AIDS combines strategic thinking, agile problem-solving, and collaborative teamwork to address complex challenges in dynamic environments. Its logo—featuring binary rings, a cogwheel, a chess queen, and puzzle pieces—symbolizes its core values: innovation, adaptability, strategic insight, and unity.
          </p>
        </div>
      </section>

      {/* Remaining sections... (unchanged unless you want edits) */}
      <section className="project-section">
        <h2>Project Overview</h2>
        <div className="overview-card">
          <p>
            <strong>Technologies Used:</strong> PHP, MySQL, HTML, CSS, JavaScript
          </p> 
          <p>
          The project represents a civic technology solution that applies appropriate technology (PHP/MySQL stack) to solve real grassroots governance challenges while accommodating local constraints. It's essentially a community intranet tailored to the specific needs of Filipino youth organizations.
          </p>
        </div>
      </section>

      {/* (Rest of your sections stay the same) */}

      <div className="repo-link">
        <a href="https://github.com/keshabrill/SK-Tetuan.git" target="_blank" rel="noopener noreferrer">
          View Project Repository
        </a>
      </div>
    </div>
  );
};

export default ExperiencePage;
