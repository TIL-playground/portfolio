import styled from 'styled-components';

export const OpenSourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 150px;
`;

export const OpenSourceItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  color: white;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  will-change: transform, background-color;

  &:hover {
    background-color: #4A4A4A;
    transform: scale(1.05);
  }
`;

export const OpenSourceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RepoName = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.span`
  font-size: 18px;
  color: #BEBEBE;
`;

export const PRLink = styled.a`
  font-size: 16px;
  color: #51abff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
