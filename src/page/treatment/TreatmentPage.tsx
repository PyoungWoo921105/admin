/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import TreatmentNavigationBar from 'page/treatment/TreatmentNavigationBar';
import TreatmentBoard from 'page/treatment/TreatmentBoard';

const TreatmentPage = observer(() => (
  <LocalFrame>
    <TreatmentNavigationBar />
    <TreatmentBoard />
  </LocalFrame>
));

export default TreatmentPage;
