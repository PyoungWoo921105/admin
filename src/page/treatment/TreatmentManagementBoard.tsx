/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import TreatmentManagementHistoryBoard from 'page/treatment/history/TreatmentManagementHistoryBoard';

const TreatmentManagementBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/treatment_management/history" component={TreatmentManagementHistoryBoard} />
  </LocalBoardFrame>
));

export default TreatmentManagementBoard;
