import github from "../imgs/GitHublogo.png";
import linkedin from "../imgs/LinkedInlogo.png";
import gmail from "../imgs/Gmaillogo.png";
import velog from "../imgs/Veloglogo.png";
import medium from "../imgs/Mediumlogo.png";
import { HyperlinkContainer, HyperlinkImg } from '../style/Styled'

const HyperlinkBlock = () => {
    return (
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
    );
};

export default HyperlinkBlock;