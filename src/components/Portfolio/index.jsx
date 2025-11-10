import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import PageLoader from '../PageLoader'; 

// Import your project images here
// import cogniQuestImg from '../../assets/images/projects/cogni-quest.jpg';
// import emporImg from '../../assets/images/projects/empor.jpg';
// etc...

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
      description: 'A comprehensive exam scheduling system with automated conflict detection',
      technologies: ['ReactJS', 'PostgreSQL', 'Spring Boot'],
      icon: '📚',
      gradient: 'linear-gradient(135deg, #4a1a1a 0%, #7a2c2c 100%)',
      link: '#'
    },
    {
      id: 2,
      title: 'Empor',
      description: 'E-commerce platform with real-time inventory management',
      technologies: ['NextJS', 'Prisma', 'Spring Boot'],
      icon: '🛒',
      gradient: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 100%)',
      link: '#'
    },
    {
      id: 3,
      title: 'PL Match Predictor',
      description: 'Machine learning model to predict Premier League match outcomes',
      technologies: ['Python', 'Sci-kit Learn', 'Pandas'],
      icon: '⚽',
      gradient: 'linear-gradient(135deg, #38003c 0%, #5a0058 100%)',
      link: '#'
    },
    {
      id: 4,
      title: 'PremierZone',
      description: 'Fantasy football analytics and team management platform',
      technologies: ['ReactJS', 'PostgreSQL', 'Spring Boot'],
      icon: '🏆',
      gradient: 'linear-gradient(135deg, #1e4d3c 0%, #2d7a5f 100%)',
      link: '#'
    },
    {
      id: 5,
      title: 'Laravel Project',
      description: 'Full-stack web application built with Laravel framework',
      technologies: ['Laravel', 'MySQL', 'Vue.js'],
      icon: '🔧',
      gradient: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)',
      link: '#'
    },
    {
      id: 6,
      title: 'Social Platform',
      description: 'Real-time social networking application',
      technologies: ['React', 'Node.js', 'MongoDB'],
      icon: '👥',
      gradient: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
      link: '#'
    },
    {
      id: 7,
      title: 'Chat Application',
      description: 'Real-time messaging app with emoji support',
      technologies: ['React', 'Socket.io', 'Express'],
      icon: '💬',
      gradient: 'linear-gradient(135deg, #b3d9ff 0%, #e6f2ff 100%)',
      link: '#'
    },
    {
      id: 8,
      title: 'Game Project',
      description: 'Interactive browser-based game with leaderboard',
      technologies: ['JavaScript', 'Canvas API', 'Firebase'],
      icon: '🎮',
      gradient: 'linear-gradient(135deg, #2c1810 0%, #4a2818 100%)',
      link: '#'
    }
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
                <div className="project-placeholder-icon">
                  <span>{project.icon}</span>
                </div>
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