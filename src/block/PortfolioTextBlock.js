import React, { useEffect, useState, useRef } from "react";
import { BodyText } from "../style";

const PortfolioTextBlock = () => {
    const [text, setText] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const fullText = "Portfolio";
    const textRef = useRef(null);
  
    useEffect(() => {
      const currentTextRef = textRef.current;
      const observerOptions = {
        threshold: 0.5,
      };
  
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentTextRef);
        }
      }, observerOptions);
  
      if (currentTextRef) {
        observer.observe(currentTextRef);
      }
  
      return () => {
        if (currentTextRef) {
          observer.unobserve(currentTextRef);
        }
      };
    }, []);
  
    useEffect(() => {
      if (!isVisible) return;
  
      let index = 0;
      let lastTime = 0;
      const animationDuration = 150;
  
      const animate = (currentTime) => {
        if (!lastTime) lastTime = currentTime;
        const elapsed = currentTime - lastTime;
  
        if (elapsed >= animationDuration) {
          setText(fullText.slice(0, index + 1));
          index++;
          lastTime = currentTime;
        }
  
        if (index <= fullText.length) {
          window.requestAnimationFrame(animate);
        }
      };
  
      const animationId = window.requestAnimationFrame(animate);
  
      return () => window.cancelAnimationFrame(animationId);
    }, [isVisible]);

    return (
      <BodyText ref={textRef} isVisible={isVisible}>
          {text}
          <span className="cursor">|</span>
      </BodyText>
    )
}

export default React.memo(PortfolioTextBlock);