/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/review/history/ReviewHistoryBoardTitleAndFilter';
import BoardContent from 'page/review/history/ReviewHistoryBoardContent';

const ReviewHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default ReviewHistoryBoard;
