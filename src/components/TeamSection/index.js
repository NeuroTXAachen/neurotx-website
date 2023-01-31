import {
  Container,
  Heading,
  Subtitle,
  MemberWrapper,
  RedDotImg,
  RedDotImg2,
  WaveImg1,
  WaveImg2,
  AlumniWrapper,
  SectionWrapper,
  SubLabel,
} from "./TeamElements";

import Member from "./Member";
import Alumni from "./Alumni";
import React, { useState } from "react";
import { SubSection } from "../ContactSection/ContactElements";

const MemberSection = ({ children, memberopts }) => {
  const [counter, setcounter] = useState(-1);

  return (
    <MemberWrapper>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { width: "23%" });
      })}
    </MemberWrapper>
  );
};
const AlumniSection = ({ children, memberopts }) => {
  const [counter, setcounter] = useState(-1);

  return (
    <AlumniWrapper>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { width: "23%" });
      })}
    </AlumniWrapper>
  );
};

const TeamSection = ({ memberData, alumniData, redBgPoint, waveImage }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />

<WaveImg1
  src={waveImage}
  alt="waveImage"
  position={"absolute"}
  right={"-55%"}
  marginTop={"150vh"}
/>
<RedDotImg2
  src={redBgPoint}
  alt="redbgpoint"
  right={"50%"}
/>
<WaveImg2
  src={waveImage}
  alt="waveImage"
  right={"55%"}
  marginTop={"50vh"}
/>
      <Heading>{"team"}</Heading>
      <Subtitle>
        {
          "Our team members are engaging, international students from different field of study and backgrounds, mostly studying at RWTH Aachen University or FH Aachen."
        }
      </Subtitle>
      <MemberSection>
        {memberData.map((props) => {
          return <Member props={props}></Member>;
        })}
      </MemberSection>
      <SectionWrapper>
        <SubLabel>{"alumni"}</SubLabel>
        <AlumniSection>
          {alumniData.map((props) => {
            return <Alumni props={props}></Alumni>;
          })}
        </AlumniSection>
      </SectionWrapper>
    </Container>
  );
};

export default TeamSection;
