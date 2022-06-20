/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 방문/배달 내역 */
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
/* 배달 운영 */
/* GET /delivery/link/list */
export interface DeliveryLinkListDataType {
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
    rider: {
      code: string;
      name: string;
    };
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
  /* 방문/배달 내역 */
  /* GET /delivery/list */
  DeliveryListData: null | DeliveryListDataType;
  setDeliveryListData: (e: null | DeliveryListDataType) => void;
  /* Socket */
  /* GET /admin/delivery */
  SocketDeliveryData: null | SocketDeliveryDataType;
  setSocketDeliveryData: (e: null | SocketDeliveryDataType) => void;
  /*  */
  /* 배달 운영 */
  /* GET /delivery/link/list */
  DeliveryLinkListData: null | DeliveryLinkListDataType;
  setDeliveryLinkListData: (e: null | DeliveryLinkListDataType) => void;
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
  /* 방문/배달 내역 */
  /* GET /delivery/list */
  DeliveryListData: null,
  setDeliveryListData(e: null | DeliveryListDataType) {
    this.DeliveryListData = e;
  },
  /* Socket */
  /* GET /admin/delivery */
  SocketDeliveryData: null,
  setSocketDeliveryData(e: null | SocketDeliveryDataType) {
    this.SocketDeliveryData = e;
  },
  /*  */
  /* 배달 운영 */
  /* GET /delivery/link/list */
  DeliveryLinkListData: null,
  setDeliveryLinkListData(e: null | DeliveryLinkListDataType) {
    this.DeliveryLinkListData = e;
  },
  /*  */
});

export { DeliveryData };
