import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/skillsCert.css';

const SkillsCertificates = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const navigate = useNavigate();

  // Skills data
  const skills = [
    { name: 'JavaScript', level: 70, category: 'Frontend' },
    { name: 'React', level: 70, category: 'Frontend' },
    { name: 'C++', level: 80, category: 'Backend' },
    { name: 'PHP', level: 75, category: 'Backend' },
    { name: 'MySQL', level: 85, category: 'Database' },
    { name: 'CSS', level: 95, category: 'Frontend' },
    { name: 'Python', level: 78, category: 'Backend'},
    { name: 'Canva', level: 95, category: 'Design Tools'},
    { name: 'Figma', level: 80, category: 'Design Tools'},
  ];

  // Certificates data
  const certificates = [
    {
      title: 'JavaScript algorithms and Data Structures',
      issuer: 'freeCodeCamp()',
      date: 'May 2025',
      credential: 'https://freecodecamp.org/certification/fcc982579a1-977d-46d9-87a6-de8df8c77124/javascript-algorithms-and-data-structures-v8',
      
    },

    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp()',
      date: 'May 2025',
      credential: 'https://freecodecamp.org/certification/fcc982579a1-977d-46d9-87a6-de8df8c77124/responsive-web-design',
      
    },

    {
      title: 'Intoduction to Cybercrime',
      issuer: 'simplilearn|SkillUP',
      date: 'May 2025',
      credential: 'https://simpli-web.app.link/e/DvQawZmF6Sb',
     
    },

    {
      title: 'Intoduction to Data Science',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/mozaKoTH6Sb',
      
    },

    {
      title: 'Intoduction to Data Science with R Prograamming',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/lE610vdI6Sb',
      
    },

    {
      title: 'Tableau Data Visualization Basics Tutorial',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/D3ezeaxI6Sb',
      
    },

    {
      title: 'Introduction to the Computer Networking',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/huWp4vMI6Sb',
   
    },
    
    {
      title: 'Excel Macros & VBA for Beginners',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/IiIgJqjJ6Sb',
      
    },

    {
      title: 'Introduction to Six Sigma',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/RVbFU5yJ6Sb',
      
    },
    
    {
      title: 'PMP Basics',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'hhttps://simpli-web.app.link/e/WgyUw8RJ6Sb',
      
    },

    {
      title: 'Project Management 101',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/ji395bgK6Sb',
      
    },

    {
      title: 'Getting Python Interview Ready',
      issuer: 'simplilearn|SkillUP',
      date: 'April 2025',
      credential: 'https://simpli-web.app.link/e/dMzOhPvK6Sb',
      
    }

    
  ];

  return (
    <div className="skills-certificates-container">
      <div className="skills-header">
        <h1>Skills & Certifications</h1>
        
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            Certificates
          </button>
        </div>
      </div>

      <div className="tab-content-wrapper">
        {/* Skills Grid - always present but visibility controlled */}
        <div 
          className="skills-grid" 
          data-active={activeTab === 'skills'}
        >
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="category">{skill.category}</span>
              </div>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="skill-level">{skill.level}%</div>
            </div>
          ))}
        </div>

        {/* Certificates Grid - always present but visibility controlled */}
        <div 
          className="certificates-grid" 
          data-active={activeTab === 'certificates'}
        >
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              
              <div className="certificate-details">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
                <a 
                  href={cert.credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCertificates;