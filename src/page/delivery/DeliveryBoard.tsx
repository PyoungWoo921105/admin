/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import DeliveryHistoryBoard from 'page/delivery/history/DeliveryHistoryBoard';
import DeliveryLiveBoard from 'page/delivery/live/DeliveryLiveBoard';
import DeliveryOperationBoard from 'page/delivery/operation/DeliveryOperationBoard';

const DeliveryBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/delivery/history" component={DeliveryHistoryBoard} />
    <Route path="/delivery/live" component={DeliveryLiveBoard} />
    <Route path="/delivery/operation" component={DeliveryOperationBoard} />
  </LocalBoardFrame>
));

export default DeliveryBoard;
