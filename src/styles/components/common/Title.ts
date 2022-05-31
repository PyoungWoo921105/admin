/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

export const TitleFrame = styled.div`
  position: absolute;
`;

export const GlobalFrame = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: column;
  left: 0px;
  min-width: 320px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const GlobalBoardFrame = styled.div`
  bottom: 0px;
  display: flex;
  left: 0px;
  min-height: 100px;
  position: absolute;
  right: 0px;
  top: 50px;
`;

export const LocalFrame = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const LocalBoardFrame = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
