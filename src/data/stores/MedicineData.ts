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
/* 조제 상세 내역 */
/* GET /medicine/details */
export interface MedicineDetailsDataType {
  medicineCode: string;
  status: string;
  receptionCategory: string;
  waitReceptionDateTime: string;
  inMakingDateTime: string;
  waitVisitDateTime: string;
  completedDateTime: string;
  pharmacy: {
    code: string;
    name: string;
    phoneNum: string;
    ownerPhoneNum: string;
    faxNum: string;
  };
  hospital: {
    code: string;
    name: string;
    phoneNum: string;
  };
  doctor: {
    code: string;
    name: string;
  };
  patient: {
    code: string;
    name: string;
    phoneNum: string;
    applicantName: string;
    symptom: string;
    relationType: string;
  };
  declinedInfo: {
    dateTime: string;
    reason: string;
  };
  canceledInfo: {
    dateTime: string;
    reason: string;
  };
  systemCanceledInfo: {
    dateTime: string;
    reason: string;
  };
  failedToPayInfo: {
    dateTime: string;
    reason: string;
  };
  payment: {
    cardName: string;
    payAmount: string;
    payedDateTime: string;
  };
  medicineReceiveWay: string;
  deliveryAddress: {
    jibunAddress: string;
    roadAddress: string;
    detailedAddress: string;
    sido: string;
    sigungu: string;
    hname: string;
    bname: string;
    wayGuide: string;
  };
}
/* 조제 동작 내역 */
/* GET /medicine/handlingHistory/list */
export interface MedicineHandlingHistoryListDataType {
  count: {
    total: number;
  };
  historyList: {
    hanldingType: string;
    status: string;
    pharmacyName: string;
    recieveWay: string;
    payAmount: number;
    handledBy: string;
    handledDateTime: string;
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
  MedicineListData: null | MedicineListDataType;
  setMedicineListData: (e: null | MedicineListDataType) => void;
  /* 조제 상세 내역 */
  /* GET /medicine/details */
  MedicineDetailsData: null | MedicineDetailsDataType;
  setMedicineDetailsData: (e: null | MedicineDetailsDataType) => void;
  /* 조제 동작 내역 */
  /* GET /medicine/handlingHistory/list */
  MedicineHandlingHistoryListData: null | MedicineHandlingHistoryListDataType;
  setMedicineHandlingHistoryListData: (e: null | MedicineHandlingHistoryListDataType) => void;
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
  /* 조제 상세 내역 */
  /* GET /medicine/details */
  MedicineDetailsData: null,
  setMedicineDetailsData(e: null | MedicineDetailsDataType) {
    this.MedicineDetailsData = e;
  },
  /* 조제 동작 내역 */
  /* GET /medicine/handlingHistory/list */
  MedicineHandlingHistoryListData: null,
  setMedicineHandlingHistoryListData(e: null | MedicineHandlingHistoryListDataType) {
    this.MedicineHandlingHistoryListData = e;
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
