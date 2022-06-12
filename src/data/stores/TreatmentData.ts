/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 진료 내역 */
/* GET /treat/list */
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
  treatList: {
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
  TreatmentListData: undefined | TreatmentListDataType;
  setTreatmentListData: (e: TreatmentListDataType) => void;
  /* Socket */
  /* GET /admin/treat */
  SocketTreatmentData: SocketTreatmentDataType | null;
  setSocketTreatmentData: (e: SocketTreatmentDataType | null) => void;
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
  TreatmentListData: undefined,
  setTreatmentListData(e: TreatmentListDataType) {
    this.TreatmentListData = e;
  },
  /* Socket */
  /* GET /admin/treat */
  SocketTreatmentData: null,
  setSocketTreatmentData(e: SocketTreatmentDataType | null) {
    this.SocketTreatmentData = e;
  },
  /*  */
});

export { TreatmentData };
