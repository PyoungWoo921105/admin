import styled from 'styled-components';

export const LoadingFrame = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 999;
  background-color: rgba(102, 102, 102, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoadingComponent = styled.div`
  position: fixed;
  width: 300px;
  height: 300px;
`;
export const LoadingImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
