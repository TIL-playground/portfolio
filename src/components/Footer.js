import React, { useState, useEffect } from 'react';
import { BackToTopButton, Copyright, FooterContent, FooterContainer } from '../style/Styled';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© 2024 Seung Won. All rights reserved. : )</Copyright>
      </FooterContent>
      <BackToTopButton onClick={scrollToTop} visible={isVisible}>
        <ArrowUp size={24} />
      </BackToTopButton>
    </FooterContainer>
  );
};

export default Footer;