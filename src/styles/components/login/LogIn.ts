/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const LogInFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: fit-content;
`;
export const LogInComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  height: ${props => (props.height ? props.height : '')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const LogInTopFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const LogInTopComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
`;
export const LogInTopTitleImageFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
`;
export const LogInTopTitleImageComponent = styled.img<CustomProps>`
  height: 100%;
`;
export const LogInTopContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
`;
export const LogInTopContentTextComponent = styled.span<CustomProps>`
  color: rgb(57, 57, 57);
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
/*  */
const ComponentFrameAnimation = keyframes`
  from{ opacity: 0;
    transform: translateX(-10%);}
  to{opacity: 1;
    transform: translateX(0);}
`;
export const LogInMiddleFrame = styled.div<CustomProps>`
  animation: ${ComponentFrameAnimation} 0.3s linear 0s 1 normal forwards;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const LogInMiddleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const LogInMiddleContentComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const LogInMiddleContentInputFrame = styled.div<CustomProps>`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const LogInMiddleContentInputComponent = styled.input<CustomProps>`
  border: 1px solid rgb(224, 224, 224);
  border-radius: 4px;
  box-sizing: border-box;
  height: 50px;
  margin: 5px 0px 5px 0px;
  padding: 15px;
  width: 100%;
  ::placeholder {
    color: #a8a8a8;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 13px;
    font-style: normal;
    font-weight: normal;
  }
`;
export const LogInMiddleContentImageFrame = styled.div<CustomProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
`;
export const LogInMiddleContentImageComponent = styled.img<CustomProps>`
  height: 100%;
  width: 100%;
`;
export const LogInMiddleContentTextFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  margin: 5px 0px 5px 0px;
  min-height: 40px;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const LogInMiddleContentTextComponent = styled.span<CustomProps>`
  color: rgb(255, 59, 48);
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
/*  */
export const LogInBottomFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const LogInBottomComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0px 10px 0px 10px;
  position: relative;
`;
export const LogInBottomButtonFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '')};
  width: 100%;
`;
export const LogInBottomButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px 10px 10px 10px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  height: 50px;
  justify-content: center;
  margin: 5px 0px 5px 0px;
  width: 100%;
`;
export const LogInBottomTextFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  margin: ${props => (props.margin ? props.margin : '')};
  width: 100%;
`;
export const LogInBottomTextComponent = styled.span<CustomProps>`
  align-items: center;
  color: rgb(141, 141, 141);
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  margin: ${props => (props.margin ? props.margin : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  position: relative;
`;
