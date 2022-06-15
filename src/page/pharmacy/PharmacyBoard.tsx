/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/pharmacy/history/PharmacyHistoryBoardTitleAndFilter';
import BoardContent from 'page/pharmacy/history/PharmacyHistoryBoardContent';

const PharmacyHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default PharmacyHistoryBoard;
