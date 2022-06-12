/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import MedicineHistoryBoard from 'page/medicine/history/MedicineHistoryBoard';
import MedicineLiveBoard from 'page/medicine/live/MedicineLiveBoard';

const MedicineBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/medicine/history" component={MedicineHistoryBoard} />
    <Route path="/medicine/live" component={MedicineLiveBoard} />
  </LocalBoardFrame>
));

export default MedicineBoard;
