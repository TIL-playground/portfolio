import styled, { createGlobalStyle, keyframes } from "styled-components";

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

const MarginDiv = styled.div`
  margin: 100px;
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

export { GlobalStyle, Portfolio, PortfolioBody, BodyContent, MarginDiv, BodyText, HyperlinkContainer, HyperlinkImg }

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1044.05px;
`;

const IntroduceTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`;

const PointBackgroundColor = styled.span`
  background-color: #51abff;
  color: white;
  padding: 0.2rem 0.4rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

const IntroduceContent = styled.div`
  padding-top: 2.8rem;
  font-size: 1.25rem;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 1.5rem;
  }
`;

const PointColor = styled.span`
  color: #51abff;
  font-weight: 500;
`;

export { PointColor, IntroduceContent, PointBackgroundColor, IntroduceTitle, ContentWrapper, IntroSection }

const ProjectsTitle = styled.div`
  color: #1c194a;
  font: 70px/1 "Pretendard", sans-serif;
  font-weight: 500;
  padding-top: 120px;
  padding-left: 97px;
`;

export { ProjectsTitle }

// Contact.js

const ContactContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Pretendard", sans-serif;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1550px;
`;

const ContactTitle = styled.p`
  font-size: 200px;
  font-weight: 300;
  text-align: center;
`;

const ContactContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;

const ContactContent = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  font-size: 50px;
  font-weight: 50;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
  box-sizing: border-box;
`;

const HoverEventTag = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export { HoverEventTag, ContactContent, ContactTitle, ContactContainer, ContactContentWrapper }

// Footer

const FooterContainer = styled.footer`
  background-color: snow;
  color: black;
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  font: 0.75rem 'Pretendard', sans-serif;
  font-size: 1rem;
`;

const BackToTopButton = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  
  &:hover {
    background-color: #4A4A4A;
  }
`;

export { BackToTopButton, Copyright, FooterContent, FooterContainer }

// Project 
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  margin-top: 50px;
  padding-right: 97px;
  padding-left: 97px;
  color: #1c194a;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
  grid-row: 1 / span 4;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const ProjectContent = styled.div`
  grid-column: ${props => props.alignRight ? '1 / 2' : '2 / 3'};
  text-align: ${props => props.alignRight ? 'right' : 'left'};
`;

const ProjectTitleLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  font: 37px "Pretendard", sans-serif;
  font-weight: 530;
`;

const ProjectLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-${props => props.alignRight ? 'right' : 'left'}: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectDescription = styled.div`
  margin-top: 20px;
  font: 30px "Pretendard", sans-serif;
  font-weight: 500;
  white-space: pre-line;
`;

const ProjectDate = styled.div`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
`;

const ProjectLink = styled.a`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-decoration-line: none;
  color: #1c194a;
`;

const ProjectStack = styled.div`
  margin-top: 80px;
  margin-bottom: 11px;
  display: flex;
  gap: 5px;
  justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
`;

const NotionLink = styled.a`
  text-decoration-line: none;
  color: #000000;
  grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
  grid-row: 2 / 6;
  align-self: end;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #000000;
    opacity: 0.6;
    transition: opacity 0.6s ease;
  }
`;

const InnerText = styled.div`
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  color: #1c194a;
  white-space: pre-line;
  line-height: 1.5;

  &:hover {
    opacity: 0.6;
  }
`;

const Line = styled.div`
  width: 630px;
  height: 1.5px;
  background-color: #DFDCDC;
`;

export { Line, ProjectContainer, ProjectImage, InnerText, NotionLink, ProjectContent, ProjectLink, ProjectStack, ProjectDate, ProjectDescription, ProjectLogo, ProjectTitle, ProjectTitleLogoContainer};

const Toast = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  position: fixed;
  backdrop-filter: blur(4px);
  border-radius: 8px;
  z-index: 100;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  font-size: 18px;
  color: white;
  opacity: 0;
  animation: upFadeAway 4s ease-in-out;

  @keyframes upFadeAway {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    20% {
      transform: translateX(-50%) translateY(-2px);
      opacity: 1;
    }
    80% {
      transform: translateX(-50%) translateY(-2px);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(10px);
      opacity: 0;
    }
  }
`;

export default Toast;