import {
  Container,
  Heading,
  Subtitle,
  VideoWrapper,
  Label,
  Video,
  RedAccent,
  RedDotImg,
  RedDotImg2,
  WaveImg1,
  WaveImg2,
  Description,
  DescriptionWrapper,
  ButtonServices,
} from "./LearnElements";

const LearnSection = ({ redBgPoint, waveImage }) => {
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
