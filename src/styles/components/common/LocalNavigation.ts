/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export interface LocalState {
  initiate: boolean;
}
export const LocalNavigationBarFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 100px;
  width: 100px;
`;
export const LocalNavigationBarTitleFrame = styled.div`
  background-color: #00b264;
  height: 40px;
  width: 100%;
`;
export const LocalNavigationBarTitleComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 100%;
`;
export const LocalNavigationBarTitleTextFrame = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`;
export const LocalNavigationBarTitleTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 13px;
  font-style: normal;
  font-weight: normal;
`;
export const LocalNavigationBarContentFrame = styled.div`
  background: #14c276;
  height: 100%;
  width: 100%;
`;
export const LocalNavigationBarContentComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 100%;
`;
export const LocalNavigationBarContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const LocalNavigationBarContentTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
`;
