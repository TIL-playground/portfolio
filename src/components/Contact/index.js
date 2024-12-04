import { useState, useEffect } from "react";
import { 
  ContactContent, 
  Title1, 
  ContactContainer, 
  ContactContentWrapper,
  Toast 
} from "../../style";
import ContactItem from './ContactItem';
import { CONTACT_INFO, TOAST_DURATION, TOAST_MESSAGE } from './constants';

const Contact = () => {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    if (!copy) return;
    
    const timer = setTimeout(() => {
      setCopy(false);
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, [copy]);

  const handleCopy = () => setCopy(true);

  return (
    <ContactContainer>
      <Title1>Contact Me</Title1>
      <ContactContentWrapper>
        <ContactContent>
          {CONTACT_INFO.map((item, index) => (
            <ContactItem 
              key={index} 
              item={item}
              onCopy={handleCopy}
            />
          ))}
        </ContactContent>
      </ContactContentWrapper>
      {copy && <Toast>{TOAST_MESSAGE}</Toast>}
    </ContactContainer>
  );
};

export default Contact;
