import React from 'react';
import header from './imgs/header.svg';
import './App.css';
import github from './imgs/GitHublogo.png';
import linkedin from './imgs/LinkedInlogo.png';
import gmail from './imgs/Gmaillogo.png';
import velog from './imgs/Veloglogo.png';
import medium from './imgs/Mediumlogo.png';

import daemawiki from './imgs/daema.svg';
import repo from './imgs/repo.svg';

function App() {
  return (
    
    <div className="Portfolio">
      <header className="Portfolio-header">
        <img src={header} className="Portfolio-header-img" alt="header" />
      </header>
      <main className="Portfolio-body">
        <div className="Portfolio-body-text">
          Portfolio
        </div>
        <div className="Portfolio-body-content">
          <h1 className="Portfolio-body-title">
            <div className='Portfolio-body-title-background-color-block'>
              더욱 효율적인 코드 작성
            </div>
            을 지향하는 백엔드 개발자 김승원입니다. :)
          </h1>
          <div className='Portfolio-body-content-div'>
            <p className="Portfolio-body-content-1">
              스프링 웹 플럭스를 활용한 
              <span className='Portfolio-body-content-point-color'>비동기 논블로킹 웹 애플리케이션</span> 개발에 전문성을 갖추고 있으며, 성능 최적화와 유지보수성 향상을 최우선으로 삼고 있습니다. 전교생이 사용하는 이력서 작성 플랫폼 프로젝트를 주도하여 
              <span className='Portfolio-body-content-point-color'>대규모 트래픽을 안정적으로 처리</span>할 수 있는 시스템 설계와 구현에 기여했습니다.
            </p>
            <p className="Portfolio-body-content-2">
              항상 최신 기술 트렌드를 학습하며, 
              <span className='Portfolio-body-content-point-color'>클린 코드 작성과 시스템 성능 최적화 사이의 균형</span>을 중요하게 여깁니다. 앞으로도 지속적인 학습과 도전을 통해 가치 있는 개발자로 성장하는 것이 목표입니다.
            </p>
          </div>
          <div className='Portfolio-body-content-hiperlink'>
            <a href="https://github.com/ori0o0p" target="_blank" rel="noreferrer">
              <img src={github} className="Portfolio-body-content-hiperlink-img" alt="github" />
            </a>
            <a href="https://velog.io/@virtualthread" target="_blank" rel="noreferrer">
              <img src={velog} className="Portfolio-body-content-hiperlink-img" alt="velog" />
            </a>
            <a href="https://medium.com/@usadapekora" target="_blank" rel="noreferrer">
              <img src={medium} className="Portfolio-body-content-hiperlink-img" alt="medium" />
            </a>
            <a href="https://www.linkedin.com/in/ori0o0p/" target="_blank" rel="noreferrer">
              <img src={linkedin} className="Portfolio-body-content-hiperlink-img" alt="linkedin" />
            </a>
            <a href="mailto:tmddnjsrla99@gmail.com" target="_blank" rel="noreferrer">
              <img src={gmail} className="Portfolio-body-content-hiperlink-img" alt="gmail" />
            </a>
          </div>
        </div>
      </main>

      <div className="Portfolio-projects">
        <div className='Portfolio-projects-title'>Projects</div>

        <div className='daemawiki-projects'>
          <img src={daemawiki} alt="daema" className='daemawiki-projects-img'/>

          <div>
            <div className='daemawiki-projects-title'>
              DaemaWiki
            </div>
            <div className='daemawiki-projects-logo-img'>
            
            </div>
            <div>line</div>
            <div className='daemawiki-projects-description'>
              DaemaWiki is DSM wiki platform :&gt;
            </div>
            <div className='daemawiki-projects-date'>
              2024.06. ~ ing
            </div>
            <div>
              <a href="https://github.com/daemawiki/claude">
                github.com/daemawiki/claude
              </a>
            </div>
          </div>

        </div>

        <div className='repo-projects'>
          <img src={repo} alt="repo" className='repo-projects-img'/>
        </div>

      </div>

      <footer className="Portfolio-footer">
      </footer>
    </div>
  );
}

export default App;
