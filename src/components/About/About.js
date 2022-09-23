import React from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";

const About = ({ imageSrc, title, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="about__image" />
          <div className="about__content">
            <h1 className="about__title">{title}</h1>
            <p>Subtitutlo</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="about__content">
            <h1 className="about__title">{title}</h1>
            <p>Subtitutlo</p>
          </div>
          <img src={imageSrc} alt="Travel" className="about__image" />
        </>
      );
    }
  };

  return (
    <div id="about" className={inView ? "about about--zoom" : "about"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default About;
