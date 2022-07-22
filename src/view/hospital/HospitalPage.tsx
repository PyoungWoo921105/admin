/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import HospitalNavigationBar from 'view/hospital/HospitalNavigationBar';
import HospitalBoard from 'view/hospital/HospitalBoard';

const HospitalPage = observer(() => (
  <LocalFrame>
    <HospitalNavigationBar />
    <HospitalBoard />
  </LocalFrame>
));

export default HospitalPage;
