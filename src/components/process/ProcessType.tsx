/*
 * Copyright (c) 2022 Medir Inc.
 */

import React /* , { useCallback, useEffect } */ from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { ProcessTypeFrame } from 'styles/components/process/ProcessType';

import ProcessConverter from './ProcessConverter';
import ProcessSpecification from './ProcessSpecification';
import ProcessLog from './ProcessLog';

const ProcessType = observer(() => {
  const { AdminData } = useStore();
  return (
    <ProcessTypeFrame
      maxWidth="1000px"
      width="1000px"
      minWidth="1000px"
      maxHeight="710px"
      height="710px"
      minHeight="710px"
    >
      <ProcessConverter />
      {AdminData.ProcessPopUpData?.Type === 'SPECIFICATION' ? <ProcessSpecification /> : null}
      {AdminData.ProcessPopUpData?.Type === 'LOG' ? <ProcessLog /> : null}
    </ProcessTypeFrame>
  );
});

export default ProcessType;
