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
    height: 1200px;
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
  top: 140px;
  left: 29%;
  z-index: 1;
  opacity: 1;
  background-color: transparent;
  align-items: center;
  @media screen and (max-width: 768px) {
    right: 2%;
    top: 210px;
    width: 70%;
  }
`;

export const HomeWrapper = styled.div`
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
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
    text-align: center;
    position: 'solid';
    margin: 10px
  }
`;

export const Heading1 = styled.p`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  padding-top: 135px;
  margin-left: 6%;
  color: #fff;
  font-weight: 400;
  align-items:center;
  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin-left: 0%;
    padding-left: 0%;
    text-align: left;
  }
`;

export const Heading2 = styled.p`
  position: relative;
  font-size: 120px;
  line-height: 1.2;
  margin-left: 28%;
  font-weight: 400;
  color: #fff;
  align-items:center;
  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin-bottom: 0px;
    margin-left: 0%;
    text-align: left;
  }
`;

export const Heading3 = styled.p`
  position: relative;
  line-height: 1.2;
  font-size: 120px;
  margin-top: -20px;
  margin-left: 58%;
  font-weight: 400;
  color: #fff;
  align-items:center;
  
  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin-top: -97px;
    margin-left: 35%;
    text-align: left;
  }
`;

export const Heading4 = styled.p`
  position: relative;
  margin-left: 65%;
  font-size: 120px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  align-items:center;
  /* border-bottom: solid 1px #808080; */
  @media screen and (max-width: 768px) {
    font-size: 80px;
    margin-left: 0%;
    padding-left: 0%;
    text-align: left;
  }
`;

export const SubtitleWrapper = styled.div`
   position: 'solid';
   margin-top: -80px;
   margin-left: 6%;
   @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 300px;
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
  margin-top: -100px;
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

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: -190px;
  width: 70%;
  right: -150px;
  /* padding-left: 590px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    top: 150px;
    margin-top: 0px;
    scale: 1.5;
    
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


