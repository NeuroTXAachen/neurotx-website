import { Container, Heading, Subtitle, RedDotImg,
  RedDotImg2,
  WaveImg1,
  WaveImg2, } from "./ProjectElements";
import Project from "./Project";

const ProjectSection = ({ projectopts, redBgPoint, waveImage }) => {
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
