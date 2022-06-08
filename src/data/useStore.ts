/*
 * Copyright (c) 2022 Medir Inc.
 */

import { CommonData } from 'data/stores/CommonData';
import { AdminData } from 'data/stores/AdminData';

import { TreatmentData } from 'data/stores/TreatmentData';

export const useStore = () => ({ CommonData, AdminData, TreatmentData });

export default useStore;
