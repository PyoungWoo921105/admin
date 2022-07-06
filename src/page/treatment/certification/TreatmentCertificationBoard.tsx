/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/treatment/certification/TreatmentCertificationBoardTitleAndFilter';
import BoardContent from 'page/treatment/certification/TreatmentCertificationBoardContent';

const TreatmentCertificationBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default TreatmentCertificationBoard;
