/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 조제 내역 */
/* GET /medicine/list */
export interface MedicineElementDataType {
  medicineCode: string;
  requestedDateTime: string;
  status: string;
  hospital: {
    code: string;
    name: string;
  };
  pharmacy: {
    code: string;
    name: string;
  };
  doctor: {
    code: string;
    name: string;
  };
  patient: {
    code: string;
    name: string;
    applicantName: string;
  };
  receptionCategory: string;
  payAmount: string;
  receptionImgFiles: {
    name: string;
    url: string;
  };
  medicineReceiveWay: string;
  deliveryList: string[];
}
export interface MedicineListDataType {
  count: {
    total: number;
    waitReception: number;
    inMaking: number;
    failedToPay: number;
    completed: number;
    canceled: number;
    declined: number;
    systemCanceled: number;
  };
  medicineList: MedicineElementDataType[];
}
/* Socket */
export interface SocketMedicineDataType {
  from: string;
  medicineList: {
    medicineCode: string;
    status: string;
  }[];
}
/*  */

export interface MedicineDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 조제 내역 */
  /* GET /medicine/list */
  MedicineListData: null | MedicineListDataType;
  setMedicineListData: (e: null | MedicineListDataType) => void;
  /* Socket */
  /* GET /admin/medicine */
  SocketMedicineData: null | SocketMedicineDataType;
  setSocketMedicineData: (e: null | SocketMedicineDataType) => void;
  /*  */
}

const MedicineData = observable<MedicineDataType>({
  /* 페이지 */
  PageNavigator: 1,
  setPageNavigator(e: number) {
    this.PageNavigator = e;
  },
  ParagraphNavigator: 1,
  setParagraphNavigator(e: number) {
    this.ParagraphNavigator = e;
  },
  /*  */
  /* 조제 내역 */
  /* GET /medicine/list */
  MedicineListData: null,
  setMedicineListData(e: null | MedicineListDataType) {
    this.MedicineListData = e;
  },
  /* Socket */
  /* GET /admin/medicine */
  SocketMedicineData: null,
  setSocketMedicineData(e: null | SocketMedicineDataType) {
    this.SocketMedicineData = e;
  },
  /*  */
});

export { MedicineData };
