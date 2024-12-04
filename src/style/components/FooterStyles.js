import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: snow;
  color: black;
  padding: 2rem 0;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.p`
  font: 0.75rem 'Pretendard', sans-serif;
  font-size: 1rem;
`;

export const BackToTopButton = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  
  &:hover {
    background-color: #4A4A4A;
  }
`;
