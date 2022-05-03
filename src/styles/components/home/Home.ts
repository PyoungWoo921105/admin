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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogoImageIconFrame = styled.div`
  animation: ${HomeFrameAnimation} 0.3s linear 0s 1 normal forwards;
  min-width: 100px;
  max-width: 400px;
  padding: 0px 20px 0px 20px;
`;
export const LogoImageIconComponent = styled.img`
  width: 100%;
`;
