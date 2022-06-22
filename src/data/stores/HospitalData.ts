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
    waitReceptionCount: number;
  }[];
}
/*  */
/* 주치의 인증 내역 */
/* GET /admin/visitCheck/list */
export interface AdminVisitCheckListDataType {
  count: {
    total: number;
  };
  visitCheckList: {
    code: string;
    createdAt: string;
    status: string;
    patient: {
      code: string;
      name: string;
    };
    hospital: {
      code: string;
      name: string;
    };
    declineReason: string;
    receptionInfo: {
      name: string;
      rrn: string;
      phoneNum: string;
      jibunAddress: string;
      roadAddress: string;
      detailedAddress: string;
      location: {
        latitude: number;
        longitude: number;
      };
    };
  }[];
}
/* 주치의 인증 내역 */
/* GET /admin/visitCheck/summary */
export interface AdminVisitCheckSummaryDataType {
  count: {
    total: number;
    declined: number;
    waitRegister: number;
    inChecking: number;
    completed: number;
  };
}
/*  */
/* 병원 추가 요청 내역 */
/* GET /admin/hospitalAddition/details/list */
export interface AdminHospitalAdditionDetailsListDataType {
  count: {
    total: number;
  };
  additionList: {
    patient: {
      code: string;
    };
    hospital: {
      name: string;
      sido: string;
      sigungu: string;
    };
    address: {
      jibunAddress: string;
      roadAddress: string;
      detailedAddress: string;
    };
    isAgreeNoti: boolean;
    registeredHospital: {
      code: string;
      name: string;
      phoneNum: string;
    };
    code: string;
    createdAt: string;
    isSendNoti: boolean;
    timestamp: {
      registeredDateTime: string;
      notiDateTime: string;
    };
  }[];
}
/* POST /admin/hospitalAddition/notification */
export interface AdminHospitalAdditionNotificationDataType {
  hospital: {
    name: string;
    sido: string;
    sigungu: string;
  };
  address: {
    jibunAddress: string;
    roadAddress: string;
    detailedAddress: string;
  };
  isAgreeNoti: boolean;
  registeredHospital: {
    code: string;
    name: string;
    phoneNum: string;
  };
  code: string;
  createdAt: string;
  isSendNoti: boolean;
  timestamp: {
    registeredDateTime: string;
    notiDateTime: string;
  };
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
  /* 주치의 인증 내역 */
  /* GET /admin/visitCheck/list */
  AdminVisitCheckListData: null | AdminVisitCheckListDataType;
  setAdminVisitCheckListData: (e: null | AdminVisitCheckListDataType) => void;
  /* GET /admin/visitCheck/summary */
  AdminVisitCheckSummaryData: null | AdminVisitCheckSummaryDataType;
  setAdminVisitCheckSummaryData: (e: null | AdminVisitCheckSummaryDataType) => void;
  /*  */
  /* 병원 추가 요청 내역 */
  /* GET /admin/hospitalAddition/details/list */
  AdminHospitalAdditionDetailsListData: null | AdminHospitalAdditionDetailsListDataType;
  setAdminHospitalAdditionDetailsListData: (
    e: null | AdminHospitalAdditionDetailsListDataType
  ) => void;
  /* POST /admin/hospitalAddition/notification */
  AdminHospitalAdditionNotificationData: [] | AdminHospitalAdditionNotificationDataType[];
  setAdminHospitalAdditionNotificationData: (
    e: [] | AdminHospitalAdditionNotificationDataType[]
  ) => void;
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
  /* 주치의 인증 내역 */
  /* GET /admin/visitCheck/list */
  AdminVisitCheckListData: null,
  setAdminVisitCheckListData(e: null | AdminVisitCheckListDataType) {
    this.AdminVisitCheckListData = e;
  },
  /* GET /admin/visitCheck/summary */
  AdminVisitCheckSummaryData: null,
  setAdminVisitCheckSummaryData(e: null | AdminVisitCheckSummaryDataType) {
    this.AdminVisitCheckSummaryData = e;
  },
  /*  */
  /* 병원 추가 요청 내역 */
  /* GET /admin/hospitalAddition/details/list */
  AdminHospitalAdditionDetailsListData: null,
  setAdminHospitalAdditionDetailsListData(e: null | AdminHospitalAdditionDetailsListDataType) {
    this.AdminHospitalAdditionDetailsListData = e;
  },
  /* POST /admin/hospitalAddition/notification */
  AdminHospitalAdditionNotificationData: [],
  setAdminHospitalAdditionNotificationData(e: [] | AdminHospitalAdditionNotificationDataType[]) {
    this.AdminHospitalAdditionNotificationData = e;
  },
  /*  */
});

export { HospitalData };
