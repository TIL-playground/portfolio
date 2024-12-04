import React from 'react';
import { BackToTopButton, Copyright, FooterContent, FooterContainer } from '../../style';
import { ArrowUp } from 'lucide-react';
import { useScroll } from './useScroll';
import { COPYRIGHT_TEXT } from './constants';

const Footer = () => {
  const { isVisible, scrollToTop } = useScroll();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>{COPYRIGHT_TEXT}</Copyright>
      </FooterContent>
      <BackToTopButton onClick={scrollToTop} visible={isVisible}>
        <ArrowUp size={24} />
      </BackToTopButton>
    </FooterContainer>
  );
};

export default React.memo(Footer);
