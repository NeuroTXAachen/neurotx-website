import {
  Container,
  Heading,
  Subtitle,
  VideoWrapper,
  Label,
  Video,
  RedAccent,
  RedDotImg,
  Description,
  DescriptionWrapper,
  ButtonServices,
} from "./LearnElements";
import { WaveImg } from "../HomeSection/HomeElements";

const LearnSection = ({ redBgPoint, waveImage }) => {
  return (
    <Container>
      <RedDotImg src={redBgPoint} alt="Red Dot" />
      <Heading>{"learn"}</Heading>
      <Subtitle>
        {
          "To help you start from beginner’s level, we offer online interactive workshops and webinars for free. These are some recording from our seminar."
        }
      </Subtitle>
      <VideoWrapper>
        <Label>Fun Facts & Brain Anatomy</Label>
        <Video>
          <RedAccent />
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/B85LURaxh0E"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>

        <WaveImg
          src={waveImage}
          alt="waveImg"
          right={"55%"}
          style={{ rotate: "80deg" }}
        />
        <Label>Signals Transduction</Label>
        <Video>
          <RedAccent />
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/es2vuELsauc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>
        <RedDotImg
          src={redBgPoint}
          alt="redbgpoint"
          marginTop={"250vh"}
          right={"70%"}
        />
        <WaveImg
          src={waveImage}
          alt="waveImage"
          right={"-55%"}
          marginTop={"150vh"}
        />
        <Label>Momentum of the 21st Century</Label>
        <Video>
          <RedAccent />
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/1ZOuh1A77qE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>
        <Label>Ethics in Neuroscience</Label>
        <Video>
          <RedAccent />
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/A8ivHmspNwM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>
      </VideoWrapper>
      <DescriptionWrapper>
        <Description>
          We might also organize seminars and events in the future. Make sure
          you don’t miss out by following our Instagram.
        </Description>
        <ButtonServices>Instagram</ButtonServices>
      </DescriptionWrapper>
    </Container>
  );
};
export default LearnSection;
