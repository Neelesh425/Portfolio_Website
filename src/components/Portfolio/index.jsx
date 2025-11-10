import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import PageLoader from '../PageLoader'; 

// Images
import cogniQuestImg from './project_img/memory_card.png';
import chatbotImg from './project_img/chatbot.png';
import gluco_guardImg from './project_img/gluco_guard.png';
import nftImg from './project_img/nft.png';
import Lost_and_foundImg from './project_img/Lost_and_found.png';
import weatherImg from './project_img/weather.png';


const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  // Wait for PageLoader to finish (2000ms) + small buffer
  const timer = setTimeout(() => {
    setIsVisible(true);
  }, 2200); // Changed from 100ms to 2200ms

  // Animate title letters after cards start
  const letterTimer = setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 6200); // Changed from 4000ms to 6200ms (2200 + 4000)

  return () => {
    clearTimeout(timer);
    clearTimeout(letterTimer);
  };
}, []);

  const titleArray = "My Portfolio".split("");

  const projects = [
    {
      id: 1,
      title: 'Cogni_Quest',
      description: 'A game to sharpen and hone your Memory',
      technologies: ['ReactJS', 'Scss', 'Spring Boot'],
      icon: '📚',
      gradient: 'linear-gradient(135deg, #4a1a1a 0%, #7a2c2c 100%)',
      link: 'https://neelesh425.github.io/newMemoryCardGame',
      image : cogniQuestImg,
    },
    {
      id: 2,
      title: 'Virtual Art Gallery with NFT Integration',
      description: "View Place for your Nft's ",
      technologies: ['NextJS', 'Prisma', 'Spring Boot'],
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 100%)',
      link: 'https://github.com/Neelesh425/Nft_marketPlace_apik',
      image : nftImg,
    },
    {
      id: 3,
      title: 'Gluco_Guard',
      description: 'Get Warking signs and prevent Diaebeties',
      technologies: ['Python', 'Sci-kit Learn', 'Pandas', 'Flask'],
      icon: '⚽',
      image: gluco_guardImg,
      gradient: 'linear-gradient(135deg, #38003c 0%, #5a0058 100%)',
      link: 'https://github.com/Neelesh425/diabeties_prediction_new_apk'
    },
    {
      id: 4,
      title: 'Weather_How',
      description: 'Get Real time Info on weather anywhere',
      technologies: ['Phython', 'Flask', 'Vercel'],
      icon: '🏆',
      image: weatherImg,
      gradient: 'linear-gradient(135deg, #1e4d3c 0%, #2d7a5f 100%)',
      link: 'https://github.com/Neelesh425/newWeatherPrediction'
    },
    {
      id: 5,
      title: 'Lost_&_Found',
      description: 'Full-stack web application built for lost Items',
      technologies: ['html/scss/Js', 'MySQL', 'Vue.js'],
      icon: '🔧',
      image: Lost_and_foundImg,
      gradient: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)',
      link: 'https://github.com/Neelesh425/Lost_and_found_apk'
    },
    {
      id: 6,
      title: 'Dec_Chatbot',
      description: 'Real-time chatBot for Dumka Engineering College',
      technologies: ['html/css/Js', 'Phython', 'Flask', 'SqLAlchemy'],
      icon: '👥',
      image: chatbotImg,
      gradient: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
      link: 'https://github.com/Neelesh425/DumkaEngineeringCollege_chatbot'
    },

  ];

  const handleProjectClick = (link) => {
    if (link !== '#') {
      window.open(link, '_blank');
    }
  };

  return (
   <PageLoader duration={2000}>
    <div className="portfolio-container">
      <div className="portfolio-content">
        <h1 className="portfolio-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titleArray}
            idx={15}
          />
        </h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${isVisible ? 'visible' : ''}`}
              style={{ 
                background: project.gradient,
                transitionDelay: `${index * 0.2}s`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.link)}
            >

              <div className="project-image-container">
  {project.image ? (
    <img 
      src={project.image} 
      alt={project.title}
      className="project-image"
    />
  ) : (
    <div className="project-placeholder-icon">
      <span>{project.icon}</span>
    </div>
  )}
</div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                <p className="project-description">{project.description}</p>
                <button 
                  className="view-project-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProjectClick(project.link);
                  }}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageLoader>
  );
};

export default Portfolio;