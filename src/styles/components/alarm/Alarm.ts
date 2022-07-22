/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const AlarmFrame = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 9000;
`;
const AlarmComponentAnimation = keyframes`
from {transform: translateX(100%);}
  to {transform: translateX(0);}
`;
export const AlarmComponent = styled.div<CustomProps>`
  animation: ${AlarmComponentAnimation} 1s;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 10px 10px;
  height: fit-content;
  margin-bottom: 20px;
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  position: relative;
  transition: transform 10s ease-in-out;
`;
/*  */
export const AlarmTopFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  padding: 0px 30px 0px 30px;
`;
export const AlarmTopComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  position: relative;
  width: 100%;
`;
export const AlarmTopTitleFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmTopTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmTopTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
export const AlarmTopExitComponent = styled.div<CustomProps>`
  cursor: pointer;
  height: 20px;
  margin: 0px 0px 0px 10px;
  width: 20px;
`;
export const AlarmTopExitImageComponent = styled.img<CustomProps>`
  height: 100%;
  width: 100%;
`;
/*  */
export const AlarmMiddleFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  padding: 0px 30px 0px 30px;
`;
export const AlarmMiddleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  position: relative;
  width: 100%;
`;
export const AlarmMiddleContentFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmMiddleContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmMiddleContentTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
