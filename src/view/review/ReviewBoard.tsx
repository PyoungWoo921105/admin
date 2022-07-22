/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import ReviewHistoryBoard from 'view/review/history/ReviewHistoryBoard';
/* import ReviewLiveBoard from 'view/review/live/ReviewLiveBoard'; */

const ReviewBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/review/history" component={ReviewHistoryBoard} />
    {/* <Route path="/review/live" component={ReviewLiveBoard} /> */}
  </LocalBoardFrame>
));

export default ReviewBoard;
