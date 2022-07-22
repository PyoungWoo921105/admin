/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* Process Pop Up */
export interface ProcessPopUpDataType {
  Title: string;
  Code: string;
  Step: string;
  Type: string;
  Data: any;
  Actions: { Choice: string; Action: () => void }[];
}

export interface AdminDataType {
  ProcessPopUpData: null | ProcessPopUpDataType;
  setProcessPopUpData: (e: null | ProcessPopUpDataType) => void;
}

const AlarmData = observable<AdminDataType>({
  ProcessPopUpData: null,
  setProcessPopUpData(e: null | ProcessPopUpDataType) {
    this.ProcessPopUpData = e;
  },
});

export { AlarmData };
