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
/*  */

export interface TreatmentDataType {
  /* 페이지 */
  NavigationPage: number;
  setNavigationPage: (e: number) => void;
  /*  */
  /* 진료 내역 */
  /* GET /treat/list */
  TreatmentListData: undefined | TreatmentListDataType;
  setTreatmentListData: (e: TreatmentListDataType) => void;
  /*  */
}

const TreatmentData = observable<TreatmentDataType>({
  /* 페이지 */
  NavigationPage: 1,
  setNavigationPage(e: number) {
    this.NavigationPage = e;
  },
  /*  */
  /* 진료 내역 */
  /* GET /treat/list */
  TreatmentListData: undefined,
  setTreatmentListData(e: TreatmentListDataType) {
    this.TreatmentListData = e;
  },
  /*  */
});

export { TreatmentData };
