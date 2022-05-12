/*
 * Copyright (c) 2022 Medir Inc.
 */

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
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0px 10px 0px 10px;
  width: 100%;
`;
export const LogoImageIconFrame = styled.div`
  align-items: center;
  animation: ${HomeFrameAnimation} 0.3s linear 0s 1 normal forwards;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const LogoImageIconComponent = styled.img`
  cursor: pointer;
  max-width: 200px;
  width: 100%;
`;
