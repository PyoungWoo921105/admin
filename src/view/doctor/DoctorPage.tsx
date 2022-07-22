/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import DoctorNavigationBar from 'view/doctor/DoctorNavigationBar';
import DoctorBoard from 'view/doctor/DoctorBoard';

const DoctorPage = observer(() => (
  <LocalFrame>
    <DoctorNavigationBar />
    <DoctorBoard />
  </LocalFrame>
));

export default DoctorPage;
