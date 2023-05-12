import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import "./tech.css";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div>
        <p className={`${styles.sectionSubText} stackheader`}>Stack | Skills</p>
      </div>
      {/* <p>Stack & Skills </p> */}

      {technologies.map((technology) => (
        <div className="w-28 h-28 tech ballcanvasmobile" key={technology.name}>
          <BallCanvas icon={technology.icon} />

          <p className="tech-name">{technology.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
