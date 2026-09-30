import {
  Container,
  Heading,
  Subtitle,
  RedDotImg,
  GroupHeading,
  CurrentProjects,
} from "./ProjectElements";
import Project from "./Project";
import { DescriptionWrapper, Description, ButtonServices } from "../LearnSection/LearnElements";
import { NavLinks2 } from "../Navbar/NavbarElement";

const ProjectSection = ({ currentProjects, previousProjects, redBgPoint }) => {
  const renderProjects = (projects, compact = false) =>
    Object.keys(projects).map((key) => (
      <Project {...projects[key]} compact={compact} key={key} />
    ));

  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>{"PROJECTS"}</Heading>
      <Subtitle>
        {
          "Our projects involve mainly brain signal processing, e.g. from EEG, and its translation into real-world practical engineering applications such as brain-computer interface."
        }
      </Subtitle>
      <GroupHeading>Current Projects</GroupHeading>
      <CurrentProjects>{renderProjects(currentProjects, true)}</CurrentProjects>
      <GroupHeading>Previous Projects</GroupHeading>
      {renderProjects(previousProjects)}
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
