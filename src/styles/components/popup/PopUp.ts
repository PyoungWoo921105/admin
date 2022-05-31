/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const PopUpFrame = styled.div`
  align-items: center;
  background-color: rgba(102, 102, 102, 0.5);
  bottom: 0px;
  display: flex;
  justify-content: center;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 99;
`;
export const PopUpComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 10px 10px;
  margin: 0px 10px 0px 10px;
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  position: absolute;
`;
/*  */
export const PopUpTopFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;
export const PopUpTopComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const PopUpTopTitleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const PopUpTopTitleTextComponent = styled.span<CustomProps>`
  color: #000000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
export const PopUpTopExitComponent = styled.div<CustomProps>`
  cursor: pointer;
  height: 100%;
  position: absolute;
  right: 20px;
  width: 15px;
`;
export const PopUpTopExitImageComponent = styled.img<CustomProps>`
  height: 100%;
  width: 100%;
`;
/*  */
export const PopUpMiddleFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 70px;
  width: 100%;
`;
export const PopUpMiddleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  padding: ${props => (props.padding ? props.padding : '')};
  position: relative;
  width: 100%;
`;
export const PopUpMiddleContentFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const PopUpMiddleContentComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const PopUpMiddleContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '')};
  width: 100%;
`;
export const PopUpMiddleContentTextComponent = styled.span<CustomProps>`
  color: #000000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
/*  */
export const PopUpBottomFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;
export const PopUpBottomComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const PopUpBottomButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0, 178, 100)'};
  border: none;
  border-radius: 0px 0px 10px 10px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const PopUpBottomButtonLeftComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(100, 100, 100)'};
  border: none;
  border-radius: 0px 0px 0px 10px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const PopUpBottomButtonRightComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0, 178, 100)'};
  border: none;
  border-radius: 0px 0px 10px 0px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
/*  */
export const PopUpBorderComponent = styled.div`
  border-bottom: 1px solid rgb(224, 224, 224);
  margin: 0px 15px;
`;
