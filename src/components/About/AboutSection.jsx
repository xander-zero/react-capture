import React from "react";
import home1 from "../../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">true.</div>
        </div>
        <p>
          Contact us for any photograghy or videograghy ideas that you have. we
          have peroffetional with amazing skills to help you achive it.{" "}
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};
export default AboutSection;
