/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import MedicineHistoryBoard from 'view/medicine/history/MedicineHistoryBoard';

const MedicineBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/medicine/history" component={MedicineHistoryBoard} />
  </LocalBoardFrame>
));

export default MedicineBoard;
