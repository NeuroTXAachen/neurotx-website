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
  ProjectSectionWrapper, 
  SectionHeading,
  RedAccent,
  Projects,
  ProjectDescriptionSection,
  VidFrame,
  ProjectDescription,
  ProjectImg,
} from "./ProjectSection";


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
  AdaptiveDiv,
} from "./HomeElements";
import VideoComponent from "../VideoComponent/VideoComponent";
import { PartnerImg, SplitDiv, SplitSectionImgWrapper, SplitSectionTextWrapper, SplitSectionWrapper } from "./FinalSection";

const HomeSection = ({
  id,
  bgLine1,
  bgLine2,
  bgLine3,
  bgLine4,
  description,
  waveImage,
  smallWaveImg,
  coverphoto,
  backgroundPhilipp,
  redBgPoint,
  cpuImage,
  brainImage,
  dottedImage,
  projectdescription1,
  projectdescription2,
  projectdescription3,
  vidJSOptions,
  partnersImgs,
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

        <RedDotImg src={redBgPoint} alt="redbgpoint"/>
        <ProjectSectionWrapper>
          <SectionHeading>projects</SectionHeading>
          <Projects>
          <RedAccent></RedAccent>
          <VidFrame>
            <VideoComponent options={vidJSOptions} />
          </VidFrame>
          <ProjectDescriptionSection>

          <ProjectDescription>{projectdescription1}</ProjectDescription>
          <ProjectDescription>{projectdescription2}</ProjectDescription>
          <ProjectDescription>{projectdescription3}</ProjectDescription>

          </ProjectDescriptionSection>
          </Projects>
          <AdaptiveDiv rotation={"70deg"}>
            <WaveImg src={waveImage} alt="waveImg"/>
          </AdaptiveDiv>
        </ProjectSectionWrapper>

        <ProjectSectionWrapper>
          <SectionHeading>events</SectionHeading>          
          <Projects>
            <RedAccent></RedAccent>
            <div style={{width: "50%", zIndex: "2"}}>
              <ProjectImg src={coverphoto}/>
              <ProjectImg src={coverphoto}/>
              <ProjectDescriptionSection width={"70%"}>
                <ProjectDescription>{projectdescription1}</ProjectDescription>
              </ProjectDescriptionSection>
            </div>
            <div style={{width: "25%", zIndex: "2"}}>
                <ProjectImg marginTop={"25%"} width={"90%"} src={coverphoto}/>
                <ProjectDescriptionSection width={"100%"}>
                  <ProjectDescription>{projectdescription1}</ProjectDescription>
                </ProjectDescriptionSection>
            </div>
          </Projects>
        </ProjectSectionWrapper>

        <RedDotImg src={redBgPoint} alt="redbgpoint" size={"805px"} marginTop={"-420px"} right={"70%"}/>
        <WaveImg src={waveImage} alt="waveImage" right={"-55%"} marginTop={"-20%"} />
        <ProjectSectionWrapper>
          <BciHeading >We are a team of <br/> 15 members <br/> and growing!</BciHeading>
          <div style={{margin: "830px"}}></div>
          {/* TODO create cards component from the outside 
              insert here as mini cards with appropriate class definition 
              REASON => use also in team as cards */}

          <SplitDiv>
            <SplitSectionWrapper width={"50%"}>
              <SectionHeading>support Us</SectionHeading>  

                <SplitSectionTextWrapper>
                  <RedAccent margin={"40px"}/>
                  <Description >
                  If you wish to contribute to our efforts, donate to us directly or via PayPal.
                  Your ideas are also very important to us, so feel free to get in touch with us via email.
                  Contact us / PayPal
                  </Description>
                </SplitSectionTextWrapper>
            </SplitSectionWrapper>
            <SplitSectionWrapper width={"50%"}>
              <SectionHeading>join us</SectionHeading>

              <SplitSectionTextWrapper>
                <RedAccent margin={"40px"} />
                <Description >
                You cannot wait to build the future by your own hands, while getting to know great people along the way? 
                Feel free to get in touch with us. No prior knowledge about Neurotechnology? 
                Don’t worry, you can learn on the fly! Get in touch
                </Description>
              </SplitSectionTextWrapper>
            </SplitSectionWrapper>
          </SplitDiv>
          
          <RedDotImg src={redBgPoint} alt="redbgpoint" size={"805px"} marginTop={"120px"}/>
          <SplitDiv>
            <SplitSectionWrapper width={"100%"}>
              <SectionHeading>our partners</SectionHeading>
              <SplitSectionImgWrapper>
                <PartnerImg src={partnersImgs.asta} />
                <PartnerImg src={partnersImgs.collectiveInc} />
                <PartnerImg src={partnersImgs.techAachen} />
              </SplitSectionImgWrapper>
            </SplitSectionWrapper>
          </SplitDiv>
        </ProjectSectionWrapper>

        {/* <FooterComponent>
            // creating a whole component 
        </FooterComponent> */}
      </HomeContainer>
      
    </>
  );
};

export default HomeSection;