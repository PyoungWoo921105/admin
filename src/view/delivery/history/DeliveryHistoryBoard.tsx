/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/delivery/history/DeliveryHistoryBoardTitleAndFilter';
import BoardContent from 'view/delivery/history/DeliveryHistoryBoardContent';

const DeliveryHistoryBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default DeliveryHistoryBoard;
