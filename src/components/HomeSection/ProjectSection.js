import styled from "styled-components";

export const ProjectSectionWrapper = styled.div`
  margin-bottom: 180px;
  z-index: 1;
`;
export const SectionHeading = styled.h1`
  font-family: "Krona One", sans-serif;
  margin: 5rem;
  font-size: 70px;
  font-weight: 400;
  @media screen and (max-width: 789px) {
    font-weight: 400;
    font-size: 32px;
    margin: 20px;
    line-height: 40px;
  }
`;
export const ProjectImg = styled.img`
  width: ${({ width }) => (width ? width : "45%")};
  margin-left: 2%;
  margin-right: 2%;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "none")};
  z-index: 2;
  @media screen and (max-width: 769px) {
    width: 90%;
    margin: auto;
  }
`;

export const VidFrame = styled.div`
  display: flex;
  /* position: fixed; */
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 40%;
  min-width: 40%;
  overflow: hidden;
  height: 702px;
  z-index: 2;
  max-height: 702px;
  @media screen and (max-width: 1447px) and (min-width: 790px) {
    height: 600px;
  }
  @media screen and (max-width: 1222px) and (min-width: 720px) {
    margin-top: 40px;
    width: 80%;
    max-width: 100%;
    height: 610px;
  }
  @media screen and (max-width: 719px) {
    width: 90%;
    max-width: 90%;
    height: 500px;
    margin: auto;
    margin-top: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
    max-width: 90%;
    height: 400px;
    margin: auto;
    margin-top: 20px;
  }
`;

export const SliderContainer = styled.div`
  margin-bottom: 180px;
`;

export const SliderDescription = styled.p`
  margin-left: 3rem; 
  width: 40%;
  text-align: left;
  @media screen and (max-width: 769px) {
    margin-top: 30px;
    width: 80%;
  }
`;

export const SliderWrapper = styled.div`
  justify-self: center; 
  align-self: center; 
  margin: auto; 
  width: 80%; 
  display: flex;
  margin-bottom: 2rem;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`; 

export const RedAccent = styled.div`
  width: 10px;
  height: 60px;
  background-color: #ff0000;
  margin: ${({ margin }) => (margin ? margin : "0 2rem 0 12rem")};
  @media screen and (max-width: 1222px) {
    display: none;
  }
`;
export const Projects = styled.div`
  display: flex;
  @media screen and (max-width: 1222px) {
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
`;
export const ProjectDescriptionSection = styled.div`
  width: ${({ width }) => (width ? width : "20rem")};
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  margin-left: 2rem;
  z-index: 1;
  @media screen and (max-width: 1222px) and (min-width: 790px) {
    width: 60%;
  }
  @media screen and (max-width: 789px) {
    margin-left: 0rem;
    width: 80%;
    margin: auto;
  }
`;
export const ProjectDescription = styled.p`
  margin-top: 4.5rem;
  font-family: Montserrat;
  font-size: 24px;
  @media screen and (max-width: 789px) {
    font-family: "Montserrat";
    margin-top: 1.5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 170%;
  }
`;

export const EventWrapper = styled.div`
  width: ${({ width }) => (width ? width : "50%")};
  z-index: 2;
  @media screen and (max-width: 769px) {
    width: 90%;
    margin-left: 20px;
    margin-right: auto;
    display: flex;
    justify-content: left;
    align-items: left;
  }
`;
export const EventWrapper2 = styled.div`
  width: ${({ width }) => (width ? width : "50%")};
  z-index: 2;
  @media screen and (max-width: 769px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

export const MemberTape = styled.div`
  width: auto;
`;
export const MiniImage = styled.div`
  width: auto;
`;
