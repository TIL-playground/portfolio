import styled from 'styled-components';

export const ProjectsTitle = styled.div`
  color: #1c194a;
  font: 70px/1 "Pretendard", sans-serif;
  font-weight: 500;
  padding-top: 120px;
  padding-left: 97px;

  @media (max-width: 768px) {
    font-size: 50px;
    padding-left: 40px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    padding-left: 20px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 97px;
  color: #1c194a;
  gap: 10px 20px;
  padding-right: 97px;
  padding-left: 97px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
  }

  @media (max-width: 768px) {
    padding-right: 40px;
    padding-left: 40px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 20px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
  grid-row: 1 / span 4;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (min-width: 1024px) {
    order: 0;
    grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
    grid-row: 1 / span 4;
  }
`;

export const ProjectContent = styled.div`
  grid-column: ${props => props.alignRight ? '1 / 2' : '2 / 3'};
  text-align: ${props => props.alignRight ? 'right' : 'left'};

  @media (min-width: 1024px) {
    grid-column: ${props => props.alignRight ? '1 / 2' : '2 / 3'};
    align-items: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  }
`;

export const ProjectTitleLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectTitle = styled.div`
  font: 37px "Pretendard", sans-serif;
  font-weight: 530;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ProjectLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin-${props => props.alignRight ? 'right' : 'left'}: 20px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectDescription = styled.div`
  margin-top: 20px;
  font: 30px "Pretendard", sans-serif;
  font-weight: 500;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProjectDate = styled.div`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProjectLink = styled.a`
  margin-top: 20px;
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-decoration-line: none;
  color: #1c194a;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ProjectStack = styled.div`
  margin-top: 80px;
  margin-bottom: 11px;
  display: flex;
  gap: 5px;
  justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 10px;
    justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    justify-content: center;
  }
`;

export const NotionLink = styled.a`
  text-decoration-line: none;
  color: #000000;
  align-self: end;
  margin-top: 20px;
  margin-bottom: 20px;
  align-self: ${props => props.alignRight ? 'flex-end' : 'flex-start'};
  order: 0;

  @media (min-width: 1024px) {
    grid-column: ${props => props.alignRight ? '2 / 3' : '1 / 2'};
    grid-row: 2 / 6;
    align-self: end;
  }

  &:hover {
    cursor: pointer;
    color: #000000;
    opacity: 0.6;
    transition: opacity 0.6s ease;
  }
`;

export const InnerText = styled.div`
  font: 25px "Pretendard", sans-serif;
  font-weight: 500;
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  color: #1c194a;
  white-space: pre-line;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
