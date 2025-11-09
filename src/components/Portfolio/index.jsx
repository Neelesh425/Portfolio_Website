import React, { useState } from 'react';
import './index.scss';

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cogni_Quest',
      description: 'A comprehensive exam scheduling system with automated conflict detection',
      technologies: ['ReactJS', 'PostgreSQL', 'Spring Boot'],
      image: '/path-to-exam-scheduler-image.jpg',
      gradient: 'linear-gradient(135deg, #4a1a1a 0%, #7a2c2c 100%)',
      link: '#'
    },
    {
      id: 2,
      title: 'Empor',
      description: 'E-commerce platform with real-time inventory management',
      technologies: ['NextJS', 'Prisma', 'Spring Boot'],
      image: '/path-to-empor-image.jpg',
      gradient: 'linear-gradient(135deg, #e8e8e8 0%, #ffffff 100%)',
      link: '#'
    },
    {
      id: 3,
      title: 'PL Match Predictor',
      description: 'Machine learning model to predict Premier League match outcomes',
      technologies: ['Python', 'Sci-kit Learn', 'Pandas'],
      image: '/path-to-pl-predictor-image.jpg',
      gradient: 'linear-gradient(135deg, #38003c 0%, #5a0058 100%)',
      link: '#'
    },
    {
      id: 4,
      title: 'PremierZone',
      description: 'Fantasy football analytics and team management platform',
      technologies: ['ReactJS', 'PostgreSQL', 'Spring Boot'],
      image: '/path-to-premierzone-image.jpg',
      gradient: 'linear-gradient(135deg, #1e4d3c 0%, #2d7a5f 100%)',
      link: '#'
    },
    {
      id: 5,
      title: 'Laravel Project',
      description: 'Full-stack web application built with Laravel framework',
      technologies: ['Laravel', 'MySQL', 'Vue.js'],
      image: '/path-to-laravel-image.jpg',
      gradient: 'linear-gradient(135deg, #f0f0f0 0%, #ffffff 100%)',
      link: '#'
    },
    {
      id: 6,
      title: 'Social Platform',
      description: 'Real-time social networking application',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/path-to-social-image.jpg',
      gradient: 'linear-gradient(135deg, #001a33 0%, #003366 100%)',
      link: '#'
    },
    {
      id: 7,
      title: 'Chat Application',
      description: 'Real-time messaging app with emoji support',
      technologies: ['React', 'Socket.io', 'Express'],
      image: '/path-to-chat-image.jpg',
      gradient: 'linear-gradient(135deg, #b3d9ff 0%, #e6f2ff 100%)',
      link: '#'
    },
    {
      id: 8,
      title: 'Game Project',
      description: 'Interactive browser-based game with leaderboard',
      technologies: ['JavaScript', 'Canvas API', 'Firebase'],
      image: '/path-to-game-image.jpg',
      gradient: 'linear-gradient(135deg, #2c1810 0%, #4a2818 100%)',
      link: '#'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <h1 className="portfolio-title">My Portfolio</h1>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              style={{ background: project.gradient }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image-container">
                {/* Add your project image here */}
                <div className="project-placeholder-icon">
                  <span>🚀</span>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-technologies">
                  {project.technologies.join(', ')}
                </div>
              </div>

              {hoveredProject === project.id && (
                <div className="project-overlay">
                  <p className="project-description">{project.description}</p>
                  <button className="view-project-btn">View Project →</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;