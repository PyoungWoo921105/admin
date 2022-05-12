/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { GlobalFrame } from 'styles/components/common/Frame';

import GlobalNavigationBar from 'components/common/GlobalNavigationBar';
import Board from 'components/common/Board';

const Common = observer(() => (
  <GlobalFrame>
    <GlobalNavigationBar />
    <Board />
  </GlobalFrame>
));

export default Common;
