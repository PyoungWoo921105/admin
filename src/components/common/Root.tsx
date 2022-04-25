import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Loading from 'assets/animations/Loading.svg';

const RootFrame = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: overlay;
`;

const LoadingAnimationComponentFrame = styled.div`
  position: fixed;
  color: transparent;
`;
const LoadingAnimationComponent = styled.img`
  color: transparent;
`;

const OutlineComponent = observer(() => {
  return (
    <RootFrame className="RootFrame">
      <LoadingAnimationComponentFrame className="LoadingAnimationComponentFrame">
        <LoadingAnimationComponent className="LoadingAnimationComponent" src={Loading} />
      </LoadingAnimationComponentFrame>
      ;
    </RootFrame>
  );
});

export default OutlineComponent;
