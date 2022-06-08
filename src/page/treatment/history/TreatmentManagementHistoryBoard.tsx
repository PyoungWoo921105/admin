/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/treatment/history/TreatmentManagementHistoryBoardTitleAndFilter';

const TreatmentManagementHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
  </BoardFrame>
));

export default TreatmentManagementHistoryBoard;
