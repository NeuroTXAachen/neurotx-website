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
    RedDotImg
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
        </Container>
    );
}
export default ContactSection;