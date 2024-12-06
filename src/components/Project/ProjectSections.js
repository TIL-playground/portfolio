import React from 'react';
import { 
  ProjectTitleLogoContainer, 
  ProjectTitle, 
  ProjectLogo,
  ProjectStack 
} from '../../style';
import Skill from '../Skill/Skill';

export const ProjectTitleSection = ({ alignRight, title, logoSrc, logoAlt }) => (
  <ProjectTitleLogoContainer alignRight={alignRight}>
    {alignRight ? (
      <>
        <ProjectLogo src={logoSrc} alt={logoAlt} alignRight={alignRight} />
        <ProjectTitle>{title}</ProjectTitle>
      </>
    ) : (
      <>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectLogo src={logoSrc} alt={logoAlt} alignRight={alignRight} />
      </>
    )}
  </ProjectTitleLogoContainer>
);

export const ProjectStackSection = ({ stack, alignRight }) => (
  <ProjectStack alignRight={alignRight}>
    {stack.map((tech, index) => (
      <Skill 
        key={index} 
        text={tech} 
        cornerRadius={(index + 1) % 2 === 0 ? 30 : undefined} 
      />
    ))}
  </ProjectStack>
);
