import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" href="https://www.linkedin.com/in/golam-masud/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Sumonnn">
        <FaGithub />
      </a>
      <a target="_blank" href="https://www.instagram.com/sumonn666/">
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;