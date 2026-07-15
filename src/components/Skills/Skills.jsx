import skills from "../../data/skills";
import "./skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-heading">
        <h2>
          My <span>Skills</span>
        </h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> 
    </section>
  );
}

export default Skills;
