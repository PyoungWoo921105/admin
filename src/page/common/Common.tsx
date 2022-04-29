import React from 'react';
import { observer } from 'mobx-react';

import { CommonFrame } from 'styles/components/common/Frame';

import GlobalNavigationBar from 'components/common/GlobalNavigationBar';
import Board from 'components/common/Board';

const Common = observer(() => {
  return (
    <CommonFrame>
      <GlobalNavigationBar />
      <Board />
    </CommonFrame>
  );
});

export default Common;
