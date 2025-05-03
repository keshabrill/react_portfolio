import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/myWork.css';

const MyWork = () => {
  const navigate = useNavigate();

  const projects = [
    { 
      id: 1, 
      title: "Evacuation Management System", 
      description: "A web-based system for tracking and managing evacuation procedures.", 
      image: "/assets/images/evacuation.jpg",
      link: "https://yourprojectlink.com"
    },
    { 
      id: 2, 
      title: "PokeClash", 
      description: "An online platform showcasing educational and social issue content.", 
      image: "/assets/images/streaming.jpg",
      link: "https://yourstreamingproject.com"
    },
    { 
      id: 3, 
      title: "To Do List", 
      description: "Graphic layouts and finance management for Venom Publication.", 
      image: "/assets/images/venom.jpg",
      link: "https://yourdesignportfolio.com"
    }
  ];

  const certificates = [
    { 
      id: 4, 
      title: "Web Development Bootcamp", 
      description: "Completed an intensive course covering HTML, CSS, JavaScript, and backend fundamentals.", 
      image: "/assets/images/web-dev-cert.jpg",
      link: "https://yourcertificatelink.com"
    },
    { 
      id: 5, 
      title: "UI/UX Design Essentials", 
      description: "Learned design principles, user research, and prototyping using Figma.", 
      image: "/assets/images/uiux-cert.jpg",
      link: "https://yourcertificatelink.com"
    },
    { 
      id: 6, 
      title: "React JS Certificate", 
      description: "Certified in building dynamic web apps using React, Hooks, and state management.", 
      image: "/assets/images/react-cert.jpg",
      link: "https://yourcertificatelink.com"
    }
  ];

  return (
    <div className="my-work">
       <h1>My Projects</h1>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project-card polaroid">
            <img src={project.image} alt={project.title} className="project-image"/>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      <h1>My Certificates</h1>
      <div className="certificates">
       
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card polaroid">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h2>{cert.title}</h2>
            <p>{cert.description}</p>
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="certificate-link"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
