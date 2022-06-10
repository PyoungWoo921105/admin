/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';
import { CustomProps } from 'styles/interface/CustomProps';

export const StatisticFrame = styled.div`
  width: 100%;
`;
export const StatisticComponent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const StatisticElementFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: #fafafa;
  border: 1px solid #e5f7ef;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const StatisticElementComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const StatisticElementTitleFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const StatisticElementTitleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const StatisticElementTitleTextComponent = styled.span<CustomProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${props => (props.color ? props.color : '')};
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  width: ${props => (props.width ? props.width : '')};
`;

export const StatisticElementBoardFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const StatisticElementBoardComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const StatisticElementBoardTextComponent = styled.span<CustomProps>`
  align-items: center;
  border: none;
  border-radius: 4px;
  color: ${props => (props.color ? props.color : '')};
  flex-direction: row;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  width: ${props => (props.width ? props.width : '')};
`;
