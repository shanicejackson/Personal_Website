import React from 'react';
import '../styling/portfolio.css';
import { projects } from '../data/projects';

const Portfolio = () => {
  if (!projects || projects.length === 0) {
    return <div className="portfolio-page">No projects to display.</div>;
  }

  return (
    <div className="portfolio-page">
      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <div className="project-details">
                {project.image && (
                  <div className="project-image-corner">
                    <div className="image-wrapper">
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <img src={project.image} alt={project.title} />
                          <div className="image-overlay">
                            <span className="view-text">Click to View</span>
                          </div>
                        </a>
                      ) : (
                        <div>
                          <img src={project.image} alt={project.title} />
                          <div className="image-overlay">
                            <span className="view-text">Click to View</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="project-text">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
