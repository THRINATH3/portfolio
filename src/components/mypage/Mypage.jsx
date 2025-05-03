import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import pbg from '../gallery/pBg.jpg';
import './Mypage.css';
import About from '../about/About';
import Projects from '../projects/Projects';
import CodingProfiles from '../codingprofiles/CodingProfiles';

function Mypage() {
  useEffect(() => {
    const letters = gsap.utils.toArray('.letter');
    gsap.fromTo(
      letters,
      { opacity: 0, y: 80, color: 'red' },
      {
        opacity: 1,
        y: 0,
        color: 'yellow',
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        repeat: -1,
      }
    );
  }, []);

  const name = "Full Stack Developer | Problem Solver | Code Architect";

  return (
    <div>
    <div className="image-container">
      <img className="image" src={pbg} alt="Background" />
      <h1 className="text-overlay m-5">
        {name.split('').map((char, index) => (
          <span key={index} className="letter">
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
    <About />

    <Projects />

    <CodingProfiles />
    </div>
  );
}

export default Mypage;
