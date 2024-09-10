import styled from "styled-components";


const ContactContainer = styled.div`
    background-color: black;
    color: white;
    font: 200px 'Pretendard', sans-serif;
    font-weight: 300;
    padding: 2rem 0;
    text-align: center;
`;

const Contact = () => {


    return (
        <ContactContainer>
            Contact Me!
        </ContactContainer>
    )
}

export default Contact