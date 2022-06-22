/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* Process Pop Up */
export interface ProcessPopUpDataType {
  Title: string;
  Code: string;
  Step: string;
  Way: string;
  Type: string;
  Data: any;
  Actions: { Choice: string; Action: () => void }[];
}
/* 통합 상세 정보 */
/* GET /task */
export interface TaskDataType {
  treatList: {
    code: string;
    createdDateTime: string;
    status: string;
  }[];
  medicineList: {
    code: string;
    createdDateTime: string;
    status: string;
    receiveWay: string;
  }[];
  deliveryList: {
    code: string;
    createdDateTime: string;
    status: string;
    isAdditionalDelivery: boolean;
    deliveryType: string;
  }[];
}

export interface AdminDataType {
  /* Log In */
  LogInPrivateFlag: boolean;
  setLogInPrivateFlag: (e: boolean) => void;
  LogInUserID: string;
  setLogInUserID: (e: string) => void;
  LogInUserPassword: string;
  setLogInUserPassword: (e: string) => void;
  LogInValidateFlag: boolean;
  setLogInValidateFlag: (e: boolean) => void;
  LogInMessage: string;
  setLogInMessage: (e: string) => void;
  /* Filter */
  FilterSwitchFlag: boolean;
  setFilterSwitchFlag: (e: boolean) => void;
  /* Statistic */
  StatisticSwitchFlag: boolean;
  setStatisticSwitchFlag: (e: boolean) => void;
  /* Process Pop Up */
  ProcessPopUpFlag: boolean;
  setProcessPopUpFlag: (e: boolean) => void;

  ProcessPopUpData: null | ProcessPopUpDataType;
  setProcessPopUpData: (e: null | ProcessPopUpDataType) => void;
  /* 통합 상세 정보 */
  /* GET /task */
  TaskData: null | TaskDataType;
  setTaskData: (e: null | TaskDataType) => void;
}

const AdminData = observable<AdminDataType>({
  /* Log In */
  LogInPrivateFlag: true,
  setLogInPrivateFlag(e: boolean) {
    this.LogInPrivateFlag = e;
  },
  LogInUserID: '',
  setLogInUserID(e: string) {
    this.LogInUserID = e;
  },
  LogInUserPassword: '',
  setLogInUserPassword(e: string) {
    this.LogInUserPassword = e;
  },
  LogInValidateFlag: false,
  setLogInValidateFlag(e: boolean) {
    this.LogInValidateFlag = e;
  },
  LogInMessage: '',
  setLogInMessage(e: string) {
    this.LogInMessage = e;
  },
  /* Filter */
  FilterSwitchFlag: true,
  setFilterSwitchFlag(e: boolean) {
    this.FilterSwitchFlag = e;
  },
  /* Statistic */
  StatisticSwitchFlag: true,
  setStatisticSwitchFlag(e: boolean) {
    this.StatisticSwitchFlag = e;
  },
  /* Process Pop Up */
  ProcessPopUpFlag: false,
  setProcessPopUpFlag(e: boolean) {
    this.ProcessPopUpFlag = e;
  },
  ProcessPopUpData: null,
  setProcessPopUpData(e: null | ProcessPopUpDataType) {
    this.ProcessPopUpData = e;
  },
  /* 통합 상세 정보 */
  /* GET /task */
  TaskData: null,
  setTaskData(e: null | TaskDataType) {
    this.TaskData = e;
  },
});

export { AdminData };
