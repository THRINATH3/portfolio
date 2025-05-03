import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaUser } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { useState } from 'react';
import resume from '../gallery/thriResume.pdf'
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    gsap.from(".hdani", {
      scale: 0,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.7)"
    });


    gsap.from(".nav-item-anim", {
      y: -40,
      opacity: 0,
      duration: 0.6,
      delay: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top px-4 py-3">
      <a className="navbar-brand text-info fw-bold fs-3 hdani" href="#">Pothineni Thrinath</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        onClick={toggleNavbar}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ display: isOpen ? 'none' : 'inline-block' }}></span>
        <span style={{ color: 'white', fontSize: '1.5rem', display: isOpen ? 'inline-block' : 'none' }}>✕</span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-4">
          <li className="nav-item nav-item-anim">
            <a className="nav-link fs-5" href="#about"><FaUser className='mb-1' /> About</a>
          </li>
          <li className="nav-item nav-item-anim">
            <a className="nav-link fs-5" href="#projects"><IoCubeOutline className='mb-1' /> Projects</a>
          </li>
          <li className="nav-item nav-item-anim">
            <a className="nav-link fs-5" href={resume} download><IoNewspaper className='mb-1'/> Resume</a>
          </li>
          <li className="nav-item nav-item-anim">
            <a className="nav-link fs-5" href="#coding"><ImProfile className='mb-1' /> Coding Profiles</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
