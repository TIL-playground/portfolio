import styled, { keyframes } from 'styled-components';

export const Portfolio = styled.div`
  background-color: snow;
  color: #1C194A;
`;

export const BodyContent = styled.div`
  font-weight: 200;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Margin100 = styled.div`
  margin: 100px;
`;

const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const BodyText = styled.div`
  font: 300px/1 "Pretendard", sans-serif;
  font-weight: 200;
  text-align: center;
  margin: 0 auto;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  padding-top: 235px;

  .cursor {
    display: inline-block;
    width: 3px;
    margin-left: 5px;
    animation: ${blinkAnimation} 1s infinite;
  }
`;

export const HyperlinkContainer = styled.div`
  max-width: 1044.05px;
  padding-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  padding-bottom: 235px;
`;

export const HyperlinkImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin: 40px;

  &:hover {
    transform: scale(1.1);
  }
`;
