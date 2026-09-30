import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 80vh;
  overflow: hidden;
  padding-bottom: 8rem;
`;

export const Heading = styled.h1`
  position: relative;
  line-height: 1.8;
  font-size: 120px;
  padding-top: 10vh;
  margin: 0 5rem;
  font-weight: 400;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    margin: 5vw;
    padding-top: 5vh;
    font-weight: 800;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  line-height: 1.2;

  @media screen and (max-width: 800px) {
    margin: 5vw;
    font-size: 16pt;
  }
`;

export const Positions = styled.section`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 6rem auto 0;
  padding: 0 5vw;

  h2 {
    margin: 0 0 3rem;
    font-family: "Krona One";
    font-size: 48px;
    font-weight: 400;
  }

  @media screen and (max-width: 768px) {
    margin-top: 4rem;

    h2 {
      font-size: 32px;
    }
  }
`;

export const Category = styled.article`
  display: grid;
  grid-template-columns: minmax(150px, 0.7fr) 1.3fr;
  gap: 2rem;
  padding: 2rem 0;
  border-top: 1px solid currentColor;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 36px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 28px;
  }
`;

export const CategoryDescription = styled.p`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  line-height: 1.5;
`;

export const PositionList = styled.ul`
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Position = styled.li`
  padding-left: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  line-height: 1.5;

  &::before {
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    margin-left: -1.5rem;
    margin-right: 0.75rem;
    background: #eb0000;
    content: "";
  }
`;

export const RedDotImg = styled.img`
  position: absolute;
  top: 25vh;
  right: -350px;
  width: 70%;
  z-index: 0;
`;
