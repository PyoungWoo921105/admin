/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/treatment/live/TreatmentLiveBoardTitleAndFilter';
import BoardContent from 'page/treatment/live/TreatmentLiveBoardContent';

const TreatmentLiveBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default TreatmentLiveBoard;
