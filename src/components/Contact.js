import { useState, useEffect } from "react";
import { HoverEventTag, ContactContent, ContactTitle, ContactContainer } from "../style/Styled";
import Toast from "../style/Styled";

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
