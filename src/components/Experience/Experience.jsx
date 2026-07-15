import experiences from "../../data/experience";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <section id="experience">
      <div className="experience-heading">
        <h2>
          My <span>Experience</span>
        </h2>
      </div>
      <div className="experience-grid">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.id}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            type={exp.type}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
