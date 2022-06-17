/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/hospital/request/HospitalRequestBoardTitleAndFilter';
import BoardContent from 'page/hospital/request/HospitalRequestBoardContent';

const HospitalRequestBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default HospitalRequestBoard;
