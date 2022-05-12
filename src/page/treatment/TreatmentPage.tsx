/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { TreatmentFrame } from 'styles/components/treatment/Treatment';

import TreatmentNavigationBar from 'page/treatment/TreatmentNavigationBar';

const TreatmentPage = observer(() => (
  <TreatmentFrame>
    <TreatmentNavigationBar />
  </TreatmentFrame>
));

export default TreatmentPage;
