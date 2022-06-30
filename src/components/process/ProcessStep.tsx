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
  <ProcessStepFrame
    maxWidth="230px"
    width="230px"
    minWidth="230px"
    maxHeight="710px"
    height="710px"
    minHeight="710px"
  >
    <ProcessTicket />
    <ProcessGauge />
    <ProcessControl />
  </ProcessStepFrame>
));

export default ProcessStep;
