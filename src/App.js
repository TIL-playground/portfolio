import React, { lazy } from "react";
import ToastObserver from "./components/ToastObserver";
import PortfolioTextBlock from "./block/PortfolioTextBlock";
import { GlobalStyle, Portfolio, PortfolioBody, BodyContent, MarginDiv } from './style/Styled'

const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectBlock = lazy(() => import("./block/ProjectBlock"));
const IntroduceBlock = lazy(() => import("./block/IntroduceBlock"));
const HyperlinkBlock = lazy(() => import("./block/HyperlinkBlock"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Portfolio>
        
        <PortfolioBody>
          <PortfolioTextBlock />

          <BodyContent>
            <IntroduceBlock />
            <HyperlinkBlock />
          </BodyContent>

        </PortfolioBody>

        <ToastObserver message="자세히 보기를 클릭해서 프로젝트를 자세하게 확인하세요!">
          <ProjectBlock />
        </ToastObserver>

        <MarginDiv />

        <Contact />

        <Footer />
      </Portfolio>
    </>
  );
}

export default React.memo(App);