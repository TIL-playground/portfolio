import styled from 'styled-components';

export const CertificationContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  justify-content: space-between;
  background-color: black;
  width: 800px;
  color: white;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  will-change: transform, background-color;

  &:hover {
    background-color: #4A4A4A;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 12px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CertificationName = styled.span`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const CertificationLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: white;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 0 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 5px 0;
  }
`;

export const CertificationDate = styled.span`
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;
