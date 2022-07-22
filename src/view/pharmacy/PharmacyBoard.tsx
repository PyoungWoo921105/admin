/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
/* import PharmacyLiveBoard from 'view/pharmacy/live/PharmacyLiveBoard'; */
import PharmacyHistoryBoard from 'view/pharmacy/history/PharmacyHistoryBoard';

const PharmacyBoard = observer(() => (
  <LocalBoardFrame>
    {/* <Route path="/pharmacy/live" component={PharmacyLiveBoard} /> */}
    <Route path="/pharmacy/history" component={PharmacyHistoryBoard} />
  </LocalBoardFrame>
));

export default PharmacyBoard;
