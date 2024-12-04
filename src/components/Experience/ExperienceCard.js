import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  margin-left: ${props => props.isLeft ? '0' : '50px'};
  margin-right: ${props => props.isLeft ? '50px' : '0'};
  width: calc(50% - 50px);
  
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 25px;
  }
`;

const Period = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Company = styled.h3`
  font-size: 24px;
  color: #1C194A;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const Position = styled.div`
  font-size: 18px;
  color: #1C194A;
  margin-bottom: 16px;
  font-weight: 500;
  opacity: 0.8;
`;

const Description = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
`;

const Dot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background: #1C194A;
  border-radius: 50%;
  top: 36px;
  right: ${props => props.isLeft ? '-58px' : 'auto'};
  left: ${props => props.isLeft ? 'auto' : '-58px'};
  
  @media (max-width: 768px) {
    left: -46px;
    right: auto;
  }
`;

const ExperienceCard = ({ period, company, position, description, isLeft }) => {
  return (
    <Card isLeft={isLeft}>
      <Period>{period}</Period>
      <Company>{company}</Company>
      <Position>{position}</Position>
      <Description>{description}</Description>
      <Dot isLeft={isLeft} />
    </Card>
  );
};

export default ExperienceCard;
