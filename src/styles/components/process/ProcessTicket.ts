/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const ProcessTicketFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0px 10px 0px;
  width: 100%;
`;
export const ProcessTicketComponent = styled.div<CustomProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.height ? props.height : '')};
  overflow-y: overlay;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
export const ProcessTicketElementComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: center;
  min-height: 80px;
  width: 210px;
`;
export const ProcessTicketElementTitleComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 80px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 80px;
`;
export const ProcessTicketElementTitleTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
`;
export const ProcessTicketElementTitleTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessTicketElementContentComponent = styled.div<CustomProps>`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 80px;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: 80px;
`;
export const ProcessTicketElementContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
`;
export const ProcessTicketElementContentTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
export const ProcessTicketElementContentButtonFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${props => (props.height ? props.height : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
`;
export const ProcessTicketElementContentButtonComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#000000')};
  border: none;
  border-radius: 10px;
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  padding: 5px 10px 5px 10px;
  text-align: center;
  width: ${props => (props.width ? props.width : '')};
`;
/*  */
