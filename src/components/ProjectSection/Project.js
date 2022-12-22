import{
    Name,
    Image,
    Description,
    ProjectItem,
    ProjectText,
    ImageWrapper,
    RedAccent
} from './ProjectElements'

const Member = ({ name, image, description }) => {
    return (
        <>
            <ProjectItem>
                <ImageWrapper>
                <RedAccent/>
                <Image src={image}></Image>
                </ImageWrapper>
                <ProjectText>
                <Name>{name}</Name>
                <Description>{description}</Description>
                </ProjectText>
            </ProjectItem>
        </>
    );
}

export default Member;