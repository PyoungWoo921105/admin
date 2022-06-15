/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import SettlementHistoryBoard from 'page/settlement/history/SettlementHistoryBoard';
/* import SettlementLiveBoard from 'page/settlement/live/SettlementLiveBoard'; */

const SettlementBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/settlement/history" component={SettlementHistoryBoard} />
    {/* <Route path="/settlement/live" component={SettlementLiveBoard} /> */}
  </LocalBoardFrame>
));

export default SettlementBoard;
