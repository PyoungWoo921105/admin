/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import SettlementNavigationBar from 'page/settlement/SettlementNavigationBar';
import SettlementBoard from 'page/settlement/SettlementBoard';

const SettlementPage = observer(() => (
  <LocalFrame>
    <SettlementNavigationBar />
    <SettlementBoard />
  </LocalFrame>
));

export default SettlementPage;
