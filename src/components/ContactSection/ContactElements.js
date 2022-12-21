import { type } from "@testing-library/user-event/dist/type";
import styled from "styled-components";

export const Container = styled.div`
  color: #ffff;
  opacity: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: fit-content;
  background-color: #040142;
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
  color: #fff;
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
  font-family: 'Montserrat', sans-serif;
  z-index: 10;
  margin: 0 5rem 0 5rem;
  max-width: 900px;
  font-size: 24px;
  color: #fff;
  align-items:center;
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
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-family: 'Montserrat', sans-serif;s
  color: #fff;
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
  font-family: 'Montserrat', sans-serif;
  @media screen and (max-width: 900px) {
    height: 8vw;
  }
`;
export const RedAccent = styled.div`
  position: relative;
  width: 0.75rem;
  height: 4rem;
  background-color: #FF0000;
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
  height: 57px;
  background-color: #EB0000;
  background: #EB0000;
  opacity: 0.9;
  color: #ffff;
  border: none;
  font-size: 25px;
  margin-bottom: 5%;
  &:hover {
    // background-color: #EB003f;
    color: #ffff;
    // box-shadow: 0 0px 4px 4px #EB003f, 0 0px 0px 0px #EB003f;
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
      box-shadow: 0 0px 4px 4px #EB003f, 0 0px 0px 0px #63d0ff;
      cursor: pointer;
      transition-duration: 0.7s;
    }
  }
`;

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : "-190px"};
  width: ${({size}) => size ? size : "70%"};
  right: ${({right}) => right ? right : "-350px"};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;
export const SectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const SubLabel = styled.label`
  position: relative;
  font-size: 60px;
  margin: 2rem 5rem;
  color: #fff;
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
  width: 70%;
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
  font-family: 'Montserrat', sans-serif;
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