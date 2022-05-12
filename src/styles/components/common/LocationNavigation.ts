/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export interface LocationState {
  initiate: boolean;
}
export const LocationNavigationBarFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 80px;
`;
export const LocationNavigationBarTitleFrame = styled.div`
  background-color: #00b264;
`;
export const LocationNavigationBarTitleComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 100%;
`;
export const LocationNavigationBarTitleTextFrame = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`;
export const LocationNavigationBarTitleTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
`;
export const LocationNavigationBarContentFrame = styled.div`
  background: #14c276;
  height: 100%;
`;
export const LocationNavigationBarContentComponent = styled.div<CustomProps>`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 40px;
  width: 100%;
`;
export const LocationNavigationBarContentTextFrame = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const LocationNavigationBarContentTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
`;
