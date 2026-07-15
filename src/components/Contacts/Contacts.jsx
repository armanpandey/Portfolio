import { useState } from "react";
import "./Contacts.css";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <h2>Get In Touch</h2>

        <p>
          Feel free to reach out for collaborations, internships, or just to say
          hello!
        </p>

        <a href="mailto:armanpandey18@gmail.com">📧 armanpandey18@gmail.com</a>

        <a
          href="https://github.com/armanpandey"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/arman-pandey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
