import React from 'react';
import styled from 'styled-components';
import Logo from './logo-com';
import Line from './Line';

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  margin-top: 50px;
  padding-right: 97px;
  padding-left: 97px;
  color: #1c194a;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
  grid-row: 1 / span 4;
  cursor: pointer;
  transition: transform 0.3s ease;
`;

const ProjectContent = styled.div`
  grid-column: ${props => props.alignRight ? '1 / 2' : '2 / 3'};
  text-align: ${props => props.alignRight ? 'right' : 'left'};
`;

const ProjectTitleLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTitle = styled.div`
  font: 37px "Pretendard", sans-serif;
  font-weight: 530;
`;

const ProjectLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-${props => props.alignRight ? 'right' : 'left'}: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectDescription = styled.div`
  margin-top: 20px;
  font: 30px "Pretendard", sans-serif;
  font-weight: 500;
  white-space: pre-line;
`;

const ProjectDate = styled.div`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
`;

const ProjectLink = styled.a`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-decoration-line: none;
  color: #1c194a;
`;

const ProjectStack = styled.div`
  margin-top: 80px;
  margin-bottom: 11px;
  display: flex;
  gap: 5px;
  justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
`;

const NotionLink = styled.a`
  text-decoration-line: none;
  color: #000000;
  grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
  grid-row: 2 / 6;
  align-self: end;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    color: #000000;
    opacity: 0.6;
    transition: opacity 0.6s ease;
  }
`;

const InnerText = styled.div`
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  color: #1c194a;
  white-space: pre-line;
  line-height: 1.5;

  &:hover {
    opacity: 0.6;
  }
`;

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