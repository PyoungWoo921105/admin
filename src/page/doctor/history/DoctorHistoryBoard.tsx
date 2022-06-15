/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/doctor/history/DoctorHistoryBoardTitleAndFilter';
import BoardContent from 'page/doctor/history/DoctorHistoryBoardContent';

const DoctorHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default DoctorHistoryBoard;
