/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
/* import HospitalLiveBoard from 'page/hospital/live/HospitalLiveBoard'; */
import HospitalHistoryBoard from 'page/hospital/history/HospitalHistoryBoard';
import HospitalCertificationBoard from 'page/hospital/certification/HospitalCertificationBoard';
/* import HospitalRequestBoard from 'page/hospital/request/HospitalRequestBoard'; */

const HospitalBoard = observer(() => (
  <LocalBoardFrame>
    {/* <Route path="/hospital/live" component={HospitalLiveBoard} /> */}
    <Route path="/hospital/history" component={HospitalHistoryBoard} />
    <Route path="/hospital/certification" component={HospitalCertificationBoard} />
    {/* <Route path="/hospital/request" component={HospitalRequestBoard} /> */}
  </LocalBoardFrame>
));

export default HospitalBoard;
