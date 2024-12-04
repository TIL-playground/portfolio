import styled from 'styled-components';

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1044.05px;

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

export const IntroduceTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const PointBackgroundColor = styled.span`
  background-color: #51abff;
  color: white;
  padding: 0.2rem 0.4rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;

  @media (max-width: 480px) {
    padding: 0.15rem 0.3rem;
  }
`;

export const IntroduceContent = styled.div`
  padding-top: 2.8rem;
  font-size: 1.25rem;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    max-width: 90%;
    padding-top: 2.4rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding-top: 1.2rem;
    line-height: 1.5;
  }
`;

export const PointColor = styled.span`
  color: #51abff;
  font-weight: 500;
`;
