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

    gsap.fromTo(
      ".intro-text", 
      {
        scale: 3,   
        opacity: 0, 
        color: 'black', 
      },
      {
        scale: 1,   
        opacity: 1, 
        color: 'white', 
        duration: 4,
        delay: 0.5, 
        ease: 'expo.inOut',
      }
    );

  }, []);

  const name = "Full Stack Developer | Problem Solver | Code Architect";

  return (
    <div>
      <div className="image-container">
        <img className="image" src={pbg} alt="Background" />
        
        {/* Intro text with animation */}
        <h2 className="text-overlay2  intro-text" style={{ marginLeft: '2%' }}>
          Hi..!! I'm Thrinath ...
        </h2>

        {/* Animated text */}
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
