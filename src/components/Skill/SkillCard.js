import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: transparent;
  padding: 15px 21px;
  border: 1.5px solid #e6e6e6;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  cursor: default;

  &:hover {
    background: #1C194A;
    border-color: #1C194A;
    
    span {
      color: snow;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
  }
`;

const SkillName = styled.span`
  color: #1C194A;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
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
