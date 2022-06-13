/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 병원 내역 */
/* GET /hospital/list */
export interface HospitalListDataType {
  count: {
    total: number;
    running: number;
    stop: number;
    active: number;
    waitRegister: number;
    registerRejected: number;
    blinded: number;
  };
  hospitalList: {
    code: string;
    state: string;
    registerState: string;
    name: string;
    address: string;
    phoneNum: string;
    registerDateTime: string;
    openingTime: {
      day: string;
      isOpen: boolean;
      startHour: string;
      startMinute: string;
      endHour: string;
      endMinute: string;
      lunchStartHour: string;
      lunchStartMinute: string;
      lunchEndHour: string;
      lunchEndMinute: string;
    };
    doctorList: {
      code: string;
      name: string;
    }[];
    pharmacyList: {
      code: string;
      name: string;
    }[];
    waitReceptionCount: 0;
  }[];
}
/*  */

export interface HospitalDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 병원 내역 */
  /* GET /hospital/list */
  HospitalListData: null | HospitalListDataType;
  setHospitalListData: (e: null | HospitalListDataType) => void;
  /*  */
}

const HospitalData = observable<HospitalDataType>({
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
  /* 병원 내역 */
  /* GET /hospital/list */
  HospitalListData: null,
  setHospitalListData(e: null | HospitalListDataType) {
    this.HospitalListData = e;
  },
  /*  */
});

export { HospitalData };
