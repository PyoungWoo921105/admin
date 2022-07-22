/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import PromotionNavigationBar from 'view/promotion/PromotionNavigationBar';
import PromotionBoard from 'view/promotion/PromotionBoard';

const PromotionPage = observer(() => (
  <LocalFrame>
    <PromotionNavigationBar />
    <PromotionBoard />
  </LocalFrame>
));

export default PromotionPage;
