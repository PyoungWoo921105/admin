/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 조제 내역 */
/* GET /medicine/list */
export interface MedicineListDataType {
  count: {
    total: number;
    waitReception: number;
    inMaking: number;
    failedToPay: number;
    waitVisit: number;
    waitAllocation: number;
    allocationCompleted: number;
    pickUpCompleted: number;
    completed: number;
    canceled: number;
    declined: number;
    systemCanceled: number;
  };
  medicineList: {
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
  }[];
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
  MedicineListData: undefined | MedicineListDataType;
  setMedicineListData: (e: MedicineListDataType) => void;
  /* Socket */
  /* GET /admin/medicine */
  SocketMedicineData: SocketMedicineDataType | null;
  setSocketMedicineData: (e: SocketMedicineDataType) => void;
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
  MedicineListData: undefined,
  setMedicineListData(e: MedicineListDataType) {
    this.MedicineListData = e;
  },
  /* Socket */
  /* GET /admin/medicine */
  SocketMedicineData: null,
  setSocketMedicineData(e: SocketMedicineDataType) {
    this.SocketMedicineData = e;
  },
  /*  */
});

export { MedicineData };
