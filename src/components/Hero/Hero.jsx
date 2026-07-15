import profile from "../../assets/portfolio.png";
import "./Hero.css";
import { useState, useEffect } from "react";

function Hero() {
  const roles = [
    "B.Tech Final Year Student",
    "Full Stack Developer",
    "SQL Enthusiast",
    "React Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    setDisplayText("");

    const typing = setInterval(() => {
      setDisplayText(roles[currentIndex].slice(0, i + 1));
      i++;

      if (i === roles[currentIndex].length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentIndex]);

  return (
    <section id="hero">
      <div className="hero-text">
        <h1>Arman Pandey</h1>

        <h2>
          {displayText}
          <span className="cursor">|</span>
        </h2>

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
            rel="noopener noreferrer"
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
