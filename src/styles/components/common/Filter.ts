/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';
import { CustomProps } from 'styles/interface/CustomProps';

export const FilterFrame = styled.div`
  background-color: #e5f7ef;
  width: 100%;
`;
export const FilterComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const FilterElementFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: #00b264;
  border: 1px solid #e5f7ef;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementTitleFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementTitleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const FilterElementTitleTextComponent = styled.span<CustomProps>`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;

export const FilterElementBoardFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const FilterElementBoardInputComponent = styled.input<CustomProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardSelectComponent = styled.select<CustomProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardOptionComponent = styled.option<CustomProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardSelectedComponent = styled.div<CustomProps>`
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: ${props => (props.margin ? props.margin : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardSelectedTextFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 30px;
  margin: 0px 10px 0px 0px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardSelectedTextComponent = styled.span<CustomProps>`
  color: #000000;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  white-space: pre;
`;
export const FilterElementBoardSelectedImageFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 30px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const FilterElementBoardSelectedImageComponent = styled.img<CustomProps>`
  width: 100%;
`;
