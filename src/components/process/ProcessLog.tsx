/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { ProcessLogFrame } from 'styles/components/process/ProcessLog';

import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import ProcessTreatmentLog from './log/ProcessTreatmentLog';
import ProcessMedicineSpecification from './specification/ProcessMedicineSpecification';
import ProcessDeliverySpecification from './specification/ProcessDeliverySpecification';

const ProcessLog = observer(() => {
  const { AdminData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProcessLogFrame>
      {AdminData.ProcessPopUpData?.Step === 'TREATMENT' ? (
        <ProcessTreatmentLog />
      ) : AdminData.ProcessPopUpData?.Step === 'MEDICINE' ? (
        <ProcessMedicineSpecification />
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        <ProcessDeliverySpecification />
      ) : null}
    </ProcessLogFrame>
  );
});

export default ProcessLog;
