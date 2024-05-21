import { Container, Heading, Subtitle, RedDotImg } from "./ProjectElements";
import Project from "./Project";
import { DescriptionWrapper, Description, ButtonServices } from "../LearnSection/LearnElements";
import { NavLinks2 } from "../Navbar/NavbarElement";

const ProjectSection = ({ projectopts, redBgPoint }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>{"PROJECTS"}</Heading>
      <Subtitle>
        {
          "Our projects involve mainly brain signal processing, e.g. from EEG, and its translation into real-world practical engineering applications such as brain-computer interface."
        }
      </Subtitle>
      {Object.keys(projectopts).map((key) => {
        return <Project {...projectopts[key]}></Project>;
      })}
      <DescriptionWrapper>
        <Description>
          Wanna find out more about our projects?<br />
          Do not hesitate to contact our team.<br />
          Your ideas and thoughts are also very welcome.
        </Description>
        <ButtonServices><NavLinks2 to="/contact">Get In Touch</NavLinks2></ButtonServices>
      </DescriptionWrapper>
    </Container>
  );
};
export default ProjectSection;
