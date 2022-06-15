/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* 리뷰 내역 */
/* GET /review/list */
export interface ReviewListDataType {
  count: {
    total: number;
    rating5: number;
    rating4: number;
    rating3: number;
    rating2: number;
    rating1: number;
    replyCnt: number;
    normalCnt: number;
    blindedCnt: number;
    deletedCnt: number;
  };
  reviewList: {
    code: string;
    taskCode: string;
    createdDateTime: string;
    reviewStatus: string;
    hospitalCode: string;
    hospitalName: string;
    doctorCode: string;
    doctorName: string;
    patientCode: string;
    patientName: string;
    rating: number;
    hasNegative: boolean;
    isPublic: boolean;
    hasReply: boolean;
    blind: string;
    reviewBlindedDateTime: string;
    replyBlindedDateTime: string;
  }[];
}
/*  */

export interface ReviewDataType {
  /* 페이지 */
  PageNavigator: number;
  setPageNavigator: (e: number) => void;
  ParagraphNavigator: number;
  setParagraphNavigator: (e: number) => void;
  /*  */
  /* 리뷰 내역 */
  /* GET /review/list */
  ReviewListData: null | ReviewListDataType;
  setReviewListData: (e: null | ReviewListDataType) => void;
  /*  */
}

const ReviewData = observable<ReviewDataType>({
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
  /* 리뷰 내역 */
  /* GET /review/list */
  ReviewListData: null,
  setReviewListData(e: null | ReviewListDataType) {
    this.ReviewListData = e;
  },
  /*  */
});

export { ReviewData };
