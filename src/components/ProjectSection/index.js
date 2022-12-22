import { Container, Heading, Subtitle, RedDotImg } from "./ProjectElements";
import Project from "./Project";

const ProjectSection = ({ projectopts, redBgPoint }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>{"projects"}</Heading>
      <Subtitle>
        {
          "Our projects involve mainly brain signal processing, e.g. from EEG, and its translation into real-world practical engineering applications such as brain-computer interface."
        }
      </Subtitle>
      {Object.keys(projectopts).map((key) => {
        return <Project {...projectopts[key]}></Project>;
      })}
    </Container>
  );
};
export default ProjectSection;
