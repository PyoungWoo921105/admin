/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalBoardFrame } from 'styles/components/common/Frame';

import TreatmentManagementHistoryTitle from './TreatmentManagementHistoryTitle';

const TreatmentManagementHistoryBoard = observer(() => (
  <LocalBoardFrame>
    <TreatmentManagementHistoryTitle />
  </LocalBoardFrame>
));

export default TreatmentManagementHistoryBoard;
