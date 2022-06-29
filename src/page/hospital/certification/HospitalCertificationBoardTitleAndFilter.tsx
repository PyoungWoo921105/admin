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
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';

import { GetAdminVisitCheckList } from 'services/admin/visitCheck/GetAdminVisitCheckList';
import { GetAdminVisitCheckSummary } from 'services/admin/visitCheck/GetAdminVisitCheckSummary';
import { GetAdminVisitCheckListExport } from 'services/admin/visitCheck/GetAdminVisitCheckListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, HospitalData } = useStore();
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
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setCertificationState(['전체']);
    setHospitalName('');
    setPatientName('');
    setPatientPhoneNumber('');
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminVisitCheckListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminVisitCheckListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminVisitCheckSummaryFunction();
    HospitalData.setPageNavigator(1);
    HospitalData.setParagraphNavigator(1);
  };
  /* 필터 */
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
  /* 인증 상태 */
  const CertificationStateList = [
    '선택',
    '전체',
    '회원가입 대기',
    '인증 요청',
    '인증 완료',
    '인증 거절',
  ];
  const [CertificationState, setCertificationState] = useState<string[]>(['전체']);
  const onChangeCertificationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setCertificationState([event.target.value]);
    } else if (CertificationState.indexOf(event.target.value) === -1) {
      if (CertificationState.indexOf('전체') === -1) {
        /* setCertificationState([event.target.value]); */
        setCertificationState([...CertificationState, event.target.value]);
      } else {
        setCertificationState([event.target.value]);
      }
    } else if (CertificationState.length === 1) {
      setCertificationState(['전체']);
    } else {
      setCertificationState(CertificationState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteCertificationState = (props: { key: any }) => {
    const { key } = props;
    if (CertificationState.length === 1 && CertificationState[0] === key) {
      setCertificationState(['전체']);
    } else {
      setCertificationState(CertificationState.filter(element => element !== key));
    }
  };
  /* 병원 이름 */
  const [HospitalName, setHospitalName] = useState('');
  const onChangeHospitalName = (event: { target: { value: string } }) => {
    setHospitalName(event.target.value);
  };
  /* 환자 이름 */
  const [PatientName, setPatientName] = useState('');
  const onChangePatientName = (event: { target: { value: string } }) => {
    setPatientName(event.target.value);
  };
  /* 환자 전화번호 */
  const [PatientPhoneNumber, setPatientPhoneNumber] = useState('');
  const onChangePatientPhoneNumber = (event: { target: { value: string } }) => {
    setPatientPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
  };
  /* 데이터 */
  const GetAdminVisitCheckListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempCertificationState = [];
    if (CertificationState.length !== 0 && CertificationState[0] !== '전체') {
      for (let i = 0; i < CertificationState.length; i += 1) {
        if (CertificationState[i] === '회원가입 대기') {
          TempCertificationState.push('wait-register');
        } else if (CertificationState[i] === '인증 요청') {
          TempCertificationState.push('in-checking');
        } else if (CertificationState[i] === '인증 완료') {
          TempCertificationState.push('completed');
        } else if (CertificationState[i] === '인증 거절') {
          TempCertificationState.push('declined');
        }
      }
    }
    const GetAdminVisitCheckListData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: CertificationState[0] === '전체' ? null : TempCertificationState,
      hospitalName: null || HospitalName,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,

      size: 20,
      from: HospitalData.PageNavigator ? (HospitalData.PageNavigator - 1) * 20 : undefined,

      sortOption: 'created-date-time',
      sortType: 'desc',
    };
    const response = await GetAdminVisitCheckList(GetAdminVisitCheckListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_ADMIN_VISIT_CHECK_LIST',
        Title: '주치의 인증 내역 불러오기 실패',
        Contents: MetaError?.data?.message
          ? [MetaError?.data?.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CertificationState,
    CommonData,
    EndInquiryPeriod,
    HospitalData.PageNavigator,
    HospitalName,
    PatientName,
    PatientPhoneNumber,
    StartInquiryPeriod,
  ]);
  const GetAdminVisitCheckSummaryFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempCertificationState = [];
    if (CertificationState.length !== 0 && CertificationState[0] !== '전체') {
      for (let i = 0; i < CertificationState.length; i += 1) {
        if (CertificationState[i] === '회원가입 대기') {
          TempCertificationState.push('wait-register');
        } else if (CertificationState[i] === '인증 요청') {
          TempCertificationState.push('in-checking');
        } else if (CertificationState[i] === '인증 완료') {
          TempCertificationState.push('completed');
        } else if (CertificationState[i] === '인증 거절') {
          TempCertificationState.push('declined');
        }
      }
    }
    const GetAdminVisitCheckSummaryData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: CertificationState[0] === '전체' ? null : TempCertificationState,
      hospitalName: null || HospitalName,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
    };
    const response = await GetAdminVisitCheckSummary(GetAdminVisitCheckSummaryData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_ADMIN_VISIT_CHECK_SUMMARY',
        Title: '주치의 인증 통계 불러오기 실패',
        Contents: MetaError?.data?.message
          ? [MetaError?.data?.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CertificationState,
    CommonData,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    PatientPhoneNumber,
    StartInquiryPeriod,
  ]);
  const GetAdminVisitCheckListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetAdminVisitCheckListExportData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: CertificationState[0] === '전체' ? null : CertificationState,
      hospitalName: null || HospitalName,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,

      /* page: null || HospitalData.PageNavigator - 1, */
    };
    const response = await GetAdminVisitCheckListExport(GetAdminVisitCheckListExportData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_ADMIN_VISIT_CHECK_LIST_EXPORT',
        Title: '주치의 인증 내역 데이터 다운로드 실패',
        Contents: MetaError?.data?.message
          ? [MetaError?.data?.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CertificationState,
    CommonData,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    PatientPhoneNumber,
    StartInquiryPeriod,
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminVisitCheckListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminVisitCheckSummaryFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HospitalData.PageNavigator]);

  /* 통계 */
  const StatisticsList = ['전체', '회원가입 대기', '인증 요청', '인증 완료', '인증 거절'];

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
            <TitleTextComponent>주치의 인증 내역</TitleTextComponent>
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
                    <FilterElementTitleTextComponent>인증 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeCertificationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {CertificationStateList.map(element => (
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
                      인증 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125%">
                  <FilterElementBoardComponent>
                    {CertificationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== CertificationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteCertificationState({ key: element })}
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
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
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
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientPhoneNumber}
                      onChange={onChangePatientPhoneNumber}
                      placeholder="숫자만 입력해 주세요."
                      onKeyPress={onKeyPressEnter}
                    />
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
            {StatisticsList.map(element => (
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
                              : element === '회원가입 대기'
                              ? 'rgb(255, 192, 0)'
                              : element === '인증 요청'
                              ? 'rgb(255, 192, 0)'
                              : element === '인증 완료'
                              ? 'rgb(112,173,71)'
                              : element === '인증 거절'
                              ? 'rgb(192,0,0)'
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
                              : element === '회원가입 대기'
                              ? 'rgb(255, 192, 0)'
                              : element === '인증 요청'
                              ? 'rgb(255, 192, 0)'
                              : element === '인증 완료'
                              ? 'rgb(112,173,71)'
                              : element === '인증 거절'
                              ? 'rgb(192,0,0)'
                              : '#000000'
                          }
                        >
                          {element === '전체'
                            ? HospitalData.AdminVisitCheckListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminVisitCheckListData?.count?.total.toString()
                                )}건`
                              : '0건'
                            : element === '회원가입 대기'
                            ? HospitalData.AdminVisitCheckSummaryData?.count?.waitRegister
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminVisitCheckSummaryData?.count?.waitRegister.toString()
                                )}건`
                              : '0건'
                            : element === '인증 요청'
                            ? HospitalData.AdminVisitCheckSummaryData?.count?.inChecking
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminVisitCheckSummaryData?.count?.inChecking.toString()
                                )}건`
                              : '0건'
                            : element === '인증 완료'
                            ? HospitalData.AdminVisitCheckSummaryData?.count?.completed
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminVisitCheckSummaryData?.count?.completed.toString()
                                )}건`
                              : '0건'
                            : element === '인증 거절'
                            ? HospitalData.AdminVisitCheckSummaryData?.count?.declined
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminVisitCheckSummaryData?.count?.declined.toString()
                                )}건`
                              : '0건'
                            : '0건'}
                        </StatisticElementBoardTextComponent>
                      </StatisticElementBoardTextFrame>
                    </StatisticElementBoardComponent>
                  </StatisticElementBoardFrame>
                </StatisticElementComponent>
              </StatisticElementFrame>
            ))}
            {/*  */}
          </StatisticComponent>
        </StatisticFrame>
      ) : null}
    </BoardTitleAndFilterFrame>
  );
});

export default BoardTitleAndFilter;
