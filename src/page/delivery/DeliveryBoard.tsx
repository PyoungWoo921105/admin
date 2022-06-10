/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { LocalBoardFrame } from 'styles/components/common/Frame';
import DeliveryHistoryBoard from 'page/delivery/history/DeliveryHistoryBoard';

const DeliveryBoard = observer(() => (
  <LocalBoardFrame>
    <Route path="/delivery/history" component={DeliveryHistoryBoard} />
  </LocalBoardFrame>
));

export default DeliveryBoard;
