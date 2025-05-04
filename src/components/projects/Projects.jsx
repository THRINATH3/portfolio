import React from 'react';
import './Projects.css';
import os from '../gallery/OS.png';
import hm from '../gallery/hm.png';
import uw from '../gallery/uw.png';

function Projects() {
  const projectData = [
    {
      name: 'Ur Wallpaper',
      tech: ['React JS', 'Node JS', 'Cloudinary', 'Express', 'GSAP'],
      description:
        'Created a dynamic website that showcases live wallpapers captured by users, offering a personalized and visually engaging experience.',
      repo: 'https://github.com/THRINATH3/urwallpaper_react',
      live: 'https://urwallpaper-react.vercel.app',
      img: uw,
    },
    {
      name: 'Occasional-Stylist',
      tech: ['React JS', 'Node JS', 'Express'],
      description:
        'Designed a website that provides personalized outfit recommendations based on body type, helping users choose suitable attire for different occasions.',
      repo: 'https://github.com/THRINATH3/O-Stylist',
      live: 'https://o-stylist.vercel.app',
      img: os,
    },
    {
      name: 'Hiremate',
      tech: ['React JS', 'Node JS', 'Express', 'Cloudinary'],
      description:
        'Developed a dynamic freelancing platform that connects skilled freelancers with hiring professionals. Features like secure messaging, project tracking, and seamless collaboration ensure a smooth and professional experience.',
      repo: 'https://github.com/THRINATH3/HireMate',
      live: 'https://hire-mate.vercel.app',
      img: hm,
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.img}
                  alt={project.name}
                  className="card-img-top project-img"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.name}</h5>
                  <div className="mb-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge-gradient me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <hr />
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-3 text-center">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm me-2"
                      style={{ width: '40%',fontSize:'120%' }}
                    >
                      Repo
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                      style={{ width: '40%',fontSize:'120%' }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-5" />
      </div>
    </section>
  );
}

export default Projects;
