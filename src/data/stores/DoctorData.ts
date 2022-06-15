/*
 * Copyright (c) 2number22 Medir Inc.
 */

import { observable } from 'mobx';

/* 의사 내역 */
/* GET /doctor/list */
export interface DoctorListDataType {
  count: {
    total: number;
    running: number;
    stop: number;
    active: number;
    waitRegister: number;
    registerRejected: number;
    blinded: number;
  };
  doctorList: {
    code: string;
    registerState: string;
    name: string;
    phoneNum: string;
    email: string;
    departments: string[];
    diseases: string[];
    state: string;
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
    hospital: {
      code: string;
      name: string;
    };
  }[];
}
/*  */

export interface DoctorDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 의사 내역 */
  /* GET /doctor/list */
  DoctorListData: null | DoctorListDataType;
  setDoctorListData: (e: null | DoctorListDataType) => void;
  /*  */
}

const DoctorData = observable<DoctorDataType>({
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
  /* GET /doctor/list */
  DoctorListData: null,
  setDoctorListData(e: null | DoctorListDataType) {
    this.DoctorListData = e;
  },
  /*  */
});

export { DoctorData };
