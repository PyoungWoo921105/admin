/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import PromotionHistoryBoard from 'view/promotion/history/PromotionHistoryBoard';
/* import PromotionLiveBoard from 'view/promotion/live/PromotionLiveBoard'; */

const PromotionBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/promotion/history" component={PromotionHistoryBoard} />
    {/* <Route path="/promotion/live" component={PromotionLiveBoard} /> */}
  </LocalBoardFrame>
));

export default PromotionBoard;
