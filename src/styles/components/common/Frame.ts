import styled from 'styled-components';

export const RootFrame = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: overlay;
`;
export const CommonFrame = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const BoardFrame = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
`;
