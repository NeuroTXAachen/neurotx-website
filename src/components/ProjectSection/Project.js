import{
    Name,
    Image,
    Description,
    ProjectItem,
    ProjectText
} from './ProjectElements'

const Member = ({ name, image, description }) => {
    return (
        <>
            <ProjectItem>
                <Image src={image}></Image>
                <ProjectText>
                <Name>{name}</Name>
                <Description>{description}</Description>
                </ProjectText>
            </ProjectItem>
        </>
    );
}

export default Member;