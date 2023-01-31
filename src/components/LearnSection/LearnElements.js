import styled from "styled-components";

export const Container = styled.div`
  opacity: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: fit-content;
  z-index: 0;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;

export const Heading = styled.h1`
  position: relative;
  line-height: 1.8;
  font-size: 120px;
  padding-top: 10vh;
  margin: 0 5rem 0 5rem;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: 5vw;
    font-weight: 800;
    padding-top: 5vh;
    padding-left: 0%;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  line-height: 1.2;
  font-family: "Montserrat", sans-serif;
  z-index: 10;
  margin: 0 5rem 0 5rem;
  max-width: 900px;
  font-size: 24px;

  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 16pt;
    margin: 5vw;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  z-index: 10;
  max-width: 1450px;
`;
export const Video = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto 5rem auto;
  width: 90%;
  z-index: 10;
  height: 50vw;
`;
export const RedAccent = styled.div`
  position: relative;
  width: 1rem;
  height: 5rem;
  background-color: #ff0000;
  margin: 0 2rem 0 5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Label = styled.label`
  position: relative;
  font-size: 50px;
  margin: 2rem 5vw;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    padding-left: 5vw;
  }
`;

export const ButtonServices = styled.button`
  width: 259px;
  margin-top: 20px;
  height: 57px;
  background: #eb0000;
  opacity: 0.9;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-style: italic !important;
  font-weight: 1000;
  border: none;
  font-size: 25px;
  margin-bottom: 5%;
  &:hover {
    cursor: pointer;
    opacity: 1;
    transition-duration: 0.7s;
  }
  @media only screen and (max-width: 600px) {
    width: 220px;
    height: 55px;
    &:hover {
      width: 220px;
      height: 55px;
      color: white;
      cursor: pointer;
      transition-duration: 0.7s;
    }
  }
`;


export const RedDotImg = styled.img`
  position: absolute;
  width: ${({ size }) => (size ? size : "70%")};
  right: ${({ right }) => (right ? right : "-350px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "50px")};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  
`;

export const RedDotImg2 = styled.img`
  position: absolute;
  width: ${({ size }) => (size ? size : "70%")};
  right: ${({ right }) => (right ? right : "-350px")};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "750px")};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
`;

export const WaveImg1 = styled.img`
  position: absolute;
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "-100px")};
  right: ${({ right }) => (right ? right : "none")};
  /* padding-left: 810px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    top: 200px;
    -webkit-transform: scaleX(-1.5);
    transform: scaleX(-1.5);
    left: -300px;
  }
`;
export const WaveImg2 = styled.img`
  position: absolute;
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "-100px")};
  right: ${({ right }) => (right ? right : "none")};
  /* padding-left: 810px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    top: 200px;
    -webkit-transform: scaleX(-1.5);
    transform: scaleX(-1.5);
    right: -300px;
  }
`;

export const Description = styled.p`
  font-family: Montserrat;
  text-align: center;
  width: 100%;
  font-size: 24px;
  align-self: center;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0em;
  @media screen and (max-width: 789px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  @media screen and (max-width: 789px) {
    width: 90%;
  }
`;
