import {
    Container,
    Heading,
    Subtitle,
    MemberWrapper,
    RedDotImg
}from './TeamElements';
import Member from './Member';

const TeamSection = ({memberopts,redBgPoint}) => {
    return (
        <Container>
            <RedDotImg src={redBgPoint} alt='Red Dot'/>
            <Heading>{'team'}</Heading>
            <Subtitle>{'Our team members are engaging, international students from different field of study and backgrounds, mostly studying at RWTH Aachen University or FH Aachen.'}</Subtitle>
            <MemberWrapper>
                <Member {...memberopts}></Member>
                <Member {...memberopts}></Member>
                <Member {...memberopts}></Member>
            </MemberWrapper>
            <MemberWrapper>
                <Member {...memberopts}></Member>
                <Member {...memberopts}></Member>
                <Member {...memberopts}></Member>
            </MemberWrapper>
        </Container>
    );
}
export default TeamSection;