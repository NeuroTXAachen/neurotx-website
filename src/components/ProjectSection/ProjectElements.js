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
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "-190px")};
  width: ${({ size }) => (size ? size : "70%")};
  right: ${({ right }) => (right ? right : "-150px")};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
    right: 0;
  }
`;

export const ProjectItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 5rem auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  }
`;
export const ProjectText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
  margin-top: 10rem;
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
    margin-top: 2rem;
  }
`;

export const Image = styled.img`
  width: 25rem;
  order: 1;
  @media screen and (max-width: 768px) {
    width: 90%;
    order: 2;
  }
`;

export const Name = styled.p`
  position: relative;
  font-size: 50px;

  font-weight: 400;
  margin-top: 1rem;
  border-left: 8px solid #ff0000;
  padding-left: 1rem;
  order: 2;
  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    border: none;
    padding-left: 0rem;
    order: 1;
    font-size: 40px;
  }
`;

export const Description = styled.p`
  position: relative;
  font-size: 24px;

  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  margin-top: 1rem;
  order: 3;
  @media screen and (max-width: 768px) {
    order: 3;
  }
`;
export const ImageWrapper = styled.div`
  @media screen and (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const RedAccent = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: relative;
    display: block;
    width: 1rem;
    height: 5rem;
    background-color: #ff0000;
  }
`;
