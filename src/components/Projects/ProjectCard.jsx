function ProjectCard({ title, description, technologies, github, live }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech} className="technology">
            {tech}
          </span>
        ))}
      </div>
      <div className="links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
