/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

/* 타이틀, 그리고 필터 */
import { BoardTitleAndFilterFrame } from 'styles/components/common/Frame';
/*  */
/* 타이틀 */
import {
  /* 내용 */
  TitleFrame,
  TitleComponent,
  TitleTextFrame,
  TitleTextComponent,
  /* 페이지 새로고침 */
  TitlePageRefreshFrame,
  TitlePageRefreshButtonFrame,
  TitlePageRefreshButtonComponent,
  /* 필터 스위치 */
  TitleFilterFrame,
  TitleFilterTextFrame,
  TitleFilterTextComponent,
  TitleFilterButtonFrame,
  TitleFilterButtonComponent,
  /* 필터 초기화 */
  TitleFilterRefreshFrame,
  TitleFilterRefreshButtonFrame,
  TitleFilterRefreshButtonComponent,
  /* 데이터 다운로드 */
  TitleFilterDownloadFrame,
  TitleFilterDownloadButtonFrame,
  TitleFilterDownloadButtonComponent,
  /* 검색 */
  TitleSearchFrame,
  TitleSearchButtonFrame,
  TitleSearchButtonComponent,
} from 'styles/components/common/Title';
/*  */
/* 필터 */
import {
  FilterFrame,
  FilterComponent,
  FilterElementFrame,
  FilterElementComponent,
  FilterElementTitleFrame,
  FilterElementTitleComponent,
  FilterElementTitleTextComponent,
  FilterElementBoardFrame,
  FilterElementBoardComponent,
  FilterElementBoardInputComponent,
  FilterElementBoardSelectComponent,
  FilterElementBoardOptionComponent,
  FilterElementBoardSelectedComponent,
  FilterElementBoardSelectedTextFrame,
  FilterElementBoardSelectedTextComponent,
  FilterElementBoardSelectedImageFrame,
  FilterElementBoardSelectedImageComponent,
} from 'styles/components/common/Filter';
/* 통계 */
import {
  StatisticFrame,
  StatisticComponent,
  StatisticElementFrame,
  StatisticElementComponent,
  StatisticElementTitleFrame,
  StatisticElementTitleComponent,
  StatisticElementTitleTextFrame,
  StatisticElementTitleTextComponent,
  StatisticElementBoardFrame,
  StatisticElementBoardComponent,
  StatisticElementBoardTextFrame,
  StatisticElementBoardTextComponent,
} from 'styles/components/common/Statistic';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import { AllowNumber } from 'libraries/constraint/AllowNumber';

import { GetReviewList } from 'services/review/GetReviewList';
import { GetReviewListExport } from 'services/review/GetReviewListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, ReviewData } = useStore();
  /* 필터 스위치 */
  const onChangeFilterSwitchFlag = () => {
    AdminData.setFilterSwitchFlag(!AdminData.FilterSwitchFlag);
  };
  /* 통계 스위치 */
  const onChangeStatisticSwitchFlag = () => {
    AdminData.setStatisticSwitchFlag(!AdminData.StatisticSwitchFlag);
  };
  /* 필터 초기화 */
  const onClickFilterRefresh = () => {
    setTreatmentCode('');
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setReviewOperationState(['전체']);
    setHospitalName('');
    setDoctorName('');
    setPatientName('');
    setReviewRatingState(['전체']);
    setReviewRegistrationState(['전체']);
    setReviewPublicState(['전체']);
    setReviewReplyState(['전체']);
    setReviewComplaintState(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetReviewListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetReviewListFunction();
    ReviewData.setPageNavigator(1);
    ReviewData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 진료 번호 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 시작 조회 기간 */
  const [StartInquiryPeriod, setStartInquiryPeriod] = useState('');
  const onChangeStartInquiryPeriod = (event: { target: { value: string } }) => {
    setStartInquiryPeriod(AllowNumber(event.target.value));
  };
  /* 종료 조회 기간 */
  const [EndInquiryPeriod, setEndInquiryPeriod] = useState('');
  const onChangeEndInquiryPeriod = (event: { target: { value: string } }) => {
    setEndInquiryPeriod(AllowNumber(event.target.value));
  };
  /* 리뷰 상태 */
  const ReviewOperationStateList = ['선택', '전체', '정상', '블라인드', '삭제'];
  const [ReviewOperationState, setReviewOperationState] = useState<string[]>(['전체']);
  const onChangeReviewOperationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewOperationState([event.target.value]);
    } else if (ReviewOperationState.indexOf(event.target.value) === -1) {
      if (ReviewOperationState.indexOf('전체') === -1) {
        setReviewOperationState([event.target.value]);
        /* setReviewOperationState([...ReviewOperationState, event.target.value]); */
      } else {
        setReviewOperationState([event.target.value]);
      }
    } else if (ReviewOperationState.length === 1) {
      setReviewOperationState(['전체']);
    } else {
      setReviewOperationState(
        ReviewOperationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteReviewOperationState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewOperationState.length === 1 && ReviewOperationState[0] === key) {
      setReviewOperationState(['전체']);
    } else {
      setReviewOperationState(ReviewOperationState.filter(element => element !== key));
    }
  };
  /* 병원 이름 */
  const [HospitalName, setHospitalName] = useState('');
  const onChangeHospitalName = (event: { target: { value: string } }) => {
    setHospitalName(event.target.value);
  };
  /* 의사 이름 */
  const [DoctorName, setDoctorName] = useState('');
  const onChangeDoctorName = (event: { target: { value: string } }) => {
    setDoctorName(event.target.value);
  };
  /* 환자 이름 */
  const [PatientName, setPatientName] = useState('');
  const onChangePatientName = (event: { target: { value: string } }) => {
    setPatientName(event.target.value);
  };
  /* 점수 상태 */
  const ReviewRatingStateList = ['선택', '전체', '5점', '4점', '3점', '2점', '1점'];
  const [ReviewRatingState, setReviewRatingState] = useState<string[]>(['전체']);
  const onChangeReviewRatingState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewRatingState([event.target.value]);
    } else if (ReviewRatingState.indexOf(event.target.value) === -1) {
      if (ReviewRatingState.indexOf('전체') === -1) {
        setReviewRatingState([event.target.value]);
        /* setReviewRatingState([...ReviewRatingState, event.target.value]); */
      } else {
        setReviewRatingState([event.target.value]);
      }
    } else if (ReviewRatingState.length === 1) {
      setReviewRatingState(['전체']);
    } else {
      setReviewRatingState(ReviewRatingState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteReviewRatingState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewRatingState.length === 1 && ReviewRatingState[0] === key) {
      setReviewRatingState(['전체']);
    } else {
      setReviewRatingState(ReviewRatingState.filter(element => element !== key));
    }
  };
  /* 리뷰 블라인드 상태 */
  const ReviewRegistrationStateList = ['선택', '전체', '없음', '리뷰', '댓글', '리뷰, 댓글'];
  const [ReviewRegistrationState, setReviewRegistrationState] = useState<string[]>(['전체']);
  const onChangeReviewRegistrationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewRegistrationState([event.target.value]);
    } else if (ReviewRegistrationState.indexOf(event.target.value) === -1) {
      if (ReviewRegistrationState.indexOf('전체') === -1) {
        setReviewRegistrationState([event.target.value]);
        /* setReviewRegistrationState([...ReviewRegistrationState, event.target.value]); */
      } else {
        setReviewRegistrationState([event.target.value]);
      }
    } else if (ReviewRegistrationState.length === 1) {
      setReviewRegistrationState(['전체']);
    } else {
      setReviewRegistrationState(
        ReviewRegistrationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteReviewRegistrationState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewRegistrationState.length === 1 && ReviewRegistrationState[0] === key) {
      setReviewRegistrationState(['전체']);
    } else {
      setReviewRegistrationState(ReviewRegistrationState.filter(element => element !== key));
    }
  };
  /* 리뷰 공개 상태 */
  const ReviewPublicStateList = ['선택', '전체', '공개', '비공개'];
  const [ReviewPublicState, setReviewPublicState] = useState<string[]>(['전체']);
  const onChangeReviewPublicState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewPublicState([event.target.value]);
    } else if (ReviewPublicState.indexOf(event.target.value) === -1) {
      if (ReviewPublicState.indexOf('전체') === -1) {
        setReviewPublicState([event.target.value]);
        /* setReviewPublicState([...ReviewPublicState, event.target.value]); */
      } else {
        setReviewPublicState([event.target.value]);
      }
    } else if (ReviewPublicState.length === 1) {
      setReviewPublicState(['전체']);
    } else {
      setReviewPublicState(ReviewPublicState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteReviewPublicState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewPublicState.length === 1 && ReviewPublicState[0] === key) {
      setReviewPublicState(['전체']);
    } else {
      setReviewPublicState(ReviewPublicState.filter(element => element !== key));
    }
  };
  /* 리뷰 댓글 상태 */
  const ReviewReplyStateList = ['선택', '전체', '있음', '없음'];
  const [ReviewReplyState, setReviewReplyState] = useState<string[]>(['전체']);
  const onChangeReviewReplyState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewReplyState([event.target.value]);
    } else if (ReviewReplyState.indexOf(event.target.value) === -1) {
      if (ReviewReplyState.indexOf('전체') === -1) {
        setReviewReplyState([event.target.value]);
        /* setReviewReplyState([...ReviewReplyState, event.target.value]); */
      } else {
        setReviewReplyState([event.target.value]);
      }
    } else if (ReviewReplyState.length === 1) {
      setReviewReplyState(['전체']);
    } else {
      setReviewReplyState(ReviewReplyState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteReviewReplyState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewReplyState.length === 1 && ReviewReplyState[0] === key) {
      setReviewReplyState(['전체']);
    } else {
      setReviewReplyState(ReviewReplyState.filter(element => element !== key));
    }
  };
  /* 리뷰 불만 사항 상태 */
  const ReviewComplaintStateList = ['선택', '전체', '있음', '없음'];
  const [ReviewComplaintState, setReviewComplaintState] = useState<string[]>(['전체']);
  const onChangeReviewComplaintState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setReviewComplaintState([event.target.value]);
    } else if (ReviewComplaintState.indexOf(event.target.value) === -1) {
      if (ReviewComplaintState.indexOf('전체') === -1) {
        setReviewComplaintState([event.target.value]);
        /* setReviewComplaintState([...ReviewComplaintState, event.target.value]); */
      } else {
        setReviewComplaintState([event.target.value]);
      }
    } else if (ReviewComplaintState.length === 1) {
      setReviewComplaintState(['전체']);
    } else {
      setReviewComplaintState(
        ReviewComplaintState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteReviewComplaintState = (props: { key: any }) => {
    const { key } = props;
    if (ReviewComplaintState.length === 1 && ReviewComplaintState[0] === key) {
      setReviewComplaintState(['전체']);
    } else {
      setReviewComplaintState(ReviewComplaintState.filter(element => element !== key));
    }
  };
  /* 데이터 */
  const GetReviewListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetReviewListData = {
      treatCode: null || TreatmentCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      reviewStatus: ReviewOperationState[0] === '전체' ? null : ReviewOperationState[0],
      isBlinded: ReviewRegistrationState[0] === '전체' ? null : ReviewRegistrationState[0],
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      patientName: null || PatientName,
      rating: ReviewRatingState[0] === '전체' ? null : ReviewRatingState[0],
      isPublic: ReviewPublicState[0] === '전체' ? null : ReviewPublicState[0],
      hasReply: ReviewReplyState[0] === '전체' ? null : ReviewReplyState[0],
      hasNegative: ReviewComplaintState[0] === '전체' ? null : ReviewComplaintState[0],

      page: null || ReviewData.PageNavigator - 1,
    };
    const response = await GetReviewList(GetReviewListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_REVIEW_LIST',
        Title: '리뷰 내역 불러오기 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CommonData,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    TreatmentCode,
    ReviewComplaintState,
    ReviewData.PageNavigator,
    ReviewOperationState,
    ReviewPublicState,
    ReviewRatingState,
    ReviewRegistrationState,
    ReviewReplyState,
    StartInquiryPeriod,
  ]);
  const GetReviewListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetReviewListExportData = {
      treatCode: null || TreatmentCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      reviewStatus: ReviewOperationState[0] === '전체' ? null : ReviewOperationState[0],
      isBlinded: ReviewRegistrationState[0] === '전체' ? null : ReviewRegistrationState[0],
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      patientName: null || PatientName,
      rating: ReviewRatingState[0] === '전체' ? null : ReviewRatingState[0],
      isPublic: ReviewPublicState[0] === '전체' ? null : ReviewPublicState[0],
      hasReply: ReviewReplyState[0] === '전체' ? null : ReviewReplyState[0],
      hasNegative: ReviewComplaintState[0] === '전체' ? null : ReviewComplaintState[0],

      /* page: null || ReviewData.PageNavigator - 1, */
    };
    const response = await GetReviewListExport(GetReviewListExportData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_REVIEW_EXPORT_LIST',
        Title: '리뷰 내역 데이터 다운로드 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CommonData,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    TreatmentCode,
    ReviewComplaintState,
    ReviewOperationState,
    ReviewPublicState,
    ReviewRatingState,
    ReviewRegistrationState,
    ReviewReplyState,
    StartInquiryPeriod,
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetReviewListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetReviewListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ReviewData.PageNavigator]);

  /* 통계 */
  const StatisticsList = [
    '전체',

    '정상',
    '블라인드',
    '삭제',

    '리뷰',
    '댓글',

    '5점',
    '4점',
    '3점',
    '2점',
    '1점',
  ];

  /* ENTER */
  const onKeyPressEnter = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <BoardTitleAndFilterFrame>
      <TitleFrame>
        <TitleComponent>
          {/* 내용 */}
          <TitleTextFrame>
            <TitleTextComponent>리뷰 내역</TitleTextComponent>
          </TitleTextFrame>
          {/*  */}
          {/* 페이지 세로고침 */}
          <TitlePageRefreshFrame>
            <TitlePageRefreshButtonFrame onClick={onClickPageRefresh}>
              <TitlePageRefreshButtonComponent>페이지 새로고침</TitlePageRefreshButtonComponent>
            </TitlePageRefreshButtonFrame>
          </TitlePageRefreshFrame>
          {/*  */}
          {/* 필터 스위치 */}
          <TitleFilterFrame>
            <TitleFilterTextFrame>
              <TitleFilterTextComponent>필터</TitleFilterTextComponent>
            </TitleFilterTextFrame>
            <TitleFilterButtonFrame>
              <TitleFilterButtonComponent
                type="checkbox"
                checked={AdminData.FilterSwitchFlag}
                onChange={onChangeFilterSwitchFlag}
              />
            </TitleFilterButtonFrame>
          </TitleFilterFrame>
          {/* 통계 스위치 */}
          <TitleFilterFrame>
            <TitleFilterTextFrame>
              <TitleFilterTextComponent>통계</TitleFilterTextComponent>
            </TitleFilterTextFrame>
            <TitleFilterButtonFrame>
              <TitleFilterButtonComponent
                type="checkbox"
                checked={AdminData.StatisticSwitchFlag}
                onChange={onChangeStatisticSwitchFlag}
              />
            </TitleFilterButtonFrame>
          </TitleFilterFrame>
          {/*  */}
          {/* 필터 초기화 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleFilterRefreshFrame>
              <TitleFilterRefreshButtonFrame onClick={onClickFilterRefresh}>
                <TitleFilterRefreshButtonComponent>필터 초기화</TitleFilterRefreshButtonComponent>
              </TitleFilterRefreshButtonFrame>
            </TitleFilterRefreshFrame>
          ) : null}
          {/*  */}
          {/* 데이터 다운로드 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleFilterDownloadFrame>
              <TitleFilterDownloadButtonFrame onClick={onClickFilterDownload}>
                <TitleFilterDownloadButtonComponent>
                  데이터 다운로드
                </TitleFilterDownloadButtonComponent>
              </TitleFilterDownloadButtonFrame>
            </TitleFilterDownloadFrame>
          ) : null}
          {/*  */}
          {/* 검색 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleSearchFrame>
              <TitleSearchButtonFrame onClick={onClickSearch}>
                <TitleSearchButtonComponent>검색</TitleSearchButtonComponent>
              </TitleSearchButtonFrame>
            </TitleSearchFrame>
          ) : null}
          {/*  */}
        </TitleComponent>
      </TitleFrame>
      {AdminData.FilterSwitchFlag ? (
        <FilterFrame>
          <FilterComponent>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={TreatmentCode}
                      onChange={onChangeTreatmentCode}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      시작 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={StartInquiryPeriod}
                      onChange={onChangeStartInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      종료 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={EndInquiryPeriod}
                      onChange={onChangeEndInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>리뷰 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewOperationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewOperationStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125%">
                  <FilterElementBoardComponent>
                    {ReviewOperationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewOperationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewOperationState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>병원 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalName}
                      onChange={onChangeHospitalName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>의사 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DoctorName}
                      onChange={onChangeDoctorName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientName}
                      onChange={onChangePatientName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>리뷰 점수</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewRatingState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewRatingStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 점수 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125%">
                  <FilterElementBoardComponent>
                    {ReviewRatingState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewRatingState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewRatingState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="115px" width="115px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 블라인드 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="105px" width="105px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewRegistrationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewRegistrationStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="140px" width="140px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 블라인드 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="80px" width="80%">
                  <FilterElementBoardComponent>
                    {ReviewRegistrationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewRegistrationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewRegistrationState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 공개 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewPublicState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewPublicStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="120px" width="120px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 공개 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {ReviewPublicState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewPublicState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewPublicState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 댓글 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewReplyState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewReplyStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="120px" width="120px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 댓글 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {ReviewReplyState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewReplyState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewReplyState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="120px" width="120px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 불만 사항 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeReviewComplaintState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {ReviewComplaintStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="145px" width="145px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      리뷰 불만 사항 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="75px" width="75%">
                  <FilterElementBoardComponent>
                    {ReviewComplaintState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== ReviewComplaintState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteReviewComplaintState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
          </FilterComponent>
        </FilterFrame>
      ) : null}
      {AdminData.StatisticSwitchFlag ? (
        <StatisticFrame>
          <StatisticComponent>
            {/*  */}
            {StatisticsList.map(element =>
              element === '전체' ||
              element === '정상' ||
              element === '블라인드' ||
              element === '삭제' ||
              element === '리뷰' ||
              element === '댓글' ? (
                <StatisticElementFrame key={element}>
                  <StatisticElementComponent>
                    <StatisticElementTitleFrame
                      minWidth={`${element.length * 10 + 40}px`}
                      width={`${element.length * 10 + 40}px`}
                    >
                      <StatisticElementTitleComponent>
                        <StatisticElementTitleTextFrame>
                          <StatisticElementTitleTextComponent
                            width="100%"
                            lineHeight="30px"
                            color={
                              element === '전체'
                                ? '#000000'
                                : element === '정상'
                                ? 'rgb(112,173,71)'
                                : element === '블라인드'
                                ? 'rgb(192,0,0)'
                                : element === '삭제'
                                ? 'rgb(192,0,0)'
                                : element === '리뷰'
                                ? '#000000'
                                : element === '댓글'
                                ? '#000000'
                                : '#000000'
                            }
                          >
                            {element}
                          </StatisticElementTitleTextComponent>
                        </StatisticElementTitleTextFrame>
                      </StatisticElementTitleComponent>
                    </StatisticElementTitleFrame>
                    <StatisticElementBoardFrame
                      minWidth={`${220 - (element.length * 10 + 40)}px`}
                      width={`${220 - (element.length * 10 + 40)}px`}
                    >
                      <StatisticElementBoardComponent>
                        <StatisticElementBoardTextFrame>
                          <StatisticElementBoardTextComponent
                            width="100%"
                            textAlign="right"
                            lineHeight="30px"
                            color={
                              element === '전체'
                                ? '#000000'
                                : element === '정상'
                                ? 'rgb(112,173,71)'
                                : element === '블라인드'
                                ? 'rgb(192,0,0)'
                                : element === '삭제'
                                ? 'rgb(192,0,0)'
                                : element === '리뷰'
                                ? '#000000'
                                : element === '댓글'
                                ? '#000000'
                                : '#000000'
                            }
                          >
                            {element === '전체'
                              ? ReviewData.ReviewListData?.count?.total
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.total.toString()
                                  )}건`
                                : '0건'
                              : element === '정상'
                              ? ReviewData.ReviewListData?.count?.normalCnt
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.normalCnt.toString()
                                  )}건`
                                : '0건'
                              : element === '블라인드'
                              ? ReviewData.ReviewListData?.count?.blindedCnt
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.blindedCnt.toString()
                                  )}건`
                                : '0건'
                              : element === '삭제'
                              ? ReviewData.ReviewListData?.count?.deletedCnt
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.deletedCnt.toString()
                                  )}건`
                                : '0건'
                              : element === '리뷰'
                              ? ReviewData.ReviewListData?.count?.total
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.total.toString()
                                  )}건`
                                : '0건'
                              : element === '댓글'
                              ? ReviewData.ReviewListData?.count?.replyCnt
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.replyCnt.toString()
                                  )}건`
                                : '0건'
                              : '0건'}
                          </StatisticElementBoardTextComponent>
                        </StatisticElementBoardTextFrame>
                      </StatisticElementBoardComponent>
                    </StatisticElementBoardFrame>
                  </StatisticElementComponent>
                </StatisticElementFrame>
              ) : null
            )}
            {/*  */}
          </StatisticComponent>
          <StatisticComponent>
            {/*  */}
            {StatisticsList.map(element =>
              element === '5점' ||
              element === '4점' ||
              element === '3점' ||
              element === '2점' ||
              element === '1점' ? (
                <StatisticElementFrame key={element}>
                  <StatisticElementComponent>
                    <StatisticElementTitleFrame
                      minWidth={`${element.length * 10 + 40}px`}
                      width={`${element.length * 10 + 40}px`}
                    >
                      <StatisticElementTitleComponent>
                        <StatisticElementTitleTextFrame>
                          <StatisticElementTitleTextComponent
                            width="100%"
                            lineHeight="30px"
                            color={
                              element === '5점'
                                ? 'rgb(255, 192, 0)'
                                : element === '4점'
                                ? 'rgb(255, 192, 0)'
                                : element === '3점'
                                ? 'rgb(255, 192, 0)'
                                : element === '2점'
                                ? 'rgb(255, 192, 0)'
                                : element === '1점'
                                ? 'rgb(255, 192, 0)'
                                : '#000000'
                            }
                          >
                            {element}
                          </StatisticElementTitleTextComponent>
                        </StatisticElementTitleTextFrame>
                      </StatisticElementTitleComponent>
                    </StatisticElementTitleFrame>
                    <StatisticElementBoardFrame
                      minWidth={`${220 - (element.length * 10 + 40)}px`}
                      width={`${220 - (element.length * 10 + 40)}px`}
                    >
                      <StatisticElementBoardComponent>
                        <StatisticElementBoardTextFrame>
                          <StatisticElementBoardTextComponent
                            width="100%"
                            textAlign="right"
                            lineHeight="30px"
                            color={
                              element === '5점'
                                ? 'rgb(255, 192, 0)'
                                : element === '4점'
                                ? 'rgb(255, 192, 0)'
                                : element === '3점'
                                ? 'rgb(255, 192, 0)'
                                : element === '2점'
                                ? 'rgb(255, 192, 0)'
                                : element === '1점'
                                ? 'rgb(255, 192, 0)'
                                : '#000000'
                            }
                          >
                            {element === '5점'
                              ? ReviewData.ReviewListData?.count?.rating5
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.rating5.toString()
                                  )}건`
                                : '0건'
                              : element === '4점'
                              ? ReviewData.ReviewListData?.count?.rating4
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.rating4.toString()
                                  )}건`
                                : '0건'
                              : element === '3점'
                              ? ReviewData.ReviewListData?.count?.rating3
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.rating3.toString()
                                  )}건`
                                : '0건'
                              : element === '2점'
                              ? ReviewData.ReviewListData?.count?.rating2
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.rating2.toString()
                                  )}건`
                                : '0건'
                              : element === '1점'
                              ? ReviewData.ReviewListData?.count?.rating1
                                ? `${ConvertCommaNumber(
                                    ReviewData.ReviewListData?.count?.rating1.toString()
                                  )}건`
                                : '0건'
                              : '0건'}
                          </StatisticElementBoardTextComponent>
                        </StatisticElementBoardTextFrame>
                      </StatisticElementBoardComponent>
                    </StatisticElementBoardFrame>
                  </StatisticElementComponent>
                </StatisticElementFrame>
              ) : null
            )}
            {/*  */}
          </StatisticComponent>
        </StatisticFrame>
      ) : null}
    </BoardTitleAndFilterFrame>
  );
});

export default BoardTitleAndFilter;
