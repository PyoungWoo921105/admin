/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import HospitalHistoryBoard from 'page/hospital/history/HospitalHistoryBoard';
/* import HospitalLiveBoard from 'page/hospital/live/HospitalLiveBoard'; */

const HospitalBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/hospital/history" component={HospitalHistoryBoard} />
    {/* <Route path="/hospital/live" component={HospitalLiveBoard} /> */}
  </LocalBoardFrame>
));

export default HospitalBoard;
