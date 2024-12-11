import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Pretendard", sans-serif;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const Title1 = styled.div`
  padding: 120px 0;
  width: 100%;
  font-size: 180px;
  font-weight: 300;
  text-align: center;
  transition: all 0.3s ease-in-out;
  letter-spacing: -2px;

  @media (max-width: 1440px) {
    font-size: 160px;
    padding: 100px 0;
  }

  @media (max-width: 1024px) {
    font-size: 130px;
    padding: 90px 0;
  }

  @media (max-width: 768px) {
    font-size: 90px;
    padding: 80px 0;
  }

  @media (max-width: 480px) {
    font-size: 50px;
    padding: 60px 0;
  }

  @media (max-width: 320px) {
    font-size: 40px;
    padding: 40px 0;
  }
`;

export const ContactContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 80px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: white;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

export const ContactContent = styled.div`
  width: 100%;
  max-width: 1000px;
  text-align: left;
  font-size: 45px;
  font-weight: 200;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  gap: 48px;
  box-sizing: border-box;
  padding: 0 40px;
  transition: all 0.3s ease-in-out;

  a {
    color: white;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease-in-out;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: white;
      transition: width 0.3s ease-in-out;
    }

    &:hover {
      opacity: 0.8;
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    max-width: 800px;
    font-size: 40px;
    gap: 40px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
    font-size: 30px;
    gap: 32px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 22px;
    gap: 24px;
    padding: 0 20px;
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
