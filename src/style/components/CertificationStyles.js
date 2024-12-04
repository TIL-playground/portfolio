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
    width: 100%;
  }
`;

export const CertificationName = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const CertificationLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: white;
  margin: 0 10px;
`;

export const CertificationDate = styled.span`
  font-size: 20px;
`;
