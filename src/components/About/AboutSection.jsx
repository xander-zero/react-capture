import React from "react";
import home1 from "../../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>true.</Hide>
        </div>
        <p>
          Contact us for any photograghy or videograghy ideas that you have. we
          have peroffetional with amazing skills to help you achive it.{" "}
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

// styled -components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
