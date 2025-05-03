import React from 'react';
import './CodingProfiles.css';
import leetcodeImg from '../gallery/leetcode.jpg';
import codechefImg from '../gallery/codechef.jpg';

function CodingProfiles() {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'thrinathpothineni',
      profileLink: 'https://leetcode.com/u/thrinathpothineni/',
      rating: '1479',
      problemsSolved: '290+',
      img: leetcodeImg,
    },
    {
      platform: 'CodeChef',
      username: 'thrinath22',
      profileLink: 'https://www.codechef.com/users/thrinath22',
      rating: '1395',
      problemsSolved: '290+',
      img: codechefImg,
    },
  ];

  return (
    <section id="coding" className="coding-profiles-section py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Coding Profiles</h2>
        <div className="row">
          {profiles.map((profile, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={profile.img}
                  alt={profile.platform}
                  className="card-img-top profile-img"
                />
                <div className="card-body d-flex flex-column align-items-center text-center">
                  <h5 className="card-title fw-bold mb-2">{profile.platform}</h5>
                  <a
                    href={profile.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-underline mb-2"
                  >
                    @{profile.username}
                  </a>
                  <div className="d-flex justify-content-center gap-4 mt-2">
                    <p className="card-text mb-0">
                      <strong>Rating:</strong> {profile.rating}
                    </p>
                    <p className="card-text mb-0">
                      <strong>Problems:</strong> {profile.problemsSolved}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingProfiles;
