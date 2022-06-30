/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessStepFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  margin: 0px 5px 0px 0px;
  max-height: ${props => (props.maxHeight ? props.maxHeight : '')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;

export default ProcessStepFrame;
