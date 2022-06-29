/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessControlFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const ProcessControlComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  overflow-y: overlay;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const ProcessControlElementComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  box-sizing: border-box;
  cursor: ${props => (props.cursor ? props.cursor : '')};
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  margin: 5px 0px 5px 0px;
  min-height: 40px;
  width: 210px;
`;
export const ProcessControlElementTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  border-right: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 40px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 40px;
`;
export const ProcessControlElementTitleTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessControlElementTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessControlElementContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  border-left: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 40px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 40px;
`;
export const ProcessControlElementContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessControlElementContentTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/*  */
