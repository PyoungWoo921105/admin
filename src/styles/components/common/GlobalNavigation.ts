/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const GlobalNavigationBarFrame = styled.div`
  display: flex;
  height: 40px;
  left: 0px;
  min-height: 40px;
  min-width: 320px;
  position: absolute;
  right: 0px;
  top: 0px;
`;
export const GlobalNavigationBarTitleFrame = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0px 10px 0px 10px;
  width: 100%;
`;
export const GlobalNavigationBarTitleComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const GlobalNavigationBarTitleMainFrame = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
export const GlobalNavigationBarTitleSubFrame = styled.div`
  align-items: center;
  display: flex;
  width: 40px;
`;
export const GlobalNavigationBarLogoImageFrame = styled.div`
  align-content: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  max-width: 100px;
  min-width: 100px;
  width: 100px;
`;
export const GlobalNavigationBarLogoImageComponent = styled.img`
  width: 100%;
`;
export const GlobalNavigationBarTitleTextFrame = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  min-width: 50px;
  width: 50px;
`;
export const GlobalNavigationBarTitleTextComponent = styled.span`
  color: #393939;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
export const GlobalNavigationBarShowContentImageFrame = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0px -2px 0px 0px;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
`;
export const GlobalNavigationBarShowContentImageComponent = styled.img`
  width: 100%;
`;
export const LocalNavigationBarShowContentImageFrame = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px -2px;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
`;
export const LocalNavigationBarShowContentImageComponent = styled.img`
  width: 100%;
`;
export const GlobalNavigationBarShortCutFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0px 5px 0px 5px;
  width: 100%;
`;
export const GlobalNavigationBarShortCutComponent = styled.div<CustomProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0px 10px 0px 0px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const GlobalNavigationBarShortCutTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '#393939')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  text-decoration-line: ${props => (props.textDecoration ? props.textDecoration : '')};
`;
export const GlobalNavigationBarContentComponentAnimation = keyframes`
  from{ 
    opacity: 0;
    transform: translateY(-10%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
    }
`;
export const GlobalNavigationBarContentOpeningComponent = styled.div`
  align-items: center;
  animation: ${GlobalNavigationBarContentComponentAnimation} 0.3s linear 0s 1 normal forwards;
  background: #393939;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 10;
`;
export const GlobalNavigationBarContentClosingComponent = styled.div`
  align-items: center;
  animation: ${GlobalNavigationBarContentComponentAnimation} 0.3s linear 0s 1 reverse forwards;
  background: #393939;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 10;
`;
export const GlobalNavigationBarContentTitlesComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-evenly;
  width: 100%;
`;
export const GlobalNavigationBarContentTitleComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#393939')};
  border: none;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  min-height: 40px;
  width: 100%;
`;
export const GlobalNavigationBarContentTitleTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const GlobalNavigationBarLogoutImageFrame = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  min-height: 30px;
  min-width: 30px;
  width: 30px;
`;
export const GlobalNavigationBarLogoutImageComponent = styled.img`
  width: 100%;
`;
