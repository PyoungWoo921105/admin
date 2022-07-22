/*
 * Copyright (c) 2022 Medir Inc.
 */

import { CommonData } from 'data/stores/CommonData';
import { AdminData } from 'data/stores/AdminData';

import { AlarmData } from 'data/stores/AlarmData';

import { TreatmentData } from 'data/stores/TreatmentData';
import { MedicineData } from 'data/stores/MedicineData';
import { DeliveryData } from 'data/stores/DeliveryData';
import { RiderData } from 'data/stores/RiderData';
import { HospitalData } from 'data/stores/HospitalData';
import { PharmacyData } from 'data/stores/PharmacyData';
import { DoctorData } from 'data/stores/DoctorData';
import { ReviewData } from 'data/stores/ReviewData';

export const useStore = () => ({
  CommonData,
  AdminData,
  AlarmData,
  TreatmentData,
  MedicineData,
  DeliveryData,
  RiderData,
  HospitalData,
  PharmacyData,
  DoctorData,
  ReviewData,
});

export default useStore;
