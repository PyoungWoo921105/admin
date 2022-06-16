/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import IndicatorNavigationBar from 'page/indicator/IndicatorNavigationBar';
import IndicatorBoard from 'page/indicator/IndicatorBoard';

const IndicatorPage = observer(() => (
  <LocalFrame>
    <IndicatorNavigationBar />
    <IndicatorBoard />
  </LocalFrame>
));

export default IndicatorPage;
