import React, { useEffect, useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaLinkedin
} from 'react-icons/fa';
import { SiMysql, SiLeetcode, SiSpringboot } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { CiMail } from "react-icons/ci";

import './Home.css';

const roles = ['Web Developer', 'Full Stack Developer', 'AI Workflow Designer '];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <span style={{ color: '#f4d03f' }}>{roles[index]}</span>;
}

function Home() {
  const projects = [
    {
      title: "Food Ordering Website",
      description: "A responsive food ordering website built with React.",
      link: "https://sainarendar23.github.io/food-ordering-website-frontend/"
    },
    {
      title: "Stock Price Prediction",
      description: "An LSTM-based web app for forecasting stock prices.",
      link: "https://github.com/yourusername/stock-price-predictor"
    },
    {
      title: "Hostel Management System",
      description: "A backend system built using Spring Boot to manage hostel complaints and student records.",
      link: "https://github.com/yourusername/hostel-management"
    }
  ];

  return (
    <div>
      <header className="navbar">
        <div className="logo"></div>
        <nav>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/sai_narendar/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero" id='hero'>
        <div className="hero-content">
          <div className="text-content">
            <h2>Hello, it's Me </h2>
            <h1>Sai Narendar</h1>
            <h2>I'm <span style={{ color: 'white' }}>A</span> <RotatingText /></h2>

            <p className="description">
              Hi, I’m a passionate web developer with a knack for crafting responsive, user-friendly websites.
              I specialize in modern web technologies to bring innovative designs to life.
              Alongside web development, I have a strong interest in problem-solving, regularly honing my skills through coding challenges and algorithmic thinking.
              With a focus on both functionality and aesthetics, I aim to create seamless digital experiences.
            </p>

            <a
              href="https://drive.google.com/file/d/1sFzB33VXOzZI-NblKsEl9gVPJ4uYFcO2/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}>
              <button className="cta-button">View My Resume</button>
            </a>
          </div>

          <div className="image-container">
            <img src="https://webstockreview.net/images/clipart-fruit-superhero-5.png" alt="Web Designer" className="profile-image" />
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <p>Here are a few projects I've worked on recently:</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
              🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="skills-heading">Skill Set</h2>
        <p className="skills-description">
          I am proficient in various web technologies and frameworks. Here are the skills I have acquired:
        </p>
        <div className="skills-grid">
          {[
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'Springboot', icon: <SiSpringboot/> },
            { name: 'CSS', icon: <FaCss3Alt /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'SQL', icon: <SiMysql /> },
            { name: 'React JS', icon: <FaReact /> },
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'Java', icon: <DiJava /> },
          ].map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via the platforms below:</p>
        <div className="contact-links">
          <a href="mailto:cseskct210sainarendar@gmail.com" target="_blank" rel="noopener noreferrer">
            <CiMail /> Email
          </a>
          <a href="https://www.linkedin.com/in/s-sainarendar-504351254/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/sainarendar23" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://leetcode.com/u/sai_narendar/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode /> LeetCode
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
