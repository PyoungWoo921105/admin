/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 진료 내역 */
/* GET /treat/list */
export interface TreatmentElementDataType {
  treatCode: string;
  requestedDateTime: string;
  status: string;
  hospital: {
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
  symptomImgFiles: {
    name: string;
    url: string;
  }[];
  prescriptionImgFile: {
    name: string;
    url: string;
  };
  medicineReceiveWay: string;
}
export interface TreatmentListDataType {
  count: {
    total: number;
    waitReception: number;
    waitTreat: number;
    inTreat: number;
    prescriptionAndReceipt: number;
    waitToPay: number;
    failedToPay: number;
    completed: number;
    canceled: number;
    declined: number;
    systemCanceled: number;
  };
  treatList: TreatmentElementDataType[];
}
/* 진료 상세 내역 */
/* GET /treat/details */
export interface TreatmentDetailsDataType {
  treatCode: string;
  status: string;
  receptionCategory: string;
  symptomFilesCount: number;
  waitReceptionDateTime: string;
  waitTreatDateTime: string;
  waitTime: string;
  inTreatDateTime: string;
  prescriptionAndReceiptDateTime: string;
  waitToPayDateTime: string;
  completedDateTime: string;
  hospital: {
    code: string;
    name: string;
    phoneNum: string;
    faxNum: string;
    ownerPhoneNum: string;
  };
  doctor: {
    code: string;
    name: string;
    phoneNum: string;
  };
  patient: {
    code: string;
    name: string;
    phoneNum: string;
    applicantName: string;
    symptom: string;
    relationType: string;
  };
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
  declinedInfo: {
    dateTime: string;
    reason: string;
  };
  canceledInfo: {
    dateTime: string;
    reason: string;
  };
  systemCancledInfo: {
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
}
/* 진료 동작 내역 */
/* GET /treat/handlingHistory/list */
export interface TreatmentHandlingHistoryListDataType {
  count: {
    total: number;
  };
  historyList: {
    hanldingType: string;
    status: string;
    hasPrescription: boolean;
    isPrescriptionChanged: boolean;
    extraDocsCount: number;
    payAmount: number;
    handledBy: string;
    handledDateTime: string;
  }[];
}
/* Socket */
export interface SocketTreatmentDataType {
  from: string;
  treatList: {
    treatCode: string;
    status: string;
  }[];
}
/*  */

export interface TreatmentDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 진료 내역 */
  /* GET /treat/list */
  TreatmentListData: null | TreatmentListDataType;
  setTreatmentListData: (e: null | TreatmentListDataType) => void;
  /* 진료 상세 내역 */
  /* GET /treat/details */
  TreatmentDetailsData: null | TreatmentDetailsDataType;
  setTreatmentDetailsData: (e: null | TreatmentDetailsDataType) => void;
  /* 진료 동작 내역 */
  /* GET /treat/handlingHistory/list */
  TreatmentHandlingHistoryListData: null | TreatmentHandlingHistoryListDataType;
  setTreatmentHandlingHistoryListData: (e: null | TreatmentHandlingHistoryListDataType) => void;
  /* Socket */
  /* GET /admin/treat */
  SocketTreatmentData: null | SocketTreatmentDataType;
  setSocketTreatmentData: (e: null | SocketTreatmentDataType) => void;
  /*  */
}

const TreatmentData = observable<TreatmentDataType>({
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
  /* 진료 내역 */
  /* GET /treat/list */
  TreatmentListData: null,
  setTreatmentListData(e: null | TreatmentListDataType) {
    this.TreatmentListData = e;
  },
  /* 진료 상세 내역 */
  /* GET /treat/details */
  TreatmentDetailsData: null,
  setTreatmentDetailsData(e: null | TreatmentDetailsDataType) {
    this.TreatmentDetailsData = e;
  },
  /* 진료 동작 내역 */
  /* GET /treat/handlingHistory/list */
  TreatmentHandlingHistoryListData: null,
  setTreatmentHandlingHistoryListData(e: null | TreatmentHandlingHistoryListDataType) {
    this.TreatmentHandlingHistoryListData = e;
  },
  /* Socket */
  /* GET /admin/treat */
  SocketTreatmentData: null,
  setSocketTreatmentData(e: null | SocketTreatmentDataType) {
    this.SocketTreatmentData = e;
  },
  /*  */
});

export { TreatmentData };
