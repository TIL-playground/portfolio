import styled from 'styled-components';

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 2rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1044.05px;
`;

export const IntroduceTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`;

export const PointBackgroundColor = styled.span`
  background-color: #51abff;
  color: white;
  padding: 0.2rem 0.4rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

export const IntroduceContent = styled.div`
  padding-top: 2.8rem;
  font-size: 1.25rem;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 1.5rem;
  }
`;

export const PointColor = styled.span`
  color: #51abff;
  font-weight: 500;
`;
