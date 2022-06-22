/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import {
  ProcessStepFrame,
  ProcessControlFrame,
  ProcessControlComponent,
} from 'styles/components/process/ProcessStep';

import ProcessTicket from './ProcessTicket';
import ProcessGauge from './ProcessGauge';

const ProcessStep = observer(() => (
  <ProcessStepFrame>
    <ProcessTicket />
    <ProcessGauge />
    <ProcessControlFrame>
      <ProcessControlComponent>{/*  */}</ProcessControlComponent>
    </ProcessControlFrame>
  </ProcessStepFrame>
));

export default ProcessStep;
