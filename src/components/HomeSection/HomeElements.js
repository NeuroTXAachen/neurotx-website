import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const HomeContainer = styled.div`
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
  width: 45%;
  top: 100px;
  left: 29%;
  z-index: 1;
  opacity: 1;
  background-color: transparent;
  align-items: center;
  @media screen and (max-width: 768px) {
    left: 23%;
    top: 210px;
    width: 75%;
  }
`;

export const HomeWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  height: 1500px;
  @media only screen and (max-width: 600px) {
    height: 900px;
  }
  `;
export const BodyTextWrapper = styled.div`
  position: 'solid';
  width: 100%;
  height: 1200px;
  padding-bottom: 10px;
  @media screen and (min-width: 1449px) {
    font: 10px;
  }
  @media only screen and (max-width: 600px) {
    position: 'solid';
    display: flex;
    flex-direction: column;
    margin: 10px
  }
`;

export const Heading1 = styled.p`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  padding-top: 14%;
  margin-left: 8%;
  color: #fff;
  font-weight: 400;
  @media screen and (min-width: 1200px) and (max-width: 1568px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    margin-left: 0%;
    padding-top: 28%;
    padding-left: 0%;
  }
`;

export const Heading2 = styled.p`
  position: relative;
  font-size: 120px;
  line-height: 1.2;
  margin-left: 30%;
  font-weight: 400;
  color: #fff;
  @media screen and (min-width: 1200px) and (max-width: 1568px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    left: 0;
    margin-left: 0%;
    padding-left: 0%;
  }
`;

export const Heading3 = styled.p`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  margin-top: 10px;
  margin-left: 63%;
  font-weight: 400;
  color: #fff;
  @media screen and (min-width: 1200px) and (max-width: 1568px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    left: 0;
    margin-top: 0px;
    margin-left: 0%;
    padding-left: 0%;
  }
`;

export const Heading4 = styled.p`
  position: relative;
  margin-left: 71%;
  font-size: 120px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  @media screen and (min-width: 1200px) and (max-width: 1568px) {
    font-size: 90px;
  }
  /* border-bottom: solid 1px #808080; */
  @media screen and (max-width: 768px) {
    font-size: 50px;
    left: 0;
    margin-left: 0%;
    padding-left: 0%;
  }
`;

export const SubtitleWrapper = styled.div`
   position: 'solid';
   margin-top: -80px;
   margin-left: 6%;
   @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 200px;
    text-align: left;
    margin-left: 0%;
    padding: 0% 5% 0% 15%;
  }
   `
export const Subtitle = styled.p`
  position: relative;
  line-height: 1.2;
  z-index: 10;
  max-width: 544px;
  font: "Montserrat";
  font-size: 24px;
  color: #fff;
  align-items:center;
  @media screen and (max-width: 800px) {
    font-size: 16pt;
  }
`;

export const WaveImg = styled.img`
  position: absolute;
  width: 100%;
  margin-top: ${({marginTop}) => marginTop ? marginTop : "-100px"};
  right: ${({right}) => right ? right : "none"};
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
  transform: ${({ rotation }) => rotation ? "rotate(" + rotation + ")" : "none"};
  top: ${({ top }) => top ? top : "none"};
  top: ${({ left }) => left ? left : "none"};
`;

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: ${({ marginTop }) => marginTop ? marginTop : "-190px"};
  width: ${({size}) => size ? size : "70%"};
  right: ${({right}) => right ? right : "-150px"};
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
    
  }
`;

export const ServiceButtonWrapper = styled(LinkS)``;
  
export const ButtonServices = styled.button`
  width: 259px;
  margin-top: 20px;
  height: 57px;
  background-color: #EB0000;
  background: #EB0000;
  opacity: 0.9;
  color: #ffff;
  border: none;
  font-size: 25px;
  margin-bottom: 5%;
  &:hover {
    background-color: #EB003f;
    color: #ffff;
    box-shadow: 0 0px 4px 4px #EB003f, 0 0px 0px 0px #EB003f;
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


