/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import PharmacyNavigationBar from 'view/pharmacy/PharmacyNavigationBar';
import PharmacyBoard from 'view/pharmacy/PharmacyBoard';

const PharmacyPage = observer(() => (
  <LocalFrame>
    <PharmacyNavigationBar />
    <PharmacyBoard />
  </LocalFrame>
));

export default PharmacyPage;
