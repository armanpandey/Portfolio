import "./About.css";
import StatCard from "./StatCard";

function About() {
  return (
    <section id="about">
      {/* Section heading */}
      <div className="about-heading">
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      {/* Main content */}
      <div className="about-content">
        {/* Left side - paragraphs */}
        <div className="about-text">
          <p>
            I'm Arman Pandey, a final-year B.Tech student in Electronics and
            Computer Science at KIIT University, Bhubaneswar. I've built
            real-world experience through two internships — as a Junior SQL
            Developer at Colorgenics Marketing Pvt. Ltd., where I worked on the
            Adani Project Progress Monitoring System, and currently as an IT
            Intern at Vritto Technologies, where I develop frontend applications
            using React.js and modern web technologies.
          </p>
          <p>
            I'm passionate about building practical solutions to real-world
            problems. Whether it's designing clean UI, writing efficient SQL
            queries, or exploring full-stack development, I enjoy the process of
            turning ideas into working products.
          </p>
          <p>
            I'm actively seeking full-time Software Development or Full-Stack
            Developer roles where I can contribute meaningfully, collaborate
            with experienced teams, and continue growing as an engineer.
          </p>
        </div>

        <div className="about-stats">
          <StatCard icon="🎓" label="KIIT University" />
          <StatCard icon="💼" label="2 Internships" />
          <StatCard icon="🚀" label="3 Projects" />
          <StatCard icon="📍" label="Available for opportunities" />
        </div>
      </div>
    </section>
  );
}

export default About;
