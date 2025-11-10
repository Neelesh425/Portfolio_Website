import { useEffect, useRef } from 'react';
import LogoE from '../../../assets/images/New.png';
import './index.scss';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add('animate');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="logo-container">
      {/* Liquid droplet particles for initial animation */}
      <div className="liquid-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      <img 
        ref={logoRef}
        className="solid-logo" 
        src={LogoE} 
        alt="JavaScript, Developer" 
      />

      {/* Ambient glow rings */}
      <div className="glow-ring ring-1"></div>
      <div className="glow-ring ring-2"></div>
      <div className="glow-ring ring-3"></div>
      
      {/* Dynamic light beams */}
      <div className="light-beam beam-1"></div>
      <div className="light-beam beam-2"></div>
      <div className="light-beam beam-3"></div>
    </div>
  );
};

export default Logo;