/*
 * Copyright (c) 2number22 Medir Inc.
 */

import { observable } from 'mobx';

/* 약국 내역 */
/* GET /pharmacy/list */
export interface PharmacyListDataType {
  count: {
    total: number;
    running: number;
    stop: number;
    active: number;
    waitRegister: number;
    registerRejected: number;
    blinded: number;
  };
  pharmacyList: {
    code: string;
    state: string;
    registerState: string;
    name: string;
    address: string;
    phoneNum: string;
    registerDateTime: string;
    openingTime: {
      day: string;
      isOpen: true;
      startHour: string;
      startMinute: string;
      endHour: string;
      endMinute: string;
      lunchStartHour: string;
      lunchStartMinute: string;
      lunchEndHour: string;
      lunchEndMinute: string;
    };
    hospitalState: string;
    hospitalList: { code: string; name: string }[];
    waitReceptionCount: number;
    numMedicineBags: number;
    numStickers: number;
  }[];
}
/*  */

export interface PharmacyDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 약국 내역 */
  /* GET /pharmacy/list */
  PharmacyListData: null | PharmacyListDataType;
  setPharmacyListData: (e: null | PharmacyListDataType) => void;
  /*  */
}

const PharmacyData = observable<PharmacyDataType>({
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
  /* 약국 내역 */
  /* GET /pharmacy/list */
  PharmacyListData: null,
  setPharmacyListData(e: null | PharmacyListDataType) {
    this.PharmacyListData = e;
  },
  /*  */
});

export { PharmacyData };
