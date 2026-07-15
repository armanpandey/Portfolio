import profile from "../../assets/portfolio.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <h1>Arman Pandey</h1>
        <h2>Full Stack Developer | SQL | React</h2>
        <p>
          Final-year Electronics & Computer Science student at KIIT University,
          passionate about building scalable full-stack applications and solving
          real-world problems through technology.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary me-3">
            View My Work
          </a>
          <a
            href="/resume.pdf"
            className="btn btn-outline-light"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Arman Pandey" />
      </div>
    </section>
  );
}

export default Hero;
