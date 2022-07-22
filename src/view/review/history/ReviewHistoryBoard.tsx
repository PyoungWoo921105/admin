/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/review/history/ReviewHistoryBoardTitleAndFilter';
import BoardContent from 'view/review/history/ReviewHistoryBoardContent';

const ReviewHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default ReviewHistoryBoard;
