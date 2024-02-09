import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a target="_blank" href="https://www.linkedin.com/in/golam-masud-409459239/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/Sumonnn">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;