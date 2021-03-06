/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
/* import HospitalLiveBoard from 'view/hospital/live/HospitalLiveBoard'; */
import HospitalHistoryBoard from 'view/hospital/history/HospitalHistoryBoard';
import HospitalRequestBoard from 'view/hospital/request/HospitalRequestBoard';

const HospitalBoard = observer(() => (
  <LocalBoardFrame>
    {/* <Route path="/hospital/live" component={HospitalLiveBoard} /> */}
    <Route path="/hospital/history" component={HospitalHistoryBoard} />
    <Route path="/hospital/request" component={HospitalRequestBoard} />
  </LocalBoardFrame>
));

export default HospitalBoard;
