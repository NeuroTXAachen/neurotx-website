import { type } from "@testing-library/user-event/dist/type";
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

export const FormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  max-width: 1050px;
`;

export const FormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2vh 1vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 2vh 5vw;
  }
`;

export const FormField = styled.div`
  position: relative;
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const NameFormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 49%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 2vh 0;
  }
`;
export const Label = styled.label`
  position: relative;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 1vh;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  position: relative;
  height: 4vw;
  font-size: 24px;
  padding: 0 0.4rem;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 900px) {
    height: 8vw;
  }
`;

export const RadioInput = styled.input`
  position: relative;
  margin: 20px;
  height: 25px;
  width: 25px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 165%;
  @media screen and (max-width: 900px) {
    height: 8vw;
  }
`;

export const RedAccent = styled.div`
  position: relative;
  width: 0.75rem;
  height: 4rem;
  background-color: #ff0000;
  margin: 0 2rem 0 0rem;
  @media screen and (max-width: 768px) {
    margin: 0 2vh 0 0;
  }
`;

export const Message = styled.textarea`
  position: relative;
  height: 300px;
  font-size: 24px;
  text-align: left;
  padding: 0.4rem;
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

export const SectionWrapper = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const SubLabel = styled.h1`
  font-family: "Krona One";
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 100px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin: 1vw 5vw;
    padding-top: 5vh;
    padding-left: 0%;
  }
`;

export const Map = styled.iframe`
  position: relative;
  margin: auto;
  padding: 2vh 1vh;
  border: 0;
  width: 100%;
  height: 500px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const SubSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 2rem 0 10rem;
  @media screen and (max-width: 768px) {
    margin: 0 2vh 0 5vw;
  }
`;
export const DonateSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 5rem auto;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    margin: 7vh 5vw;
    flex-direction: column-reverse;
  }
`;

export const SubSectionText = styled.p`
  position: relative;
  font-size: 24px;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
  max-width: 700px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    max-width: 400px;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 150px;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
