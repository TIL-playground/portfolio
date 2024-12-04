import { useState, useEffect, useCallback } from 'react';
import { SCROLL_THRESHOLD, SCROLL_BEHAVIOR } from './constants';

export const useScroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = useCallback(() => {
    window.scrollTo(SCROLL_BEHAVIOR);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return { isVisible, scrollToTop };
};
