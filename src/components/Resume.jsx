import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/resume.css';
import resumePDF from '../assets/BRILLIANTES.pdf';

const ResumeViewer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Brilliantes_Resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
      }, 100);
    } catch (error) {
      console.error('Download failed:', error);
      if (isMobile) {
        window.open(resumePDF, '_blank');
      }
    }
  };

  const handleClose = () => {
    const modal = document.querySelector('.resume-modal-content');
    if (modal) {
      modal.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        setIsOpen(false);
        navigate('/'); // Redirect after animation
      }, 250);
    } else {
      setIsOpen(false);
      navigate('/'); // Immediate redirect
    }
  };

  return (
    <div className="resume-viewer-container">
      {isOpen && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <iframe 
              src={resumePDF} 
              title="My Professional Resume"
              className="resume-iframe"
              loading="eager"
              aria-label="Resume document viewer"
            ></iframe>
            
            <div className="resume-modal-actions">
              <button 
                className="download-btn"
                onClick={handleDownload}
                aria-label="Download resume"
              >
                <span className="btn-icon">↓</span> Download PDF
              </button>
              
              <button 
                className="close-btn"
                onClick={handleClose}
                aria-label="Close resume viewer"
              >
                <span className="btn-icon">×</span> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeViewer;