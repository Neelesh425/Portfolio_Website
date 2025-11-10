import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import PageLoader from '../PageLoader';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [activeTab, setActiveTab] = useState('languages');

    
    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    

    const skillsData = {
        languages: [
            { name: 'Java', experience: '4 years', level: 100, color: '#f89820' },
            { name: 'Python', experience: '3 years', level: 80, color: '#ffd43b' },
            { name: 'JavaScript', experience: '3 years', level: 80, color: '#f7df1e' },
            { name: 'TypeScript', experience: '1 years', level: 30, color: '#3178c6' },
            { name: 'SQL', experience: '2.5 years', level: 70, color: '#00758f' },
            { name: 'C', experience: '2 years', level: 60, color: '#659ad2' },
            { name: 'Go', experience: '1 years', level: 30, color: '#00add8' },
        ],
        frameworks: [
            { name: 'React', experience: '2 years', level: 70, color: '#61dafb' },
            { name: 'Spring Boot', experience: '0.5 years', level: 15, color: '#6db33f' },
            { name: 'Node.js', experience: '1.5 years', level: 50, color: '#339933' },
            { name: 'Express', experience: '1 years', level: 30, color: '#000000' },
            { name: 'Next.js', experience: '1 years', level: 30, color: '#ffffff' },
            { name: 'Django', experience: '1 years', level: 30, color: '#092e20' },
            { name: 'Flask', experience: '1 years', level: 30, color: '#000000' },
        ],
        tools: [
            { name: 'Git', experience: '4 years', level: 90, color: '#f05032' },
            { name: 'Docker', experience: '1 years', level: 30, color: '#2496ed' },
            { name: 'PostgreSQL', experience: '0.5 years', level: 15, color: '#336791' },
            { name: 'MongoDB', experience: '1 years', level: 30, color: '#47a248' },
            { name: 'AWS', experience: '1.5 years', level: 50, color: '#ff9900' },
            { name: 'Redis', experience: '0.3 years', level: 10, color: '#dc382d' },
            { name: 'Linux', experience: '0.3 years', level: 10, color: '#fcc624' },
        ]
    };

    const tabs = [
        { id: 'languages', label: 'Languages', icon: '' },
        { id: 'frameworks', label: 'Frameworks / Technologies', icon: '' },
        { id: 'tools', label: 'Tools', icon: '' }
    ];

    return (
        <PageLoader duration={2000}>
        <>
            <div className="container about-page">
                <div className="content-wrapper">
                    <div className="left-section">
                        <h1>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                                idx={15}
                            />
                        </h1>

                        <div className="about-description">
                            <p>
                                I'm a passionate software engineer with a strong foundation in full-stack development. 
                                I love building scalable applications and solving complex problems with elegant solutions.
                            </p>
                            <p>
                                Currently pursuing Computer Science & Engineering at JUT Ranchi, graduating in 2026. 
                                I'm constantly learning new technologies and improving my craft.
                            </p>
                        </div>

                        <div className="skills-section">
                            <div className="tabs-container">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab.id)}
                                    >
                                        <span className="tab-icon">{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <div className="skills-content">
                                {skillsData[activeTab].map((skill, idx) => (
                                    <div 
                                        key={skill.name} 
                                        className="skill-item"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <div className="skill-header">
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-experience">{skill.experience}</span>
                                            </div>
                                            <span className="skill-percentage"></span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress"
                                                style={{ 
                                                    width: `${skill.level}%`,
                                                    background: `linear-gradient(90deg, ${skill.color}dd, ${skill.color})`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="right-section">
                        <div className="illustration-wrapper">
                            <svg className="neural-network" viewBox="0 0 400 400">
                                {/* Layer 1 - Input nodes */}
                                <circle className="node node-1" cx="80" cy="100" r="12" />
                                <circle className="node node-2" cx="80" cy="180" r="12" />
                                <circle className="node node-3" cx="80" cy="260" r="12" />
                                <circle className="node node-4" cx="80" cy="340" r="12" />

                                {/* Layer 2 - Hidden nodes */}
                                <circle className="node node-5" cx="200" cy="80" r="14" />
                                <circle className="node node-6" cx="200" cy="150" r="14" />
                                <circle className="node node-7" cx="200" cy="220" r="14" />
                                <circle className="node node-8" cx="200" cy="290" r="14" />
                                <circle className="node node-9" cx="200" cy="360" r="14" />

                                {/* Layer 3 - Output nodes */}
                                <circle className="node node-10" cx="320" cy="120" r="12" />
                                <circle className="node node-11" cx="320" cy="200" r="12" />
                                <circle className="node node-12" cx="320" cy="280" r="12" />

                                {/* Connections Layer 1 to Layer 2 */}
                                <line className="connection conn-1" x1="80" y1="100" x2="200" y2="80" />
                                <line className="connection conn-2" x1="80" y1="100" x2="200" y2="150" />
                                <line className="connection conn-3" x1="80" y1="180" x2="200" y2="150" />
                                <line className="connection conn-4" x1="80" y1="180" x2="200" y2="220" />
                                <line className="connection conn-5" x1="80" y1="260" x2="200" y2="220" />
                                <line className="connection conn-6" x1="80" y1="260" x2="200" y2="290" />
                                <line className="connection conn-7" x1="80" y1="340" x2="200" y2="290" />
                                <line className="connection conn-8" x1="80" y1="340" x2="200" y2="360" />
                                <line className="connection conn-9" x1="80" y1="100" x2="200" y2="220" />
                                <line className="connection conn-10" x1="80" y1="260" x2="200" y2="150" />

                                {/* Connections Layer 2 to Layer 3 */}
                                <line className="connection conn-11" x1="200" y1="80" x2="320" y2="120" />
                                <line className="connection conn-12" x1="200" y1="150" x2="320" y2="120" />
                                <line className="connection conn-13" x1="200" y1="150" x2="320" y2="200" />
                                <line className="connection conn-14" x1="200" y1="220" x2="320" y2="200" />
                                <line className="connection conn-15" x1="200" y1="220" x2="320" y2="280" />
                                <line className="connection conn-16" x1="200" y1="290" x2="320" y2="280" />
                                <line className="connection conn-17" x1="200" y1="360" x2="320" y2="280" />
                                <line className="connection conn-18" x1="200" y1="80" x2="320" y2="200" />
                                <line className="connection conn-19" x1="200" y1="290" x2="320" y2="200" />

                                {/* Data pulses - these will be animated */}
                                <circle className="pulse pulse-1" r="3">
                                    <animateMotion dur="3s" repeatCount="indefinite">
                                        <mpath href="#path-1" />
                                    </animateMotion>
                                </circle>
                                <circle className="pulse pulse-2" r="3">
                                    <animateMotion dur="2.5s" repeatCount="indefinite">
                                        <mpath href="#path-2" />
                                    </animateMotion>
                                </circle>
                                <circle className="pulse pulse-3" r="3">
                                    <animateMotion dur="3.5s" repeatCount="indefinite">
                                        <mpath href="#path-3" />
                                    </animateMotion>
                                </circle>

                                {/* Hidden paths for pulse animation */}
                                <defs>
                                    <path id="path-1" d="M 80 100 L 200 150 L 320 200" fill="none" />
                                    <path id="path-2" d="M 80 260 L 200 220 L 320 280" fill="none" />
                                    <path id="path-3" d="M 80 180 L 200 290 L 320 120" fill="none" />
                                </defs>
                            </svg>

                            <div className="floating-particles">
                                <div className="data-particle p-1">01</div>
                                <div className="data-particle p-2">10</div>
                                <div className="data-particle p-3">11</div>
                                <div className="data-particle p-4">00</div>
                                <div className="data-particle p-5">AI</div>
                                <div className="data-particle p-6">ML</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
        </PageLoader>
    );
};

export default About;