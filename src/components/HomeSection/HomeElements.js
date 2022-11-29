import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const HomeContainer = styled.div`
  color: #ffff;
  opacity: 100%;
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
`
export const ForegroundHome = styled.img`
  position: relative;
  width: 47%;
  left: 26%;
  z-index: 1;
  opacity: 1;
  background-color: transparent;
  align-items: center;
  @media screen and (min-width: 800px) and (max-width: 1448px) {
    margin-left: 40%;
    top: 140px;
    width: 60%;
  }
  @media screen and (max-width: 799px) {
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
  height: 1800px;
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
  font-size: 130px;
  padding-top: 135px;
  margin-left: 6%;
  color: #fff;
  font-weight: 400;
  align-items:center;
  @media screen and (min-width: 800px) and (max-width: 1248px) {
    font-size: 70px;
  }
  @media screen and (max-width: 799px) {
    font-size: 50px;
  }
`;

export const Heading2 = styled.p`
  position: relative;
  font-size: 130px;
  line-height: 1.2;
  margin-top: 24px;
  margin-left: 27%;
  font-weight: 400;
  color: #fff;
  align-items:center;
  @media screen and (min-width: 800px) and (max-width: 1248px) {
    font-size: 70px;
    margin-left: 6%;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 799px) {
    font-size: 50px;
  }
`;

export const Heading3 = styled.p`
  position: relative;
  line-height: 1.2;
  font-size: 130px;
  margin-top: -20px;
  margin-left: 60%;
  font-weight: 400;
  color: #fff;
  align-items:center;
  @media screen and (min-width: 800px) and (max-width: 1248px) {
    font-size: 70px;
    margin-left: 28%;
    margin-top: -85px;
  }
  @media screen and (max-width: 799px) {
    font-size: 50px;
  }
`;

export const Heading4 = styled.p`
  position: relative;
  margin-left: 70%;
  margin-top: 24px;
  font-size: 130px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  align-items:center;
  /* border-bottom: solid 1px #808080; */
  @media screen and (min-width: 800px) and (max-width: 1248px) {
    font-size: 70px;
    margin-left: 6%;
  }
  @media screen and (max-width: 799px) {
    font-size: 50px;
  }
`;

export const SubtitleWrapper = styled.div`
   position: 'solid';
   margin-top: -100px;
   margin-left: 6%;
   `
export const Subtitle = styled.p`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.2;
  z-index: 10;
  max-width: 544px;
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
  top: -120;
  /* padding-left: 810px; */
  z-index: 0;
  opacity: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RedDotImg = styled.img`
  position: absolute;
  margin-top: -190px;
  width: 1210px;
  padding-left: 590px;
  z-index: 0;
  opacity: 0.9;
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
  border: 1px solid #ffff;
  border-radius: 4px;
  background: #EB0000;
  opacity: 0.9;
  color: #ffff;
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
      box-shadow: 0 0px 4px 4px #63d0ff, 0 0px 0px 0px #63d0ff;
      cursor: pointer;
      transition-duration: 0.7s;
    }
  }
`;


