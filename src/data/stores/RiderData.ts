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
/* 배달 운영 */
/* GET /rider/link/list */
export interface RiderLinkListDataType {
  count: {
    total: number;
  };
  linkList: {
    pharmacy: {
      code: string;
      name: string;
      location: {
        latitude: number;
        longitude: number;
      };
      address: string;
      phoneNum: string;
    };
    riders: {
      quick: {
        1: { code: string; name: string };
        2: { code: string; name: string };
        3: { code: string; name: string };
      };
      sameDayDelivery: {
        1: { code: string; name: string };
        2: { code: string; name: string };
        3: { code: string; name: string };
      };
      parcel: {
        1: { code: string; name: string };
        2: { code: string; name: string };
        3: { code: string; name: string };
      };
    };
  }[];
}

export interface RiderDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 라이더 내역 */
  /* GET /rider/list/basic */
  RiderListBasicData: null | RiderListBasicDataType;
  setRiderListBasicData: (e: null | RiderListBasicDataType) => void;
  /*  */
  /* 배달 운영 */
  /* GET /rider/link/list */
  RiderLinkListData: null | RiderLinkListDataType;
  setRiderLinkListData: (e: null | RiderLinkListDataType) => void;
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
  /* 라이더 내역 */
  /* GET /delivery/list */
  RiderListBasicData: null,
  setRiderListBasicData(e: null | RiderListBasicDataType) {
    this.RiderListBasicData = e;
  },
  /*  */
  /* 배달 운영 */
  /* GET /rider/link/list */
  RiderLinkListData: null,
  setRiderLinkListData(e: null | RiderLinkListDataType) {
    this.RiderLinkListData = e;
  },
  /*  */
});

export { RiderData };
