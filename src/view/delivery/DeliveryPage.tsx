/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import DeliveryNavigationBar from 'view/delivery/DeliveryNavigationBar';
import DeliveryBoard from 'view/delivery/DeliveryBoard';

const DeliveryPage = observer(() => (
  <LocalFrame>
    <DeliveryNavigationBar />
    <DeliveryBoard />
  </LocalFrame>
));

export default DeliveryPage;
