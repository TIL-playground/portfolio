import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  padding: 15px 25px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  transition: transform 0.2s ease, background-color 0.2s ease;
  will-change: transform, background-color;

  &:hover {
    background: #1C194A;
    border-color: #1C194A;
    
    span {
      color: snow;
    }
    
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
  }
`;

const SkillName = styled.span`
  color: #1C194A;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Apple SD Gothic Neo', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const SkillCard = ({ text }) => {
  return (
    <Card>
      <SkillName>{text}</SkillName>
    </Card>
  );
};

export default SkillCard;
