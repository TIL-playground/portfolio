import { useState, useEffect } from "react";
import { HoverEventTag, ContactContent, ContactTitle, ContactContainer, ContactContentWrapper } from "../style/Styled";
import Toast from "../style/Styled";

const Contact = () => {
  const [copy, setCopy] = useState(false);

  const contactInfo = [
    { 
      text: "read.cv/main", 
      type: "link", 
      url: "https://read.cv/main" 
    },
    { 
      text: "010 2977 8517", 
      type: "text" 
    },
    { 
      text: "github/ori0o0p", 
      type: "link", 
      url: "https://github.com/ori0o0p" 
    },
    { 
      text: "linkedin/in/ori0o0p", 
      type: "link", 
      url: "https://www.linkedin.com/in/ori0o0p/" 
    },
    { 
      text: "tmddnjsrla99@gmail.com", 
      type: "text" 
    },
    { 
      text: "instagram.com/sevng_won", 
      type: "link", 
      url: "https://instagram.com/sevng_won" 
    },
    { 
      text: "대덕소프트웨어마이스터고등학교", 
      type: "link",
      url: "https://dsmhs.djsch.kr/" 
    },
  ];

  const handleClick = (item) => {
    if (item.type === "link") {
      window.open(item.url, "_blank", "noopener,noreferrer");
    } else if (item.type === "text") {
      copyToClipboard(item.text);
      setCopy(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [copy]);

  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>

      <ContactContentWrapper>
        <ContactContent>
          {contactInfo.map((item, index) => (
            <HoverEventTag 
              key={index} 
              onClick={() => handleClick(item)}
            >
              <span>{item.text}</span>
            </HoverEventTag>
          ))}
        </ContactContent>
      </ContactContentWrapper>
      {copy && <Toast>텍스트를 복사했어요.</Toast>}
    </ContactContainer>
  );
};

export default Contact;

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}
