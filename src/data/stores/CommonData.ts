/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* Pop Up */
export interface PopUpDataType {
  Category: string;
  Name: string;
  Title: string;
  Contents: string[];
  Actions: { Choice: string; Action: () => void }[];
}

export interface CommonDataType {
  /* API */
  ResponseTempData: any;
  setResponseTempData: (e: any) => void;
  ResponseData: any;
  setResponseData: (e: any) => void;
  /* Loading */
  LoadingFlag: boolean;
  setLoadingFlag: (e: boolean) => void;
  /* Pop Up */
  PopUpFlag: boolean;
  setPopUpFlag: (e: boolean) => void;

  PopUpData: PopUpDataType | null;
  setPopUpData: (e: PopUpDataType) => void;
}

const CommonData = observable<CommonDataType>({
  /* API */
  ResponseTempData: null,
  setResponseTempData(e: any) {
    this.ResponseTempData = e;
  },
  ResponseData: null,
  setResponseData(e: any) {
    this.ResponseData = e;
  },
  /* Loading */
  LoadingFlag: false,
  setLoadingFlag(e: boolean) {
    this.LoadingFlag = e;
  },
  /* Pop Up */
  PopUpFlag: false,
  setPopUpFlag(e: boolean) {
    this.PopUpFlag = e;
  },

  PopUpData: null,
  setPopUpData(e: PopUpDataType) {
    this.PopUpData = e;
  },
});

export { CommonData };
