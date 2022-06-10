/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import MedicineNavigationBar from 'page/medicine/MedicineNavigationBar';
import MedicineBoard from 'page/medicine/MedicineBoard';

const MedicinePage = observer(() => (
  <LocalFrame>
    <MedicineNavigationBar />
    <MedicineBoard />
  </LocalFrame>
));

export default MedicinePage;
