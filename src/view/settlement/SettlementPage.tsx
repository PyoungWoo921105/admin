/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import SettlementNavigationBar from 'view/settlement/SettlementNavigationBar';
import SettlementBoard from 'view/settlement/SettlementBoard';

const SettlementPage = observer(() => (
  <LocalFrame>
    <SettlementNavigationBar />
    <SettlementBoard />
  </LocalFrame>
));

export default SettlementPage;
