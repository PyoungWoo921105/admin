/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessLogFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: overlay;
  overflow-y: overlay;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const ProcessLogTypeComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  padding: 0px 0px 10px 0px;
  width: ${props => (props.width ? props.width : '')};
`;
export const ProcessLogComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  padding: 0px 0px 10px 0px;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
