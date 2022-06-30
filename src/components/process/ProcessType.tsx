/*
 * Copyright (c) 2022 Medir Inc.
 */

import React /* , { useCallback, useEffect } */ from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { ProcessTypeFrame } from 'styles/components/process/ProcessType';

import ProcessConverter from './ProcessConverter';
import ProcessSpecification from './ProcessSpecification';

const ProcessType = observer(() => {
  const { AdminData } = useStore();
  return (
    <ProcessTypeFrame
      maxWidth="930px"
      width="930px"
      minWidth="930px"
      maxHeight="710px"
      height="710px"
      minHeight="710px"
    >
      <ProcessConverter />
      {AdminData.ProcessPopUpData?.Type === 'SPECIFICATION' ? <ProcessSpecification /> : null}
    </ProcessTypeFrame>
  );
});

export default ProcessType;
