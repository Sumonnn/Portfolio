import React from "react";
import "./header.css";
import CTA from "./CTA";
import header_picture from "../../assets/header-picture2.png";
import HeaderSocials from "./HeaderSocials";
import { TypeAnimation } from "react-type-animation";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Golam Masud</h1>

        <h5 className="text-light">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",1000,
                "Mern Stack Developer",1000,
            ]}
              repeat={Infinity}
              cursor={true}
              style={{
                  whiteSpace: "pre-line",
                  display: "block",
              }}
            />
        </h5>

        <CTA />

        <HeaderSocials />

        <div className="sumon">
          <img src={header_picture} alt="Golam Masud" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        
      </div>
    </header>
  );
};

export default header;