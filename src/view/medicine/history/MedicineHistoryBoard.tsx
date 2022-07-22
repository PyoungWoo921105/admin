/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/medicine/history/MedicineHistoryBoardTitleAndFilter';
import BoardContent from 'view/medicine/history/MedicineHistoryBoardContent';

const MedicineHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default MedicineHistoryBoard;
