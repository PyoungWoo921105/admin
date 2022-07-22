/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { BoardFrame } from 'styles/components/common/Frame';

import BoardTitleAndFilter from 'view/delivery/operation/DeliveryOperationBoardTitleAndFilter';
import BoardContent from 'view/delivery/operation/DeliveryOperationBoardContent';

const DeliveryOperationBoard = observer(() => (
  <BoardFrame>
    <BoardTitleAndFilter />
    <BoardContent />
  </BoardFrame>
));

export default DeliveryOperationBoard;
