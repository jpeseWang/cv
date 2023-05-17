import React from "react";
import "./About.scss";

import { motion } from "framer-motion";
import { bios } from "../../../Data";
import portfolio from "../../../assets/portfolio.jpg";
import CV from "../../../assets/CV.pdf"

const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img src={portfolio} alt="img-portfolio" />
        </div>
        <div className="about_right">
          <p>
          Front-End developer who recently completed a front-end academy. Successfully completed academy with 99% of the maximum points. Passionate about coding and designing beautiful and functional websites. In  free time, I enjoy  exploring new technologies and learning new skills to stay up-to-date with the latest industry trends.
          </p>
          {bios.map((bio) => (
            <div className="bio" key={bio.id}>
              <span className="biokey">
                {bio.icon}
                {bio.key}
              </span>
              <span className="bioValue">{bio.value}</span>
            </div>
          ))}
          <motion.a 
          href={CV} 
          download="CV"
          target='_blank'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
