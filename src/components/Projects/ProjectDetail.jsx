import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import projects from "../../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div className="not-found">Project not found</div>;

  return (
    <section id="project-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="project-header">
        <h1>{project.title}</h1>
        {project.subtitle && <h2>{project.subtitle}</h2>}
      </div>

      <div className="project-body">
        <div className="project-description">
          <h3>About the Project</h3>
          <p>{project.fullDescription || project.description}</p>
        </div>

        {project.features && (
          <div className="project-features">
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-technologies">
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.images && (
          <div className="project-images">
            <h3>Screenshots</h3>
            <div className="images-grid">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
