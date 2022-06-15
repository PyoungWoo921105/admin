/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import PharmacyHistoryBoard from 'page/pharmacy/history/PharmacyHistoryBoard';
/* import PharmacyLiveBoard from 'page/pharmacy/live/PharmacyLiveBoard'; */

const PharmacyBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/pharmacy/history" component={PharmacyHistoryBoard} />
    {/* <Route path="/pharmacy/live" component={PharmacyLiveBoard} /> */}
  </LocalBoardFrame>
));

export default PharmacyBoard;
