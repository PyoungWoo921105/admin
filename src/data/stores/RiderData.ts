/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 라이더 내역 */
/* GET /rider/list/basic */
export interface RiderListBasicDataType {
  riderList: { code: string; name: string }[];
}
/*  */

export interface RiderDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 배달 내역 */
  /* GET /rider/list/basic */
  RiderListBasicData: null | RiderListBasicDataType;
  setRiderListBasicData: (e: null | RiderListBasicDataType) => void;
  /*  */
}

const RiderData = observable<RiderDataType>({
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
  /* 배달 내역 */
  /* GET /delivery/list */
  RiderListBasicData: null,
  setRiderListBasicData(e: null | RiderListBasicDataType) {
    this.RiderListBasicData = e;
  },
  /*  */
});

export { RiderData };
