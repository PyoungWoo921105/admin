/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessConverterFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
`;
export const ProcessConverterComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const ProcessConverterElementComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: ${props => (props.cursor ? props.cursor : '')};
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  min-height: 40px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessConverterElementTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 40px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 40px;
`;
export const ProcessConverterElementTitleTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
`;
export const ProcessConverterElementTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
/*  */
