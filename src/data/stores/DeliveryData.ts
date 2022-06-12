/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 배달 내역 */
/* GET /delivery/list */
export interface DeliveryListDataType {
  count: {
    total: number;
  };
  deliveryList: {
    deliveryCode: string;
    medicineCode: string;
    status: string;
    pharmacy: {
      code: string;
      name: string;
    };
    rider: {
      code: string;
      name: string;
    };
    isExtraDelivery: boolean;
    hasNotificationToCheck: boolean;
    patient: {
      code: string;
      name: string;
      phoneNum: string;
      applicantName: string;
    };
    address: string;
    elapsedTime: string;
    requestedDateTime: string;
    pickUpDateTime: string;
    endDateTime: string;
  }[];
}
/* Socket */
export interface SocketDeliveryDataType {
  from: string;
  deliveryList: {
    medicineCode: string;
    deliveryCode: string;
    status: string;
  }[];
}
/*  */

export interface DeliveryDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 배달 내역 */
  /* GET /delivery/list */
  DeliveryListData: undefined | DeliveryListDataType;
  setDeliveryListData: (e: DeliveryListDataType) => void;
  /* Socket */
  /* GET /admin/delivery */
  SocketDeliveryData: SocketDeliveryDataType | null;
  setSocketDeliveryData: (e: SocketDeliveryDataType | null) => void;
  /*  */
}

const DeliveryData = observable<DeliveryDataType>({
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
  DeliveryListData: undefined,
  setDeliveryListData(e: DeliveryListDataType) {
    this.DeliveryListData = e;
  },
  /* Socket */
  /* GET /admin/delivery */
  SocketDeliveryData: null,
  setSocketDeliveryData(e: SocketDeliveryDataType | null) {
    this.SocketDeliveryData = e;
  },
  /*  */
});

export { DeliveryData };
