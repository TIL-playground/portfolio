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
`;

export const Title1 = styled.div`
  padding: 180px 0;
  width: 100%;
  font-size: 200px;
  font-weight: 300;
  text-align: center;
`;

export const ContactContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
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
`;

export const HoverEventTag = styled.div`
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
