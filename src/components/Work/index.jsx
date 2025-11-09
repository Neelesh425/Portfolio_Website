import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const WorkExperience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [expandedCard, setExpandedCard] = useState(null);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const experiences = [
        {
            id: 1,
            company: 'TRC Consulting, Inc.',
            position: 'Full Stack Developer',
            duration: 'May - September 2024',
            location: 'Remote',
            color: '#e63946',
            responsibilities: [
                'Developed responsive web applications using React and Node.js',
                'Implemented RESTful APIs and integrated with PostgreSQL database',
                'Collaborated with design team to create intuitive user interfaces',
                'Optimized application performance resulting in 40% faster load times'
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
        },
        {
            id: 2,
            company: 'Tech Innovations Ltd.',
            position: 'Software Engineer Intern',
            duration: 'May - September 2023',
            location: 'Hybrid',
            color: '#f77f00',
            responsibilities: [
                'Built and maintained microservices using Spring Boot',
                'Designed and implemented database schemas for new features',
                'Participated in agile ceremonies and sprint planning',
                'Wrote comprehensive unit tests achieving 85% code coverage'
            ],
            technologies: ['Java', 'Spring Boot', 'MySQL', 'Redis', 'Kafka']
        },
        {
            id: 3,
            company: 'Digital Solutions Co.',
            position: 'Frontend Developer',
            duration: 'January - April 2023',
            location: 'On-site',
            color: '#06a77d',
            responsibilities: [
                'Created reusable React components following best practices',
                'Implemented state management using Redux Toolkit',
                'Worked with UX designers to ensure pixel-perfect designs',
                'Improved accessibility standards across the application'
            ],
            technologies: ['React', 'Redux', 'TypeScript', 'Tailwind', 'Figma']
        }
    ];

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <>
            <div className="container work-experience-page">
                <div className="content-wrapper">
                    <div className="left-section">
                        <h1>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                                idx={15}
                            />
                        </h1>

                        <div className="experience-cards">
                            {experiences.map((exp, idx) => (
                                <div 
                                    key={exp.id} 
                                    className={`experience-card ${expandedCard === exp.id ? 'expanded' : ''}`}
                                    style={{ animationDelay: `${idx * 0.15}s` }}
                                    onClick={() => toggleCard(exp.id)}
                                >
                                    <div className="card-indicator" style={{ background: exp.color }}></div>
                                    
                                    <div className="card-header">
                                        <div className="card-main-info">
                                            <h2 className="company-name" style={{ color: exp.color }}>
                                                {exp.company}
                                            </h2>
                                            <p className="position-title">{exp.position}</p>
                                            <span className="duration">{exp.duration}</span>
                                        </div>
                                        <button className="expand-btn">
                                            {expandedCard === exp.id ? '−' : '+'}
                                        </button>
                                    </div>

                                    <div className="card-expanded-content">
                                        <div className="location-tag">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {exp.location}
                                        </div>

                                        <div className="responsibilities-section">
                                            <h4>Key Responsibilities:</h4>
                                            <ul>
                                                {exp.responsibilities.map((resp, respIdx) => (
                                                    <li key={respIdx}>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="tech-stack">
                                            <h4>Technologies:</h4>
                                            <div className="tech-badges">
                                                {exp.technologies.map((tech, techIdx) => (
                                                    <span key={techIdx} className="tech-badge" style={{ borderColor: exp.color }}>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="illustration-container">
                            <div className="briefcase">
                                <div className="briefcase-body"></div>
                                <div className="briefcase-handle"></div>
                                <div className="briefcase-lock"></div>
                            </div>
                            <div className="document">
                                <div className="doc-header"></div>
                                <div className="doc-line"></div>
                                <div className="doc-line short"></div>
                                <div className="doc-line"></div>
                                <div className="hourglass">
                                    <div className="hourglass-top"></div>
                                    <div className="hourglass-bottom"></div>
                                    <div className="sand"></div>
                                </div>
                            </div>
                            <div className="floating-dots">
                                <span className="dot dot-1"></span>
                                <span className="dot dot-2"></span>
                                <span className="dot dot-3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default WorkExperience;