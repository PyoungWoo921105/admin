/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import TreatmentNavigationBar from 'page/treatment/TreatmentNavigationBar';
import TreatmentManagementBoard from 'page/treatment/TreatmentManagementBoard';

const TreatmentPage = observer(() => (
  <LocalFrame>
    <TreatmentNavigationBar />
    <TreatmentManagementBoard />
  </LocalFrame>
));

export default TreatmentPage;
