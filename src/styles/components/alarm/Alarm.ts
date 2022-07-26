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
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: 10px 10px 10px 10px;
  cursor: ${props => (props.cursor ? props.cursor : '')};
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
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  padding: 10px 30px 10px 30px;
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
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
`;
export const AlarmTopExitComponent = styled.div<CustomProps>`
  cursor: pointer;
  height: 20px;
  margin: 0px 0px 0px 10px;
  min-height: 20px;
  min-width: 20px;
  width: 20px;
`;
export const AlarmTopExitImageComponent = styled.img<CustomProps>`
  height: 100%;
  width: 100%;
`;
/*  */
export const AlarmBottomFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'transparent')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  padding: 10px 30px 10px 30px;
`;
export const AlarmBottomComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  position: relative;
  width: 100%;
`;
export const AlarmBottomContentFrame = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmBottomContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  width: 100%;
`;
export const AlarmBottomContentTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
`;
