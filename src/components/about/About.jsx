import React from 'react';
import './About.css';
import ab from '../gallery/about.webp';
import skills from '../gallery/skills.png';

function About() {
  return (
    <div id='about' >
    <section  className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* About Text Column */}
          <div className="rev d-flex">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="section-title mb-3">About Me</h2>
            <p className="about-text lead">
              I'm a passionate Full Stack Developer with experience in building scalable applications. I specialize in both frontend and backend development, ensuring seamless integration and excellent user experience. I love solving complex problems and constantly exploring new technologies. I am looking for a company where I can apply my knowledge and experience to make a positive contribution. My goal is to help the organization achieve its objectives and grow, while also improving my skills and gaining new experiences along the way.
            </p>
            <p className="cta-text fs-6 mt-4">
              Let's connect and build something impactful together. I'm open to collaborations and exciting new projects!
            </p>
          </div>

          {/* Image Column */}
          <div className="col-md-6 text-center mb-4 mb-md-0 m-3">
            <img
              src={ab}
              alt="Portrait of Full Stack Developer"
              className="about-img"
              style={{width:'100%',borderRadius:'50%'}}
            />
          </div>
      </div>

          <hr className='mt-5'/>

          {/* Skills Section */}
          <div className="col-md-12 mt-5">
            <h3 className="skills-title mb-4 text-center">Skills</h3>
            <div className="row">
              {/* Skills Image */}
              <div className="col-md-6 mb-4 text-center">
                <img
                  src={skills}
                  alt="Skills Infographic"
                  className="skills-img"
                  style={{width:'90%',borderRadius:'50%'}}
                />
              </div>

              {/* Skills Badges */}
              <div className="col-md-6">
                {/* Programming Languages */}
                <div className="mb-4">
                  <h5 className="mb-3">Programming Languages</h5>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <span className="badge bg-primary w-50 py-2 fs-5">C</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-primary w-50 py-2 fs-5">C++</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-primary w-50 py-2 fs-5">JavaScript</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-primary w-80 py-2 fs-5">Java - Basic</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-primary w-80 py-2 fs-5">Python - Basic</span>
                    </div>
                  </div>
                </div>

                {/* Web Development */}
                <div className="mb-4">
                  <h5 className="mb-3">Web Development</h5>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <span className="badge bg-success w-50 py-2 fs-5">HTML5</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-success w-50 py-2 fs-5">CSS3</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-success w-50 py-2 fs-5">React JS</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-success w-50 py-2 fs-5">Node JS</span>
                    </div>
                  </div>
                </div>

                {/* Databases */}
                <div className="mb-4">
                  <h5 className="mb-3">Databases</h5>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <span className="badge bg-warning text-dark w-50 py-2 fs-5">MySQL</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-warning text-dark w-50 py-2 fs-5">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Version Control */}
                <div className="mb-4">
                  <h5 className="mb-3">Version Control</h5>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <span className="badge bg-danger w-50 py-2 fs-5">Git</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-danger w-50 py-2 fs-5">GitHub</span>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="mb-4">
                  <h5 className="mb-3">Tools</h5>
                  <div className="row">
                    <div className="col-6 mb-2">
                      <span className="badge bg-secondary w-50 py-2 fs-5">Canva</span>
                    </div>
                    <div className="col-6 mb-2">
                      <span className="badge bg-secondary w-50 py-2 fs-5">VSCode</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <hr className='mt-5'/>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;
