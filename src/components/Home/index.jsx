import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoE from '../../assets/images/N_logo.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "eelesh, ".split("");
    const jobArray = "software engineer.".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>H</span>
                <span className = {`${letterClass} _9`}>e</span>
                <span className = {`${letterClass} _9`}>y</span>
                <span className = {`${letterClass} _9`}>y</span>
                <br /> 
                <span className = {`${letterClass} _10`}>T</span>
                <span className = {`${letterClass} _11`}>h</span>
                <span className = {`${letterClass} _11`}>i</span>
                <span className = {`${letterClass} _11`}>s</span>
                <span className = {`${letterClass} _11`}></span>
                <span className = {`${letterClass} _11`}>i</span>
                <span className = {`${letterClass} _11`}>s</span>
                <img src={LogoE} alt = "developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2>Computer Science & Engineering , 2026 at JUT Ranchi</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo className="Home"/>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home