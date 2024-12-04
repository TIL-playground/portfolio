import React, { lazy } from "react";
import ToastObserver from "./components/ToastObserver";
import PortfolioTextBlock from "./block/PortfolioTextBlock";
import SkillBlock from "./block/SkillBlock";
import CertificationBlock from "./block/CertificationBlock";
import ContributeBlock from "./block/ContributeBlock";
import ExperienceBlock from "./block/ExperienceBlock";
import { BlackBlock, BodyContent, GlobalStyle, Margin100, Portfolio } from "./style";

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
        
        <BlackBlock>
            <PortfolioTextBlock />

            <BodyContent>
              <IntroduceBlock />
              <HyperlinkBlock />
            </BodyContent>
        </BlackBlock>

        <ToastObserver message="자세히 보기를 클릭해서 프로젝트를 자세하게 확인하세요!">
          <ProjectBlock />
        </ToastObserver>
        
        <BlackBlock>
          <ContributeBlock />
        </BlackBlock>

        <SkillBlock />

        <BlackBlock>
          <CertificationBlock />
        </BlackBlock>

        <ExperienceBlock />

        <Margin100 />

        <BlackBlock>
          <Contact />
        </BlackBlock>

        <Footer />
      </Portfolio>
    </>
  );
}

export default React.memo(App);