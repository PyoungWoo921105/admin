import styled, { keyframes } from 'styled-components';

export const HomeFrameAnimation = keyframes`
  from{ 
    opacity: 0;
    transform: translateX(-5%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
    }
`;

export const HomeFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const LogoImageIconFrame = styled.div`
  animation: ${HomeFrameAnimation} 0.3s linear 0s 1 normal forwards;
  cursor: pointer;
  max-width: 400px;
  min-width: 100px;
  padding: 0px 20px 0px 20px;
`;
export const LogoImageIconComponent = styled.img`
  width: 100%;
`;
