/*
 * Copyright (c) 2022 Medir Inc.
 */

import { CommonData } from 'data/stores/CommonData';
import { AdminData } from 'data/stores/AdminData';

import { TreatmentData } from 'data/stores/TreatmentData';
import { MedicineData } from 'data/stores/MedicineData';
import { DeliveryData } from 'data/stores/DeliveryData';
import { RiderData } from 'data/stores/RiderData';
import { HospitalData } from 'data/stores/HospitalData';
import { PharmacyData } from 'data/stores/PharmacyData';
import { DoctorData } from 'data/stores/DoctorData';

export const useStore = () => ({
  CommonData,
  AdminData,
  TreatmentData,
  MedicineData,
  DeliveryData,
  RiderData,
  HospitalData,
  PharmacyData,
  DoctorData,
});

export default useStore;
