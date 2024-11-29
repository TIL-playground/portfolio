import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import github from "./imgs/GitHublogo.png";
import linkedin from "./imgs/LinkedInlogo.png";
import gmail from "./imgs/Gmaillogo.png";
import velog from "./imgs/Veloglogo.png";
import medium from "./imgs/Mediumlogo.png";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectBlock from "./block/ProjectBlock";
import IntroduceBlock from "./block/IntroduceBlock";

function App() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Portfolio";
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentTextRef = textRef.current;

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
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
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
            <HyperlinkContainer>
              <a
                href="https://github.com/ori0o0p"
                target="_blank"
                rel="noreferrer"
              >
                <HyperlinkImg src={github} alt="github" />
              </a>
              <a
                href="https://velog.io/@virtualthread"
                target="_blank"
                rel="noreferrer"
              >
                <HyperlinkImg src={velog} alt="velog" />
              </a>
              <a
                href="https://medium.com/@usadapekora"
                target="_blank"
                rel="noreferrer"
              >
                <HyperlinkImg src={medium} alt="medium" />
              </a>
              <a
                href="https://www.linkedin.com/in/ori0o0p/"
                target="_blank"
                rel="noreferrer"
              >
                <HyperlinkImg src={linkedin} alt="linkedin" />
              </a>
              <a
                href="mailto:tmddnjsrla99@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <HyperlinkImg src={gmail} alt="gmail" />
              </a>
            </HyperlinkContainer>
          </BodyContent>
        </PortfolioBody>

        <div>
          <ProjectsTitle>Projects</ProjectsTitle>

          <ProjectBlock />

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

const HyperlinkContainer = styled.div`
  max-width: 1044.05px;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

const HyperlinkImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin: 40px;

  &:hover {
    transform: scale(1.1);
  }
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

export default App;
