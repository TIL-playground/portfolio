import github_logo from "../imgs/GitHublogo.png";
import linkedin_logo from "../imgs/LinkedInlogo.png";
import gmail_logo from "../imgs/Gmaillogo.png";
import velog_logo from "../imgs/Veloglogo.png";
import medium_logo from "../imgs/Mediumlogo.png";
import readcv_logo from "../imgs/Readcvlogo.png";
import React from 'react';
import { HyperlinkContainer, HyperlinkImg } from '../style';

const SOCIAL_LINKS = [
  {
    href: "https://github.com/ori0o0p",
    img: github_logo,
    alt: "github"
  },
  {
    href: "https://velog.io/@virtualthread",
    img: velog_logo, 
    alt: "velog"
  },
  {
    href: "https://medium.com/@usadapekora",
    img: medium_logo,
    alt: "medium"
  },
  {
    href: "https://www.linkedin.com/in/ori0o0p/",
    img: linkedin_logo,
    alt: "linkedin"
  },
  {
    href: "mailto:tmddnjsrla99@gmail.com",
    img: gmail_logo,
    alt: "gmail"
  },
  {
    href: "https://read.cv/main",
    img: readcv_logo,
    alt: "portfolio"
  }
];

const HyperlinkBlock = () => {
  return (
    <HyperlinkContainer>
      {SOCIAL_LINKS.map(({ href, img, alt }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <HyperlinkImg src={img} alt={alt} />
        </a>
      ))}
    </HyperlinkContainer>
  );
};

export default HyperlinkBlock;