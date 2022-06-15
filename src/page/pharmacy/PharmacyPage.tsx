/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import PharmacyNavigationBar from 'page/pharmacy/PharmacyNavigationBar';
import PharmacyBoard from 'page/pharmacy/PharmacyBoard';

const PharmacyPage = observer(() => (
  <LocalFrame>
    <PharmacyNavigationBar />
    <PharmacyBoard />
  </LocalFrame>
));

export default PharmacyPage;
