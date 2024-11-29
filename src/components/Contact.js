import { useState, useEffect } from "react";
import styled from "styled-components";
import Toast from "./Toast";

const Contact = () => {
  const [copy, setCopy] = useState(false);
  const info = [
    "DSM",
    "2977 8517",
    "github/ori0o0p",
    "linkedin/in/ori0o0p",
    "tmddnjsrla99@gmail.com",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [copy]);

  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>

      <ContactContent>
        {info.map((text, index) => (
          <HoverEventTag key={index} onClick={() => setCopy(true)}>
            <span onClick={() => copyToClipboard(text)}>{text}</span>
          </HoverEventTag>
        ))}
      </ContactContent>
      {copy && <Toast>텍스트를 복사했어요.</Toast>}
    </ContactContainer>
  );
};

export default Contact;

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

const ContactContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Pretendard", sans-serif;
  padding: 2rem 0;
  text-align: center;
  height: 1350px;
`;

const ContactTitle = styled.p`
  font-size: 200px;
  font-weight: 300;
`;

const ContactContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 50px;
  font-weight: 50;
  line-height: 1;
  padding-top: 100px;
  flex-direction: column;
  gap: 56px;
`;

const HoverEventTag = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
