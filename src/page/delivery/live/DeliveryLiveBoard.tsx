/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'page/delivery/live/DeliveryLiveBoardTitleAndFilter';
import BoardContent from 'page/delivery/live/DeliveryLiveBoardContent';

const DeliveryLiveBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default DeliveryLiveBoard;
