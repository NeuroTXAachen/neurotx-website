import {
    Container,
    Heading,
    Subtitle,
    FormWrapper,
    Label,
    NameInput,
    FormRow,
    FormField,
    Input,
    Message,
    ButtonServices,
    RedDotImg,
    SectionWrapper,
    SubLabel,
    Map
}from './ContactElements';

const ContactSection = ({redBgPoint}) => {
    return (
        <Container>
            <RedDotImg src={redBgPoint} alt='Red Dot'/>
            <Heading>{'contact'}</Heading>
            <Subtitle>{'Please use this form to contact us, give us a feedback or any other contributions. We are currently recruiting! Check available positions on our social media or contact us for further questions.'}</Subtitle>
            <FormWrapper>
                <FormRow>
                    <FormField>
                    <Label>First Name*</Label>
                    <NameInput type="text" name="firstname" placeholder="Your first name.." />
                    </FormField>
                
                    <FormField>
                    <Label>Last Name*</Label>
                    <NameInput type="text" name="lastname" placeholder="Your last name.." />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField>
                    <Label>Email*</Label>
                    <Input type="email" name="email" placeholder="Your email.." />
                    </FormField>
                    
                </FormRow>
                <FormRow>
                    <FormField>
                    <Label>Field of Study*</Label>
                    <Input type="text" name="studies" placeholder="Your field of study.." />
                    </FormField>
                </FormRow>
                <FormRow>
                    <FormField>
                        <Label>University*</Label>
                    </FormField>
                    <FormField>
                        <Input type="radio" name='RWTH Aachen' value='RWTH Aachen'/> RWTH Aachen
                        <Input type="radio" name='FH Aachen' value='FH Aachen'/> FH Aachen
                        <Input type="radio" name='other' value='other'/> Other
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
                    <Label>Details like “How did you hear about us?” or “Why are you interested in NeuroTX?” will be helpful to us.</Label>
                    <ButtonServices>Send</ButtonServices>
                </FormRow>
                </FormWrapper>
                <SectionWrapper>
                    <SubLabel>
                        location
                    </SubLabel>
                    <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.444949381945!2d6.106493143556574!3d50.78758461346544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09b20c34800b5%3A0x40128dcd06f393a0!2sCollective%20Incubator!5e0!3m2!1sde!2sin!4v1671626238398!5m2!1sde!2sin" width="1050" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </Map>
                    </SectionWrapper>
                <SectionWrapper>
                    <SubLabel>
                        donation
                    </SubLabel>
                </SectionWrapper>
        </Container>
    );
}
export default ContactSection;