import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container text-center">
        <div className="mb-3">
          <a
            href="https://www.linkedin.com/in/thrinath-pothineni-849864287/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon mx-3"
          >
            <FaLinkedin className='fs-1'/>
          </a>
          <a
            href="https://github.com/THRINATH3"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon mx-3"
          >
            <FaGithub className='fs-1'/>
          </a>
          <a
            href="mailto:thrinathpothineni@gmail.com"
            className="footer-icon mx-3"
          >
            <FaEnvelope className='fs-1' />
          </a>
        </div>
        <p className="mb-0 text-muted">&copy; {new Date().getFullYear()} Pothineni Thrinath</p>
      </div>
    </footer>
  );
}

export default Footer;
