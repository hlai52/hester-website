import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import "./about.css";

import { HL } from "../assets";

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
        {/* <br></br> */}
        <p className={styles.sectionSubText} style={{ marginTop: "2rem" }}>
          Introduction{" "}
        </p>
        <h2 className={styles.sectionHeadText}>
          {" "}
          An open mind actively navigating life.{" "}
        </h2>
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
          <br></br>
          You'll find me wandering around the streets of Vancouver, discovering
          and exploring new parts of the city. In nature, you will find me
          hiking, flying my drone and reading a book. On a rainy day, tinkering
          away with DIY projects, designing arts and crafts and solving the
          latest puzzle of life.
          <br></br>
          I'm always interested in exploring different opportunites, having new
          conversations or hearing a good book recommendation.
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
