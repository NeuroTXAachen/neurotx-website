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

export const Socials = styled.div`
  width: 100%;
  height: 50px;
  align-self: flex-end;
  justify-self: flex-end;
  padding: 1rem 0rem;
`;

export const ImageNameDiv = styled.div`
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: row;
    height: auto;
    flex: 1;
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

export const MemberWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 1em;
  margin: 5vw auto;
  max-width: 1200px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
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
export const AlumniWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-gap: 1em;
  margin: 5vw auto;
  max-width: 1200px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
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

export const MemberItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "25%")};
  margin: 0 2.5rem;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 90%;
    margin: 5vw auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 54%;
    height: auto;
    display: inline;
  }
`;

export const Name = styled.p`
  position: relative;
  font-size: 38px;
  display: inline;
  font-weight: 800;
  margin-top: 1rem;
  max-width: 95%;
  display: inline-block;
  // border-left: 8px solid #ff0000;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    border-left: 0px solid #ff0000;
    max-width: 50%;
    min-height: 30px;
    font-size: 20px;
    line-height: 30px;
    display: inline-block;
  }
`;

export const RedAccent = styled.div`
  position: absolute;
  width: 8px;
  display: inline-block;
  height: 50px;
  background-color: #ff0000;
  margin-top: 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Description = styled.p`
  position: relative;
  font-size: 16px;

  font-weight: 400;
  margin-top: 1rem;
`;

export const Title = styled.p`
  position: relative;
  font-size: 16px;
  font-weight: 1000;
  font-style: italic;
  margin-top: 1rem;
`;

export const Social = styled.a`
  position: relative;
  font-size: 40px;
  color: white;
  font-weight: 400;
  text-decoration: none;
`;
