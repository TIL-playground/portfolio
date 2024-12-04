import React from 'react';
import { 
  Line, 
  ProjectContainer, 
  ProjectContent, 
  ProjectImage, 
  InnerText, 
  NotionLink, 
  ProjectLink, 
  ProjectDate, 
  ProjectDescription 
} from '../../style';
import { ProjectTitleSection, ProjectStackSection } from './ProjectSections';
import { EXTERNAL_LINK_PROPS } from './constants';

const Project = ({
  alignRight,
  imageSrc,
  imageAlt,
  title,
  logoSrc,
  logoAlt,
  description,
  date,
  stack,
  githubLink,
  notionLink
}) => {
  return (
    <ProjectContainer>
      <ProjectImage 
        src={imageSrc} 
        alt={imageAlt} 
        alignRight={alignRight} 
      />      
      <NotionLink 
        href={notionLink} 
        alignRight={alignRight}
        {...EXTERNAL_LINK_PROPS}
      >
        <InnerText alignRight={alignRight}>자세히 보러 가기</InnerText>
      </NotionLink>

      <ProjectContent alignRight={alignRight}>
        <ProjectTitleSection 
          alignRight={alignRight}
          title={title}
          logoSrc={logoSrc}
          logoAlt={logoAlt}
        />
        <Line />
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectDate>{date}</ProjectDate>
        <ProjectStackSection 
          stack={stack} 
          alignRight={alignRight} 
        />
        <ProjectLink 
          href={githubLink} 
          {...EXTERNAL_LINK_PROPS}
        >
          {githubLink.replace('https://', '')}
        </ProjectLink>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;
