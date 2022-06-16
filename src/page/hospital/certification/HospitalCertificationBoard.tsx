/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/hospital/certification/HospitalCertificationBoardTitleAndFilter';
import BoardContent from 'page/hospital/certification/HospitalCertificationBoardContent';

const HospitalCertificationBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default HospitalCertificationBoard;
