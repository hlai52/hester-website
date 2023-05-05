import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import "./about.css";

import { HL } from "../assets";
// import { HL } from "./index.js";
// import { HL } from "../assets/HL.png";
// import profilepic from "../assets/profilepic.png";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducton</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <div className="about__container">
          <img
            src={HL}
            // "../src/assets/HL.png"
            // {HL}
            // "../src/assets/HL.png"
            // "https://github.com/hlai52/3d_developer_portfolio/blob/main/src/assets/HL.png"

            className="profile-pic"
            alt="profile picture of a girl"
          ></img>
          I'm a software developer with experience in Javascript and frameworks
          such as React and Node.js. Let's work together to bring your ideas to
          life and make them a reality.
          <br></br>
          You'll find me outdoors wandering around the city, strolling through
          gardens & art galleries, skiing, hiking & flying my drone. On a rainy
          day, tinkering away with DIY projects and playing puzzle games.
        </div>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
