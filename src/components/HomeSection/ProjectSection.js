import styled from "styled-components";

export const ProjectSectionWrapper = styled.div`
    z-index: 1;
    `;
export const SectionHeading = styled.h1`
    font-family: "Krona One", sans-serif;
    margin: 5rem;
    font-size: 70px;

    `;
export const ProjectImg = styled.img`
    width: ${({width}) => width ? width : "45%"};
    margin-left: 2%;
    margin-right: 2%;
    margin-top: ${({marginTop}) => marginTop ? marginTop : "none"};
    z-index: 2;
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
`;

export const RedAccent = styled.div`
    width: 10px;
    height: 60px;
    background-color: #FF0000;
    margin: 0 2rem 0 12rem;
`;
export const Projects = styled.div`
    display: flex;
    
`;
export const ProjectDescriptionSection = styled.div`
    width: ${( {width} ) => width ? width : "20rem"};
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;
    margin-left: 2rem;
    z-index: 1;
`;
export const ProjectDescription = styled.p`
    margin-top: 4.5rem;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
`;