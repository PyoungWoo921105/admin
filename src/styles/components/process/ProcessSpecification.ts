/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessSpecificationFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: overlay;
  padding: 0px 0px 0px 0px;
  width: 100%;
`;
export const ProcessSpecificationTypeComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  padding: 5px 0px 5px 0px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessSpecificationComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  padding: 5px 0px 5px 0px;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const ProcessSpecificationElementFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 35px;
  min-height: 35px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessSpecificationElementComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 35px;
  min-height: 35px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessSpecificationElementTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 35px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 35px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessSpecificationElementTitleTextFrame = styled.div<CustomProps>`
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
export const ProcessSpecificationElementTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessSpecificationElementContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 35px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 35px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessSpecificationElementContentTextFrame = styled.div<CustomProps>`
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
export const ProcessSpecificationElementContentTextComponent = styled.span<CustomProps>`
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
