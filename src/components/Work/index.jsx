import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import PageLoader from '../PageLoader'; 

const WorkExperience = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [expandedCard, setExpandedCard] = useState(null);
    const [cardsVisible, setCardsVisible] = useState(false);

    useEffect(() => {
    // Trigger card animations - wait for PageLoader to finish
    const cardTimer = setTimeout(() => {
        setCardsVisible(true);
    }, 2200); // Changed from 500ms to 2200ms

    // Animate title letters
    const letterTimer = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 6200); // Changed from 4000ms to 6200ms

    return () => {
        clearTimeout(cardTimer);
        clearTimeout(letterTimer);
    };
}, []);

    const experiences = [
        {
            id: 1,
            company: 'Lawazia Tech ',
            position: 'Generative_Ai intern',
            duration: 'june - July 2024',
            location: 'Remote',
            color: '#e63946',
            responsibilities: [
                'Implemented asynchronous I/O pipelines in Kotlin and Python to prefetch templates and assets, boosting content-load throughput by 15%.',
                'Integrated a lightweight caching layer using SQLite and in-memory stores, cutting redundant network calls by 25% and improving offline writing capabilities',
                
                
            ],
            technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'Docker']
        },
        {
            id: 2,
            company: 'Ardent Infotech Ltd.',
            position: 'Software Engineer Intern',
            duration: 'June - August 2025',
            location: 'Hybrid',
            color: '#f77f00',
            responsibilities: [
                'Developed SweetForecast, an AI-driven diabetes prediction app at Ardent Computech, integrating Random Forest models on patient data to achieve 85% risk-assessment accuracy.',
                'Implemented Flask-based interactive risk simulations in SweetForecast, enabling what-if scenarios (e.g., +10 kg weight) to visualize real-time diabetes risk changes.',
                'Enhanced SweetForecast’s UI with dynamic graphs and 3D models to display risk trends (age, weight), deliver AI-generated advice, personalized recommendations, and real-time insights'
                
            ],
            technologies: ['Python', 'Spring Boot', 'MySQL', 'Redis', 'Kafka']
        },
        
    ];

    const toggleCard = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    const titleLetters = ['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];

    return (
        <PageLoader duration={2000}>
        <>
            <div className="container work-experience-page">
                <div className="content-wrapper">
                    <div className="left-section">
                        <h1>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={titleLetters}
                                idx={15}
                            />
                        </h1>

                        <div className="experience-cards">
                            {experiences.map((exp, index) => (
                                <div 
                                    key={exp.id} 
                                    className={`experience-card ${cardsVisible ? 'card-visible' : ''}`}
                                    style={{ 
                                        //animationDelay: `${index * 0.2}s`,
                                        transitionDelay: `${index * 0.4}s`
                                    }}
                                    onClick={() => toggleCard(exp.id)}
                                >
                                    <div className="card-indicator" style={{ backgroundColor: exp.color }}></div>
                                    
                                    <div className="card-header">
                                        <div className="card-main-info">
                                            <h2 className="company-name" style={{ color: exp.color }}>
                                                {exp.company}
                                            </h2>
                                            <p className="position-title">{exp.position}</p>
                                            <span className="duration">{exp.duration}</span>
                                        </div>
                                        <button 
                                            className="expand-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleCard(exp.id);
                                            }}
                                        >
                                            {expandedCard === exp.id ? '−' : '+'}
                                        </button>
                                    </div>

                                    <div className={`card-expanded-content ${expandedCard === exp.id ? 'show' : ''}`}>
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
                                                    <span 
                                                        key={techIdx} 
                                                        className="tech-badge" 
                                                        style={{ borderColor: exp.color }}
                                                    >
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
                        <div className={`illustration-container ${cardsVisible ? 'illustration-visible' : ''}`}>
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
            
        </>
        </PageLoader>
    );
};

export default WorkExperience;