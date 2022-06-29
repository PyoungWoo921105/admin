/*
 * Copyright (c) 2022 Medir Inc.
 */

import React /* , { useCallback, useEffect } */ from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { ProcessTypeFrame } from 'styles/components/process/ProcessType';

import { toJS } from 'mobx';
import ProcessConverter from './ProcessConverter';

const ProcessType = observer(() => {
  const { AdminData } = useStore();

  console.log(toJS(AdminData.ProcessPopUpData));

  return (
    <ProcessTypeFrame>
      <ProcessConverter />
    </ProcessTypeFrame>
  );
});

export default ProcessType;
