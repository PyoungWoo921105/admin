/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalBoardFrame } from 'styles/components/common/Frame';

import BoardTitle from '../../../components/common/BoardTitle';

const TreatmentManagementHistoryBoard = observer(() => (
  <LocalBoardFrame>
    <BoardTitle title="진료 내역" />
  </LocalBoardFrame>
));

export default TreatmentManagementHistoryBoard;
