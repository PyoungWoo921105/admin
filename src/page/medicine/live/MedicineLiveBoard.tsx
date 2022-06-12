/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/medicine/live/MedicineLiveBoardTitleAndFilter';
import BoardContent from 'page/medicine/live/MedicineLiveBoardContent';

const MedicineLiveBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default MedicineLiveBoard;
