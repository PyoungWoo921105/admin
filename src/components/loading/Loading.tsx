import React from 'react';
import { observer } from 'mobx-react';

import LoadingAnimation from 'assets/animations/LoadingAnimation.svg';

import {
  LoadingFrame,
  LoadingComponent,
  LoadingImageComponent,
} from 'styles/components/loading/Loading';

const Loading = observer(() => {
  return (
    <LoadingFrame>
      <LoadingComponent>
        <LoadingImageComponent src={LoadingAnimation} />
      </LoadingComponent>
    </LoadingFrame>
  );
});

export default Loading;
