/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import IndicatorHistoryBoard from 'page/indicator/history/IndicatorHistoryBoard';
/* import IndicatorLiveBoard from 'page/indicator/live/IndicatorLiveBoard'; */

const IndicatorBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/indicator/history" component={IndicatorHistoryBoard} />
    {/* <Route path="/indicator/live" component={IndicatorLiveBoard} /> */}
  </LocalBoardFrame>
));

export default IndicatorBoard;
