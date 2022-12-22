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

export const Heading = styled.p`
  position: relative;
  line-height: 1.8;
  font-size: 120px;
  padding-top: 10vh;
  margin: 0 5rem 0 5rem;

  font-weight: 400;
  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: 5vw;
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
  max-width: 1050px;
`;
export const Video = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 auto 5rem auto;
  width: 90%;
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
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    padding-left: 5vh;
  }
`;

export const ButtonServices = styled.button`
  width: 259px;
  height: 57px;
  background-color: #eb0000;
  background: #eb0000;
  opacity: 0.9;

  border: none;
  margin: 2rem 0 2rem 0;
  font-size: 25px;
  &:hover {
    background-color: #eb003f;

    box-shadow: 0 0px 4px 4px #eb003f, 0 0px 0px 0px #eb003f;
    cursor: pointer;
    opacity: 1;
    transition-duration: 0.7s;
  }
`;

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "-190px")};
  width: ${({ size }) => (size ? size : "70%")};
  right: ${({ right }) => (right ? right : "-150px")};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
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
