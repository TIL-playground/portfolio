import React, { useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import header from "./imgs/header2.svg";
import github from "./imgs/GitHublogo.png";
import linkedin from "./imgs/LinkedInlogo.png";
import gmail from "./imgs/Gmaillogo.png";
import velog from "./imgs/Veloglogo.png";
import medium from "./imgs/Mediumlogo.png";
import daemawiki from "./imgs/daema.svg";
import repo from "./imgs/repo.svg";
import daemawiki_logo from "./imgs/daemawiki-logo.svg";
import repo_logo from "./imgs/repo-logo.svg";
import awack from "./imgs/awack.svg";
import awack_logo from "./imgs/awack-logo.svg";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";

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

const PortfolioHeader = styled.header`
  background-color: snow;
  width: 100%;
  height: 790px;
  position: relative;
`;

const HeaderImg = styled.img`
  width: 1239px;
  height: 585px;
  position: absolute;
  left: 60px;
  top: 80px;
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

const BodyTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: center;
  width: 1044.05px;
`;

const TitleBackgroundColor = styled.div`
  background-color: #51abff;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

const BodyContentDiv = styled.div`
  padding-top: 45px;
  font-size: 20px;
  text-align: left;
  width: 1044.05px;
`;

const PointColor = styled.span`
  color: #51abff;
  font-weight: 500;
  display: inline;
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
        <PortfolioHeader>
          <HeaderImg src={header} alt="header" />
        </PortfolioHeader>
        <PortfolioBody>
          <BodyText ref={textRef} isVisible={isVisible}>
            {text}
            <span className="cursor">|</span>
          </BodyText>
          <BodyContent>
            <BodyTitle>
              <TitleBackgroundColor>
                더욱 효율적인 코드 작성
              </TitleBackgroundColor>
              을 지향하는 백엔드 개발자 김승원입니다. :)
            </BodyTitle>
            <BodyContentDiv>
              <p>
                스프링 웹 플럭스를 활용한
                <PointColor> 비동기 논블로킹 웹 애플리케이션</PointColor> 개발에
                전문성을 갖추고 있으며, 성능 최적화와 유지보수성 향상을
                최우선으로 삼고 있습니다. 전교생이 사용하는 이력서 작성 플랫폼
                프로젝트의 백엔드 파트를 주도하여
                <PointColor> 대규모 트래픽을 안정적으로 처리</PointColor>할 수
                있는 시스템 설계와 구현에 기여했습니다.
              </p>
              <p>
                저는 
                <PointColor>
                  {" "}
                  가독성 좋은 코드 작성과 시스템 성능 최적화 사이의 균형
                </PointColor>
                을 중요하게 여기며, 유연하고 확장성이 좋은 설계를 지향합니다. 앞으로도 지속적인 학습과 도전을 통해 가치 있는 개발자로 성장하는 것이 목표입니다.
              </p>
            </BodyContentDiv>
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

          <Project
            imageSrc={daemawiki}
            imageAlt="daema"
            imageLink="https://usadapekora.notion.site/b524bc3e04104ff2a5404bf3815750c0?pvs=4"
            title="DaemaWiki"
            logoSrc={daemawiki_logo}
            logoAlt="daemawiki"
            description={`DaemaWiki is DSM\nwiki platform :>`}
            date="2024.06. ~ ing"
            stack={["Spring WebFlux", "Java", "MongoDB"]}
            githubLink="https://github.com/daemawiki/claude"
            notionLink="https://usadapekora.notion.site/b524bc3e04104ff2a5404bf3815750c0?pvs=4"
          />

          <Project
            alignRight
            imageSrc={repo}
            imageAlt="repo"
            imageLink="http://usadapekora.notion.site"
            title="Repo"
            logoSrc={repo_logo}
            logoAlt="repo logo"
            description={`Repo is DSM\nresume platform :)`}
            date="2024.05. ~ 2024.09."
            stack={["Spring MVC", "Java", "MongoDB"]}
            githubLink="https://github.com/dsm-repo/Whopper"
            notionLink="http://usadapekora.notion.site"
          />

          <Project
            imageSrc={awack}
            imageAlt="awack"
            imageLink="https://usadapekora.notion.site/Awack-f41843e631b54928987daf8a55fc43e0?pvs=4"
            title="Awack"
            logoSrc={awack_logo}
            logoAlt="awack"
            description={`Awack is DSM\nwake-up song request platform :]`}
            date="2024.04. ~ 2024.05."
            stack={["Spring MVC", "Java", "MySQL"]}
            githubLink="https://github.com/A-wack/A-wack-Backend_v2"
            notionLink="https://usadapekora.notion.site/Awack-f41843e631b54928987daf8a55fc43e0?pvs=4"
          />

          <MarginDiv />
        </div>

        <Contact />
        <Footer />
      </Portfolio>
    </>
  );
}

export default App;