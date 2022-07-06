/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 방문/배달 내역 */
/* GET /delivery/list */
export interface DeliveryElementDataType {
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
  isExtraDelivery: true;
  patient: {
    code: string;
    name: string;
    phoneNum: string;
    applicantName: string;
  };
  address: string;
  sigungu: string;
  deliveryType: string;
  elapsedTime: string;
  requestedDateTime: string;
  waitVisitDateTime: string;
  waitAllocDateTime: string;
  allocCompletedDateTime: string;
  pickUpDateTime: string;
  endDateTime: string;
  canceledDateTime: string;
}
export interface DeliveryListDataType {
  count: {
    total: number;
  };
  deliveryList: DeliveryElementDataType[];
}
/* 방문/배달 상세 내역 */
/* GET /delivery/details */
export interface DeliveryDetailsDataType {
  deliveryInfo: {
    deliveryCode: string;
    patient: {
      code: string;
      name: string;
      phoneNum: string;
      applicantName: string;
      symptom: string;
      relationType: string;
    };
    status: string;
    deliveryType: string;
    address: {
      jibunAddress: string;
      roadAddress: string;
      detailedAddress: string;
      sido: string;
      sigungu: string;
      hname: string;
      bname: string;
      wayGuide: string;
    };
    distance: number;
    deliveryRequest: string;
    logiCompany: {
      code: string;
      name: string;
    };
    riderName: string;
    riderPhoneNum: string;
    requestedDateTime: string;
    waitAllocDateTime: string;
    allocCompletedDateTime: string;
    pickUpDateTime: string;
    endDateTime: string;
    canceledDateTime: string;
    updatedAddrDateTime: string;
    userPaidFee: number;
    logiDefaultFee: number;
    logiAddFee: number;
    cancelFee: number;
    addDeliveryBy: string;
    addDeliveryReason: string;
  };
  logisticsInfo: {
    agency: {
      code: string;
      name: string;
    };
    logiDefaultFee: number;
    logiAddFee: number;
    logiOrderCode: string;
    deliveryRequest: string;
    pickUpMinute: number;
    estimatedPickUpDateTime: string;
    riderName: string;
    riderPhoneNum: string;
    pickUpStartDateTime: string;
  };
  treatInfo: {
    treatCode: string;
    hospital: {
      code: string;
      name: string;
      phoneNum: string;
    };
    doctor: {
      code: string;
      name: string;
    };
    payment: {
      cardName: string;
      payAmount: string;
      payedDateTime: string;
    };
  };
  medicineInfo: {
    medicineCode: string;
    pharmacy: {
      code: string;
      name: string;
      phoneNum: string;
      ownerPhoneNum: string;
      faxNum: string;
    };
    payment: {
      cardName: string;
      payAmount: string;
      payedDateTime: string;
    };
  };
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
/* 배달 동작 내역 */
/* GET /delivery/handlingHistory/list */
export interface DeliveryHandlingHistoryListDataType {
  count: {
    total: number;
  };
  historyList: {
    hanldingType: string;
    status: string;
    address: string;
    detailedAddress: string;
    riderName: string;
    logisticsName: string;
    reason: string;
    handledBy: string;
    handledDateTime: string;
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
  /* 방문/배달 내역 */
  /* GET /delivery/list */
  DeliveryListData: null | DeliveryListDataType;
  setDeliveryListData: (e: null | DeliveryListDataType) => void;
  /* 방문/배달 상세 내역 */
  /* GET /delivery/details */
  DeliveryDetailsData: null | DeliveryDetailsDataType;
  setDeliveryDetailsData: (e: null | DeliveryDetailsDataType) => void;
  /* 배달 동작 내역 */
  /* GET /delivery/handlingHistory/list */
  DeliveryHandlingHistoryListData: null | DeliveryHandlingHistoryListDataType;
  setDeliveryHandlingHistoryListData: (e: null | DeliveryHandlingHistoryListDataType) => void;
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
  /* 방문/배달 상세 내역 */
  /* GET /delivery/details */
  DeliveryDetailsData: null,
  setDeliveryDetailsData(e: null | DeliveryDetailsDataType) {
    this.DeliveryDetailsData = e;
  },
  /* 배달 동작 내역 */
  /* GET /delivery/handlingHistory/list */
  DeliveryHandlingHistoryListData: null,
  setDeliveryHandlingHistoryListData(e: null | DeliveryHandlingHistoryListDataType) {
    this.DeliveryHandlingHistoryListData = e;
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
