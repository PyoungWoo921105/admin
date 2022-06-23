/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { ProcessStepFrame } from 'styles/components/process/ProcessStep';

import ProcessTicket from './ProcessTicket';
import ProcessGauge from './ProcessGauge';
import ProcessControl from './ProcessControl';

const ProcessStep = observer(() => (
  <ProcessStepFrame>
    <ProcessTicket />
    <ProcessGauge />
    <ProcessControl />
  </ProcessStepFrame>
));

export default ProcessStep;
