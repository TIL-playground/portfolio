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

  @media (max-width: 768px) {
    padding-top: 200px;
  }

  @media (max-width: 480px) {
    padding-top: 150px;
  }
`;

export const Margin100 = styled.div`
  margin: 100px;

  @media (max-width: 768px) {
    margin: 60px;
  }

  @media (max-width: 480px) {
    margin: 40px;
  }
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

  @media (max-width: 1024px) {
    font-size: 200px;
    padding-top: 180px;
  }

  @media (max-width: 768px) {
    font-size: 150px;
    padding-top: 150px;
  }

  @media (max-width: 480px) {
    font-size: 100px;
    padding-top: 120px;
  }

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
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding-top: 130px;
    padding-bottom: 200px;
    gap: 18px;
  }

  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 180px;
    gap: 15px;
    max-width: 95%;
  }

  @media (max-width: 480px) {
    padding-top: 80px;
    padding-bottom: 150px;
    gap: 12px;
    margin-top: 30px;
  }

  @media (max-width: 320px) {
    padding-top: 60px;
    padding-bottom: 120px;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const HyperlinkImg = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  transition: transform 0.3s ease;
  margin: 40px;

  @media (max-width: 1024px) {
    width: 55px;
    height: 55px;
    margin: 35px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 30px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    margin: 20px;
  }

  @media (max-width: 320px) {
    width: 40px;
    height: 40px;
    margin: 15px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
