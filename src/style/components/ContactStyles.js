import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Pretendard", sans-serif;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1550px;

  @media (max-width: 768px) {
    height: auto;
    min-height: 1200px;
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    min-height: 1000px;
    padding: 1rem 0;
  }
`;

export const Title1 = styled.div`
  padding: 180px 0;
  width: 100%;
  font-size: 200px;
  font-weight: 300;
  text-align: center;

  @media (max-width: 1440px) {
    font-size: 180px;
    padding: 160px 0;
  }

  @media (max-width: 1024px) {
    font-size: 150px;
    padding: 150px 0;
  }

  @media (max-width: 768px) {
    font-size: 100px;
    padding: 120px 0;
  }

  @media (max-width: 480px) {
    font-size: 60px;
    padding: 80px 0;
  }

  @media (max-width: 320px) {
    font-size: 45px;
    padding: 60px 0;
  }
`;

export const ContactContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const ContactContent = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  font-size: 50px;
  font-weight: 50;
  line-height: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 700px;
    font-size: 45px;
    gap: 48px;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    font-size: 35px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    font-size: 25px;
    gap: 32px;
  }
`;

export const HoverEventTag = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;
