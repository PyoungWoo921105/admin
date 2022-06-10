/*
 * Copyright (c) 2022 Medir Inc.
 */

import { CommonData } from 'data/stores/CommonData';
import { AdminData } from 'data/stores/AdminData';

import { TreatmentData } from 'data/stores/TreatmentData';
import { MedicineData } from 'data/stores/MedicineData';
import { DeliveryData } from 'data/stores/DeliveryData';

export const useStore = () => ({
  CommonData,
  AdminData,
  TreatmentData,
  MedicineData,
  DeliveryData,
});

export default useStore;
