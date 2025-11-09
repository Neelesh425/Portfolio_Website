import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

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
            { name: 'Java', experience: '4 years',  color: '#f89820' },
            { name: 'Python', experience: '3 years',  color: '#ffd43b' },
            { name: 'JavaScript', experience: '3 years',  color: '#f7df1e' },
            { name: 'TypeScript', experience: '2 years',  color: '#3178c6' },
            { name: 'SQL', experience: '1.5 years',  color: '#00758f' },
            { name: 'C/C++', experience: '1 years', color: '#659ad2' },
            { name: 'Go', experience: '1 years',  color: '#00add8' },
        ],
        frameworks: [
            { name: 'React', experience: '3 years', level: 90, color: '#61dafb' },
            { name: 'Spring Boot', experience: '2.5 years', level: 85, color: '#6db33f' },
            { name: 'Node.js', experience: '2 years', level: 82, color: '#339933' },
            { name: 'Express', experience: '2 years', level: 80, color: '#000000' },
            { name: 'Next.js', experience: '1.5 years', level: 78, color: '#ffffff' },
            { name: 'Django', experience: '1 years', level: 70, color: '#092e20' },
            { name: 'Flask', experience: '1 years', level: 72, color: '#000000' },
        ],
        tools: [
            { name: 'Git', experience: '4 years', level: 90, color: '#f05032' },
            { name: 'Docker', experience: '2 years', level: 80, color: '#2496ed' },
            { name: 'PostgreSQL', experience: '2.5 years', level: 85, color: '#336791' },
            { name: 'MongoDB', experience: '2 years', level: 78, color: '#47a248' },
            { name: 'AWS', experience: '1.5 years', level: 75, color: '#ff9900' },
            { name: 'Redis', experience: '1 years', level: 70, color: '#dc382d' },
            { name: 'Linux', experience: '3 years', level: 82, color: '#fcc624' },
        ]
    };

    const tabs = [
        { id: 'languages', label: 'Languages', icon: '💻' },
        { id: 'frameworks', label: 'Frameworks', icon: '🚀' },
        { id: 'tools', label: 'Tools', icon: '🛠️' }
    ];

    return (
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
                                            <span className="skill-percentage">{skill.level}%</span>
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
                            <div className="floating-orb orb-1"></div>
                            <div className="floating-orb orb-2"></div>
                            <div className="floating-orb orb-3"></div>
                            
                            <div className="center-sphere">
                                <div className="sphere-ring ring-1"></div>
                                <div className="sphere-ring ring-2"></div>
                                <div className="sphere-ring ring-3"></div>
                                <div className="sphere-core">
                                    <div className="core-glow"></div>
                                </div>
                            </div>

                            <div className="code-particles">
                                <span className="particle">{'<>'}</span>
                                <span className="particle">{'{ }'}</span>
                                <span className="particle">{'[ ]'}</span>
                                <span className="particle">{'( )'}</span>
                                <span className="particle">{'=>'}</span>
                                <span className="particle">{'&&'}</span>
                            </div>

                            <div className="tech-icons">
                                <div className="tech-icon icon-1">⚛️</div>
                                <div className="tech-icon icon-2">🐍</div>
                                <div className="tech-icon icon-3">☕</div>
                                <div className="tech-icon icon-4">🔷</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;