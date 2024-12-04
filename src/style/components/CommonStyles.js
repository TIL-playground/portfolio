import styled from 'styled-components';

export const Line = styled.div`
  width: 630px;
  height: 1.5px;
  background-color: #DFDCDC;
`;

export const CustomLine = styled(Line)`
  width: 100%;
  max-width: 630px;
`;

export const Toast = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  position: fixed;
  backdrop-filter: blur(4px);
  border-radius: 8px;
  z-index: 100;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  font-size: 18px;
  color: white;
  opacity: 0;
  animation: upFadeAway 4s ease-in-out;

  @keyframes upFadeAway {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    20% {
      transform: translateX(-50%) translateY(-2px);
      opacity: 1;
    }
    80% {
      transform: translateX(-50%) translateY(-2px);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(10px);
      opacity: 0;
    }
  }
`;

export const BlackBlock = styled.div`
  color: snow;
  background-color: black;
`;
