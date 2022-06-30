/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { ProcessSpecificationFrame } from 'styles/components/process/ProcessSpecification';

import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import ProcessTreatmentSpecification from './ProcessTreatmentSpecification';
import ProcessMedicineSpecification from './ProcessMedicineSpecification';
import ProcessDeliverySpecification from './ProcessDeliverySpecification';
import ProcessVisitSpecification from './ProcessVisitSpecification';

const ProcessSpecification = observer(() => {
  const { AdminData, DeliveryData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProcessSpecificationFrame>
      {AdminData.ProcessPopUpData?.Step === 'TREATMENT' ? (
        <ProcessTreatmentSpecification />
      ) : AdminData.ProcessPopUpData?.Step === 'MEDICINE' ? (
        <ProcessMedicineSpecification />
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '빠른 배달' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '오늘 배송' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '택배' ? (
          <ProcessDeliverySpecification />
        ) : DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '방문' ? (
          <ProcessVisitSpecification />
        ) : null
      ) : null}
    </ProcessSpecificationFrame>
  );
});

export default ProcessSpecification;
