import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contacts.css";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Error clear karo jab user type kare
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .send(
        "service_h5dh0lq",
        "template_qzjzdfl",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "xOsEwC6voBxuyUVGT",
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setErrors({});
      })
      .catch(() => {
        setStatus("error");
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
        {status === "success" && (
          <div className="success-msg">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="error-msg">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="field-error">{errors.message}</span>
          )}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
