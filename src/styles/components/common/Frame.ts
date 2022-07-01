/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

export const RootFrame = styled.div`
  height: 100%;
  position: fixed;
  width: 100%;
`;

export const GlobalFrame = styled.div`
  height: 100%;
  width: 100%;
`;

export const GlobalBoardFrame = styled.div`
  bottom: 0px;
  display: flex;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 40px;
`;

export const LocalFrame = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LocalBoardFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 220px;
  width: 100%;
`;

export const BoardFrame = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const BoardTitleAndFilterFrame = styled.div`
  background-color: #e5f7ef;
  overflow-y: overlay;
`;
export const DynamicBoardContentFrame = styled.div`
  flex-grow: 1;
  height: 0px;
  overflow-y: overlay;
`;
export const StaticBoardContentFrame = styled.div``;
