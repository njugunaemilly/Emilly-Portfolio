import React from "react";
import "./Hero.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <>
      <div className=" align-items: center">
        <h2>Hi! I'm Emilly Wanjiku👋</h2>
        <h3>I'm a Full stack Developer</h3>
        <p>
          I love exploring and creating, a lifelong learner and I believe that
          pineapples belong on pizzas 😇
        </p>
        </div>
        <div className="text-3xl flex justify-centre align-items: center gap-10 py-3">
          <a href="https://www.linkedin.com/in/emilly-wanjiku/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/njugunaemilly">
            <FaGithub />
          </a>
        </div>
      
    </>
  );
}

export default Hero;
