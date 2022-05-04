import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const LocationNavigationBarFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
`;
export const LocationNavigationBarTitleFrame = styled.div`
  align-items: center;
  background: #00b264;
  display: flex;
  min-height: 40px;
  width: 80px;
`;
export const LocationNavigationBarContentFrame = styled.div`
  align-items: center;
  background: #14c276;
  display: flex;
  height: 100%;
  width: 80px;
`;
export const LocationNavigationBarTitleComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const LocationNavigationBarTitleTextFrame = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
export const LocationNavigationBarTitleTextComponent = styled.div`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
