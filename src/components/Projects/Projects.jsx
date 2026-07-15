import projects from "../../data/projects";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-heading">
        <h2>
          My <span>Projects</span>
        </h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
