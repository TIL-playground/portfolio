import React from 'react';
import { Line, ProjectContainer, ProjectImage, InnerText, NotionLink, ProjectContent, ProjectLink, ProjectStack, ProjectDate, ProjectDescription, ProjectLogo, ProjectTitle, ProjectTitleLogoContainer} from '../style/Styled';
import Logo from './Logo';

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
      <ProjectImage src={imageSrc} alt={imageAlt} alignRight={alignRight} />
      <NotionLink href={notionLink} target="_blank" rel="noopener noreferrer" alignRight={alignRight}>
        <InnerText alignRight={alignRight}>자세히 보러 가기</InnerText>
      </NotionLink>
      <ProjectContent alignRight={alignRight}>
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
        <Line />
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectDate>{date}</ProjectDate>
        <ProjectStack alignRight={alignRight}>
          {stack.map((tech, index) => (
            <Logo key={index} text={tech} cornerRadius={tech === 'Java' ? 30 : undefined} />
          ))}
        </ProjectStack>
        <ProjectLink href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink.replace('https://', '')}
        </ProjectLink>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Project;