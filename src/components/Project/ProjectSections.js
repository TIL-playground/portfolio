import React from 'react';
import { 
  ProjectTitleLogoContainer, 
  ProjectTitle, 
  ProjectLogo,
  ProjectStack 
} from '../../style';
import Skill from '../Skill/Skill';
import { JAVA_CORNER_RADIUS } from './constants';

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
        cornerRadius={tech === 'Java' ? JAVA_CORNER_RADIUS : undefined} 
      />
    ))}
  </ProjectStack>
);
