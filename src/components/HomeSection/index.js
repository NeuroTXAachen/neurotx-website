import React, { useEffect, useState, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

import { 
  BciWrapper, 
  Description,
  SquaredImg,
  SquaredWrapper,
  DottedImg,
  DottedWrapper,
  BoldDescription,
  BciHeading,
  BciSectionWrapper,
  BciTextWrapper,
  DescriptionWrapper
} from "./BciSection";


import {
  HomeContainer,
  HomeWrapper,
  SubtitleWrapper,
  ForegroundWrapper,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Subtitle,
  RedDotImg,
  BodyTextWrapper,
  ForegroundHome,
  ButtonServices,
  WaveImg,
  ServiceButtonWrapper,
} from "./HomeElements";

const HomeSection = ({
  id,
  bgLine1,
  bgLine2,
  bgLine3,
  bgLine4,
  description,
  waveImage,
  smallWaveImg,
  backgroundPhilipp,
  redBgPoint,
  cpuImage,
  brainImage,
  dottedImage
}) => {


  return (
    <>
      <HomeContainer lightBg={false} id={id}>
        <RedDotImg src={redBgPoint} alt="redbgpoint"/>
        <HomeWrapper>
          <BodyTextWrapper id="de">
            <ForegroundWrapper>
              <ForegroundHome src={backgroundPhilipp} />
              <WaveImg src={waveImage} alt="waveImg"/>
            </ForegroundWrapper>
            <Heading1>{bgLine1}</Heading1>
            <Heading2>{bgLine2}</Heading2>
            <Heading3>{bgLine3}</Heading3>
            <Heading4>{bgLine4}</Heading4>
            <SubtitleWrapper>
              <Subtitle>
                {description}
              </Subtitle>
              <ServiceButtonWrapper>
                <ButtonServices>Join Us!</ButtonServices>
              </ServiceButtonWrapper>
            </SubtitleWrapper>
          </BodyTextWrapper>
        </HomeWrapper>

        <BciSectionWrapper>
          <BciTextWrapper>
            <BciHeading>We believe BCI is the Future</BciHeading>
            <DescriptionWrapper>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</Description>
            </DescriptionWrapper>
          </BciTextWrapper>
          <BciWrapper>
            <SquaredWrapper>
              <SquaredImg src={brainImage}></SquaredImg>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Description>
            </SquaredWrapper>
            <DottedWrapper>
              <DottedImg src={dottedImage}></DottedImg>
              <BoldDescription>BCI - Brain Computer interface</BoldDescription>
            </DottedWrapper>
            <SquaredWrapper>
              <SquaredImg src={cpuImage}></SquaredImg>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Description>
            </SquaredWrapper>
          </BciWrapper>
          
          <BciTextWrapper>
            <DescriptionWrapper>
              <Description style={{textAlign: "center"}}>Wanna learn more? Check out our Free Webinars!</Description>
            </DescriptionWrapper>
          </BciTextWrapper>
            
        </BciSectionWrapper>
      </HomeContainer>
      
    </>
  );
};

export default HomeSection;