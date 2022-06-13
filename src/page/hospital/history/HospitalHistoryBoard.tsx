/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/hospital/history/HospitalHistoryBoardTitleAndFilter';
import BoardContent from 'page/hospital/history/HospitalHistoryBoardContent';

const HospitalHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default HospitalHistoryBoard;
