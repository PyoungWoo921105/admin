/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessGaugeFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`;
export const ProcessGaugeComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  overflow-y: overlay;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const ProcessGaugeElementComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 35px;
  justify-content: center;
  min-height: 35px;
  width: 210px;
`;
export const ProcessGaugeElementTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  border-right: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 35px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 35px;
`;
export const ProcessGaugeElementTitleTextFrame = styled.div<CustomProps>`
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
export const ProcessGaugeElementTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessGaugeElementContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  border-left: ${props => (props.border ? props.border : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 35px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 35px;
`;
export const ProcessGaugeElementContentTextFrame = styled.div<CustomProps>`
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
export const ProcessGaugeElementContentTextComponent = styled.span<CustomProps>`
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
