/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/doctor/history/DoctorHistoryBoardTitleAndFilter';
import BoardContent from 'view/doctor/history/DoctorHistoryBoardContent';

const DoctorHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default DoctorHistoryBoard;
