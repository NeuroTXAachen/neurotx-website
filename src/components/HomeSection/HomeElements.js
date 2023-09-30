import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const HomeContainer = styled.div`
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

export const ForegroundWrapper = styled.div`
  position: absolute;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  padding-bottom: 590px;
  height: fit-content;
`;
export const ForegroundHome = styled.img`
  position: relative;
  width: 48%;
  top: 100px;
  z-index: 1;
  max-width: 1000px;
  opacity: 1;
  background-color: transparent;
  margin: auto;
  @media screen and (min-width: 769px) and (max-width: 1513px) {
    left: 20%;
    top: 170px;
    width: 56%;
  }
  @media screen and (max-width: 768px) {
    left: 12%;
    top: 150px;
    width: 75%;
  }
`;

export const HomeWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  height: 1200px;
  @media only screen and (max-width: 600px) {
    height: 900px;
  }
`;
export const BodyTextWrapper = styled.div`
  position: "solid";
  width: 100%;
  height: 1200px;
  padding-bottom: 10px;
  @media screen and (min-width: 1449px) {
    font: 10px;
  }
  @media only screen and (max-width: 600px) {
    position: "solid";
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`;

export const HeadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 769px) and (max-width: 1513px) {
    display: grid;
    margin-left: 10%;
    justify-content: left;
  }
  @media screen and (max-width: 768px) {
    justify-content: left;
    display: grid;
    margin-left: 4%;
  }
`;
export const Heading1 = styled.h1`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  margin-top: 310px;
  margin-right: 48%;

  font-weight: 400;
  @media screen and (min-width: 769px) and (max-width: 1513px) {
    font-size: 90px;
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-top: 100px;
    margin-right: 0px;
  }
`;

export const Heading2 = styled.h1`
  position: relative;
  font-size: 120px;
  line-height: 1.2;
  margin-right: 30%;
  font-weight: 400;

  @media screen and (min-width: 769px) and (max-width: 1513px) {
    font-size: 90px;
    margin-right: 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-right: 0px;
  }
`;

export const Heading3 = styled.h1`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  margin-top: 20px;
  margin-left: 40%;
  font-weight: 400;

  @media screen and (min-width: 769px) and (max-width: 1513px) {
    font-size: 90px;
    margin-left: 0px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 0px;
    margin-top: 0%;
  }
`;

export const Heading4 = styled.h1`
  position: relative;
  margin-left: 65%;
  font-size: 120px;
  line-height: 1.2;
  font-weight: 400;

  @media screen and (min-width: 769px) and (max-width: 1513px) {
    font-size: 90px;
    margin-left: 0px;
  }
  /* border-bottom: solid 1px #808080; */
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 0px;
  }
`;

export const SubtitleWrapper = styled.div`
  position: "solid";
  margin-top: -80px;
  margin-left: 6%;
  @media screen and (min-width: 769px) and (max-width: 1513px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 200px;
    text-align: left;
    margin-left: 0%;
    padding: 0% 5% 0% 5%;
  }
`;
// Used more than once
export const Subtitle = styled.p`
  position: relative;
  line-height: 165%;
  z-index: 10;
  max-width: 544px;
  font: "Montserrat";
  font-size: 24px;

  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 16pt;
    max-width: 80%;
    line-height: 170%;
    display: inline-block;
  }
`;

export const WaveImg = styled.img`
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

export const AdaptiveDiv = styled.div`
  transform: ${({ rotation }) =>
    rotation ? "rotate(" + rotation + ")" : "none"};
  top: ${({ top }) => (top ? top : "none")};
  top: ${({ left }) => (left ? left : "none")};
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
  }
`;

export const ServiceButtonWrapper = styled(LinkS)``;
// Used more than once
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
