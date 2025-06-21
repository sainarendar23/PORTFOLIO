// Contact.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';  // Importing icons

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out via any of the platforms below:</p>
      <div className="contact-links">
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
          Email
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon"/>
          LinkedIn
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer">
          <FaCode className="icon" />
        LeetCode
        </a>
      </div>
    </div>
  );
}

export default Contact;
