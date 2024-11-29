import github from "../imgs/GitHublogo.png";
import linkedin from "../imgs/LinkedInlogo.png";
import gmail from "../imgs/Gmaillogo.png";
import velog from "../imgs/Veloglogo.png";
import medium from "../imgs/Mediumlogo.png";
import styled from "styled-components";

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