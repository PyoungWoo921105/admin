/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import {
  ProcessStepFrame,
  ProcessGaugeFrame,
  ProcessGaugeComponent,
  ProcessControlFrame,
  ProcessControlComponent,
} from 'styles/components/process/ProcessStep';

import ProcessTicket from './ProcessTicket';

const ProcessStep = observer(() => (
  <ProcessStepFrame>
    <ProcessTicket />
    <ProcessGaugeFrame>
      <ProcessGaugeComponent>{/*  */}</ProcessGaugeComponent>
    </ProcessGaugeFrame>
    <ProcessControlFrame>
      <ProcessControlComponent>{/*  */}</ProcessControlComponent>
    </ProcessControlFrame>
  </ProcessStepFrame>
));

export default ProcessStep;
