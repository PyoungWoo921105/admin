/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/treatment/history/TreatmentHistoryBoardTitleAndFilter';
import BoardContent from 'view/treatment/history/TreatmentHistoryBoardContent';

const TreatmentHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default TreatmentHistoryBoard;
