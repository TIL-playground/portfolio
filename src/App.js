import React, { useEffect, useState, useRef, lazy } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Toast from "./components/Toast";

const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectBlock = lazy(() => import("./block/ProjectBlock"));
const IntroduceBlock = lazy(() => import("./block/IntroduceBlock"));
const HyperlinkBlock = lazy(() => import("./block/HyperlinkBlock"));

function App() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const fullText = "Portfolio";
  const textRef = useRef(null);
  const projectRef = useRef(null);

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
    const currentProjectRef = projectRef.current;
    const observerOptions = {
      threshold: 0.3,
    };

    const projectObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowToast(true);
        const toastTimer = setTimeout(() => {
          setShowToast(false);
        }, 5000);

        return () => {
          clearTimeout(toastTimer);
        };
      } else {
        setShowToast(false);
      }
    }, observerOptions);

    if (currentProjectRef) {
      projectObserver.observe(currentProjectRef);
    }

    return () => {
      if (currentProjectRef) {
        projectObserver.unobserve(currentProjectRef);
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
    <>
      <GlobalStyle />
      <Portfolio>
        <PortfolioBody>
          <BodyText ref={textRef} isVisible={isVisible}>
            {text}
            <span className="cursor">|</span>
          </BodyText>

          <BodyContent>
            <IntroduceBlock />
            <HyperlinkBlock />
          </BodyContent>
        </PortfolioBody>

        <div ref={projectRef}>
          <ProjectsTitle>Projects</ProjectsTitle>
        
          <ProjectBlock />
          {showToast && (
            <Toast>자세히 보기를 클릭해서 프로젝트를 자세하게 확인하세요!</Toast>
          )}
          <MarginDiv />
        </div>

        <Contact />
        <Footer />
      </Portfolio>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  body {
    font-family: 'Pretendard', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const Portfolio = styled.div`
  background-color: snow;
`;

const PortfolioBody = styled.main`
  background-color: black;
  padding-top: 235px;
  padding-bottom: 235px;
`;

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const BodyText = styled.div`
  font: 300px/1 "Pretendard", sans-serif;
  font-weight: 200;
  color: white;
  text-align: center;
  width: 1238px;
  height: 315px;
  margin: 0 auto;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  .cursor {
    display: inline-block;
    width: 3px;
    margin-left: 5px;
    animation: ${blinkAnimation} 1s infinite;
  }
`;

const BodyContent = styled.div`
  font-weight: 200;
  color: white;
  width: 1238px;
  margin: 0 auto;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsTitle = styled.div`
  color: #1c194a;
  font: 70px/1 "Pretendard", sans-serif;
  font-weight: 500;
  padding-top: 120px;
  padding-left: 97px;
`;

const MarginDiv = styled.div`
  margin: 100px;
`;

export default React.memo(App);