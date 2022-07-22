/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessPopUpFrame = styled.div`
  background-color: rgba(102, 102, 102, 0.5);
  bottom: 0px;
  display: flex;
  left: 0px;
  overflow: overlay;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 100;
`;
export const ProcessPopUpComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 10px 10px;
  height: fit-content;
  margin: auto;
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  position: relative;
`;
/*  */
export const ProcessPopUpTopFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;
export const ProcessPopUpTopComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const ProcessPopUpTopTitleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: 100%;
`;
export const ProcessPopUpTopTitleTextComponent = styled.span<CustomProps>`
  color: #000000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessPopUpTopExitComponent = styled.div<CustomProps>`
  cursor: pointer;
  height: 100%;
  position: absolute;
  right: 15px;
  width: 10px;
`;
export const ProcessPopUpTopExitImageComponent = styled.img<CustomProps>`
  height: 100%;
  width: 100%;
`;
/*  */
export const ProcessPopUpMiddleFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 70px;
  width: 100%;
`;
export const ProcessPopUpMiddleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  padding: ${props => (props.padding ? props.padding : '')};
  position: relative;
  width: 100%;
`;
export const ProcessPopUpMiddleContentFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const ProcessPopUpMiddleContentComponent = styled.div<CustomProps>`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  width: 100%;
`;
/*  */
export const ProcessPopUpMiddleContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '')};
  width: 100%;
`;
export const ProcessPopUpMiddleContentTextComponent = styled.span<CustomProps>`
  color: #000000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
/*  */
/* export const ProcessPopUpBottomFrame = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
`;
export const ProcessPopUpBottomComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
`;
export const ProcessPopUpBottomButtonComponent = styled.button<CustomProps>`
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
export const ProcessPopUpBottomButtonLeftComponent = styled.button<CustomProps>`
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
export const ProcessPopUpBottomButtonRightComponent = styled.button<CustomProps>`
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
`; */
export const ProcessPopUpBorderComponent = styled.div`
  border-bottom: 1px solid #e3e3e3;
  margin: 0px 15px;
`;
