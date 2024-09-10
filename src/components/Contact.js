import styled from "styled-components";


const ContactContainer = styled.div`
    background-color: black;
    color: white;
    font: 'Pretendard', sans-serif;
    padding: 2rem 0;
    text-align: center;
    height: 1350px
`;

const ContactTitle = styled.p`
    font-size: 200px;
    font-weight: 300;
`;

const ContactContent = styled.p`
    font-size: 50px;
    font-weight: 50;
    line-height: 1;
    padding-top: 100px;
`;

const HoverEventTag = styled.div`
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

const Contact = () => {


    return (
        <ContactContainer>
            <ContactTitle>
                Contact Me
            </ContactTitle>
            
            <ContactContent>
                <HoverEventTag>DSM</HoverEventTag> <br/>
                <HoverEventTag>2977 8517</HoverEventTag><br/>
                <HoverEventTag>github/ori0o0p</HoverEventTag><br/>
                <HoverEventTag>linkedin/in/ori0o0p</HoverEventTag><br/>
                <HoverEventTag>tmddnjsrla99@gmail.com</HoverEventTag>
            </ContactContent>

        </ContactContainer>
    )
}

export default Contact