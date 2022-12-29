import {
  Container,
  Heading,
  Subtitle,
  MemberWrapper,
  RedDotImg,
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

const TeamSection = ({ memberData, alumniData, redBgPoint }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
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
