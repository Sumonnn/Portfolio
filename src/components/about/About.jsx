import React from "react";
import "./about.css";
import profile_picture from "../../assets/profile_picture.png";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Golam image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                 B.tech Computer Science Engineering
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                10+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>

          <p>
          Hi👋, My name is <span>Golam Masud</span> and I am from Kaliachak, Malda, West Bengal (India).
                Completed my graduation in <span>Bachelor of Technology(CSE)</span>
                from Rajiv Gandhi Proudyogiki Vishwavidyalaya,
                Bhopal (MP) in 2023. 
          </p>

          <p>
          Then I joined Sheryians Coding School, which offers a 40-week
                full-time course on the <span>Full Stack Web Development</span>. At Sheryians Coding School, I
                get hands-on experience in learning
                frontend and backend technologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;