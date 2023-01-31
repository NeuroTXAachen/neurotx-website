import {
  Container,
  Heading,
  Subtitle,
  FormWrapper,
  Label,
  FormRow,
  FormField,
  NameFormField,
  Input,
  Message,
  ButtonServices,
  RedDotImg,
  RedDotImg2,
  RedAccent,
  WaveImg1,
  WaveImg2,
  SubSectionText,
  SubSection,
  DonateSection,
  SectionWrapper,
  SubLabel,
  Map,
  Link,
  Image,
  RadioInput,
} from "./ContactElements";

const ContactSection = ({ waveImage, redBgPoint, paypalImage }) => {
  return (
    <>
      
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
        
        <Heading>{"contact"}</Heading>
        <Subtitle>
          {
            "Please use this form to contact us, give us a feedback or any other contributions. We are currently recruiting! Check available positions on our social media or contact us for further questions."
          }
        </Subtitle>
        <form name="contact" netlify-honeypot="bot-field" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormWrapper>
            <FormRow>
              <NameFormField>
                <Label>First Name*</Label>
                <Input type="text" name="firstname" />
              </NameFormField>

              <NameFormField>
                <Label>Last Name*</Label>
                <Input type="text" name="lastname" />
              </NameFormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Label>Email*</Label>
                <Input type="email" name="email" />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Label>Field of Study*</Label>
                <Input type="text" name="studies" />
              </FormField>
            </FormRow>
            <FormRow>
              <FormField width={"50%"}>
                <Label>University*</Label>
              </FormField>
              <FormField>
                <div>
                  <RadioInput
                    type="radio"
                    name="University"
                    value="RWTH Aachen"
                    id={"rwthAachen"}
                    checked={true}
                  />
                  <Label for={"rwthAachen"}>RWTH Aachen</Label>
                </div>
                <div>
                  <RadioInput
                    type="radio"
                    id={"fhAachen"}
                    name="University"
                    value="FH Aachen"
                  />
                  <Label for={"fhAachen"}>FH Aachen</Label>
                </div>
                <div>
                  <RadioInput
                    type="radio"
                    id={"other"}
                    name="University"
                    value="other"
                  />
                  <Label for={"other"}>Other</Label>
                </div>
              </FormField>
            </FormRow>
            <FormRow>
              <FormField>
                <Label>Message*</Label>
                <Message type="text" name="message" />
                <Label></Label>
              </FormField>
            </FormRow>
            <FormRow>
              <Label>
                Details like “How did you hear about us?” or “Why are you
                interested in NeuroTX?” will be helpful to us.
              </Label>
              <ButtonServices type="submit">Send</ButtonServices>
            </FormRow>
          </FormWrapper>
        </form>
        <SectionWrapper>
          <SubLabel>location</SubLabel>
          <SubSection>
            <RedAccent />
            <SubSectionText>
              NeuroTX Aachen e.V., <br />
              Collective Incubator e. V. <br />
              Jülicher Str. 209 <br />
              52070 Aachen
            </SubSectionText>
          </SubSection>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.444949381945!2d6.106493143556574!3d50.78758461346544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09b20c34800b5%3A0x40128dcd06f393a0!2sCollective%20Incubator!5e0!3m2!1sde!2sin!4v1671626238398!5m2!1sde!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Map>
        </SectionWrapper>
        <SectionWrapper>
          <SubLabel>donation</SubLabel>
          <SubSection>
            <RedAccent />
            <SubSectionText>
              NeuroTX Aachen e.V. is a non-profit student initiative, so every
              financial supports are valuable for us. If you wish to contribute
              to our efforts, please donate to us directly or via PayPal.
            </SubSectionText>
          </SubSection>
          <DonateSection>
            <Link to="https://www.paypal.com/paypalme/neurotx">
              <Image src={paypalImage} />
            </Link>
            <SubSectionText>
              Bank Account <br />
              Account owner : NEUROTX AACHEN <br />
              IBAN : DE57 3905 0000 1073 5990 50
            </SubSectionText>
          </DonateSection>
        </SectionWrapper>
      </Container>
    </>
  );
};
export default ContactSection;