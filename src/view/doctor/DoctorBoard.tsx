/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import DoctorHistoryBoard from 'view/doctor/history/DoctorHistoryBoard';
/* import DoctorLiveBoard from 'view/doctor/live/DoctorLiveBoard'; */

const DoctorBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/doctor/history" component={DoctorHistoryBoard} />
    {/* <Route path="/doctor/live" component={DoctorLiveBoard} /> */}
  </LocalBoardFrame>
));

export default DoctorBoard;
