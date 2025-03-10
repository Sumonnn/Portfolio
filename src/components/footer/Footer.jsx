import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        Golam Masud
      </a>
      <ul className="permalinks">
        <li>
          {/* eslint-disable-next-line */}
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/golam-masud/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Sumonnn">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.instagram.com/sumonn666/">
          <AiFillInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Golam Masud. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;