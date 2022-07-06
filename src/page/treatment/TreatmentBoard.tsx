/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import TreatmentHistoryBoard from 'page/treatment/history/TreatmentHistoryBoard';
import TreatmentCertificationBoard from 'page/treatment/certification/TreatmentCertificationBoard';

const TreatmentBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/treatment/history" component={TreatmentHistoryBoard} />
    <Route path="/treatment/certification" component={TreatmentCertificationBoard} />
  </LocalBoardFrame>
));

export default TreatmentBoard;
