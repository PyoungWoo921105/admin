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

import { GetHospitalList } from 'services/hospital/GetHospitalList';
import { GetHospitalListExport } from 'services/hospital/GetHospitalListExport';
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
    setHospitalCode('');
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setHospitalOperationState(['전체']);
    setHospitalRegistrationState(['전체']);
    setHospitalName('');
    setHospitalPhoneNumber('');
    setCorporateRegistrationNumber('');
    setDepartmentName('');
    setDiseaseName('');
    setDoctorName('');
    setPharmacyName('');
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetHospitalListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetHospitalListFunction();
    HospitalData.setPageNavigator(1);
    HospitalData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 병원 코드 */
  const [HospitalCode, setHospitalCode] = useState('');
  const onChangeHospitalCode = (event: { target: { value: string } }) => {
    setHospitalCode(event.target.value);
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
  /* 병원 운영 상태 */
  const HospitalOperationStateList = [
    '선택',
    '전체',
    '진료 가능',
    '점심 시간',
    '방문 가능',
    '진료 종료',
  ];
  const [HospitalOperationState, setHospitalOperationState] = useState<string[]>(['전체']);
  const onChangeHospitalOperationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setHospitalOperationState([event.target.value]);
    } else if (HospitalOperationState.indexOf(event.target.value) === -1) {
      if (HospitalOperationState.indexOf('전체') === -1) {
        setHospitalOperationState([event.target.value]);
        /* setHospitalOperationState([...HospitalOperationState, event.target.value]); */
      } else {
        setHospitalOperationState([event.target.value]);
      }
    } else if (HospitalOperationState.length === 1) {
      setHospitalOperationState(['전체']);
    } else {
      setHospitalOperationState(
        HospitalOperationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteHospitalOperationState = (props: { key: any }) => {
    const { key } = props;
    if (HospitalOperationState.length === 1 && HospitalOperationState[0] === key) {
      setHospitalOperationState(['전체']);
    } else {
      setHospitalOperationState(HospitalOperationState.filter(element => element !== key));
    }
  };
  /* 병원 등록 상태 */
  const HospitalRegistrationStateList = [
    '선택',
    '전체',
    '활성',
    '등록 대기',
    '등록 반려',
    '블라인드',
  ];
  const [HospitalRegistrationState, setHospitalRegistrationState] = useState<string[]>(['전체']);
  const onChangeHospitalRegistrationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setHospitalRegistrationState([event.target.value]);
    } else if (HospitalRegistrationState.indexOf(event.target.value) === -1) {
      if (HospitalRegistrationState.indexOf('전체') === -1) {
        setHospitalRegistrationState([event.target.value]);
        /* setHospitalRegistrationState([...HospitalRegistrationState, event.target.value]); */
      } else {
        setHospitalRegistrationState([event.target.value]);
      }
    } else if (HospitalRegistrationState.length === 1) {
      setHospitalRegistrationState(['전체']);
    } else {
      setHospitalRegistrationState(
        HospitalRegistrationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteHospitalRegistrationState = (props: { key: any }) => {
    const { key } = props;
    if (HospitalRegistrationState.length === 1 && HospitalRegistrationState[0] === key) {
      setHospitalRegistrationState(['전체']);
    } else {
      setHospitalRegistrationState(HospitalRegistrationState.filter(element => element !== key));
    }
  };
  /* 병원 이름 */
  const [HospitalName, setHospitalName] = useState('');
  const onChangeHospitalName = (event: { target: { value: string } }) => {
    setHospitalName(event.target.value);
  };
  /* 병원 전화번호 */
  const [HospitalPhoneNumber, setHospitalPhoneNumber] = useState('');
  const onChangeHospitalPhoneNumber = (event: { target: { value: string } }) => {
    setHospitalPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
  };
  /* 사업자등록 번호 */
  const [CorporateRegistrationNumber, setCorporateRegistrationNumber] = useState('');
  const onChangeCorporateRegistrationNumber = (event: { target: { value: string } }) => {
    setCorporateRegistrationNumber(AllowNumber(event.target.value));
  };
  /* 진료과 */
  const [DepartmentName, setDepartmentName] = useState('');
  const onChangeDepartmentName = (event: { target: { value: string } }) => {
    setDepartmentName(event.target.value);
  };
  /* 질환 */
  const [DiseaseName, setDiseaseName] = useState('');
  const onChangeDiseaseName = (event: { target: { value: string } }) => {
    setDiseaseName(event.target.value);
  };
  /* 소속 의사 이름 */
  const [DoctorName, setDoctorName] = useState('');
  const onChangeDoctorName = (event: { target: { value: string } }) => {
    setDoctorName(event.target.value);
  };
  /* 연계 약국 이름 */
  const [PharmacyName, setPharmacyName] = useState('');
  const onChangePharmacyName = (event: { target: { value: string } }) => {
    setPharmacyName(event.target.value);
  };
  /* 데이터 */
  const GetHospitalListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetHospitalListData = {
      hospitalCode: null || HospitalCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      state: HospitalOperationState[0] === '전체' ? null : HospitalOperationState[0],
      registerState: HospitalRegistrationState[0] === '전체' ? null : HospitalRegistrationState[0],
      hospitalName: null || HospitalName,
      hospitalPhoneNum: null || HospitalPhoneNumber,
      businessRegNum: null || CorporateRegistrationNumber,
      department: null || DepartmentName,
      disease: null || DiseaseName,
      doctorName: null || DoctorName,
      pharmacyName: null || PharmacyName,

      page: null || HospitalData.PageNavigator - 1,
    };
    const response = await GetHospitalList(GetHospitalListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_HOSPITAL_LIST',
        Title: '병원 내역 불러오기 실패',
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
    CorporateRegistrationNumber,
    DepartmentName,
    DiseaseName,
    DoctorName,
    EndInquiryPeriod,
    HospitalCode,
    HospitalData.PageNavigator,
    HospitalName,
    HospitalOperationState,
    HospitalPhoneNumber,
    HospitalRegistrationState,
    PharmacyName,
    StartInquiryPeriod,
  ]);
  const GetHospitalListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetHospitalListExportData = {
      hospitalCode: null || HospitalCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      state: HospitalOperationState[0] === '전체' ? null : HospitalOperationState[0],
      registerState: HospitalRegistrationState[0] === '전체' ? null : HospitalRegistrationState[0],
      hospitalName: null || HospitalName,
      hospitalPhoneNum: null || HospitalPhoneNumber,
      businessRegNum: null || CorporateRegistrationNumber,
      department: null || DepartmentName,
      disease: null || DiseaseName,
      doctorName: null || DoctorName,
      pharmacyName: null || PharmacyName,

      /* page: null || HospitalData.PageNavigator - 1, */
    };
    const response = await GetHospitalListExport(GetHospitalListExportData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_HOSPITAL_LIST_EXPORT',
        Title: '병원 내역 데이터 다운로드 실패',
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
    CorporateRegistrationNumber,
    DepartmentName,
    DiseaseName,
    DoctorName,
    EndInquiryPeriod,
    HospitalCode,
    HospitalName,
    HospitalOperationState,
    HospitalPhoneNumber,
    HospitalRegistrationState,
    PharmacyName,
    StartInquiryPeriod,
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetHospitalListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HospitalData.PageNavigator]);

  /* 통계 */
  const StatisticsList = [
    '전체',

    '활성',
    '등록 대기',
    '등록 반려',
    '블라인드',

    '운영 중',
    '운영 종료',
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
            <TitleTextComponent>병원 내역</TitleTextComponent>
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
                    <FilterElementTitleTextComponent>병원 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalCode}
                      onChange={onChangeHospitalCode}
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      병원 운영 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeHospitalOperationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {HospitalOperationStateList.map(element => (
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
                      병원 운영 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {HospitalOperationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== HospitalOperationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteHospitalOperationState({ key: element })}
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
                      병원 등록 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeHospitalRegistrationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {HospitalRegistrationStateList.map(element => (
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
                      병원 등록 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {HospitalRegistrationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={
                          key !== HospitalRegistrationState.length - 1 ? '0px 5px 0px 0px' : ''
                        }
                        onClick={() => onClickDeleteHospitalRegistrationState({ key: element })}
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
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
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
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>병원 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalPhoneNumber}
                      onChange={onChangeHospitalPhoneNumber}
                      placeholder="숫자만 입력해 주세요."
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="100px" width="100px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      사업자등록 번호
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="120px" width="120px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={CorporateRegistrationNumber}
                      onChange={onChangeCorporateRegistrationNumber}
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
                <FilterElementTitleFrame minWidth="55px" width="55px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료과</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="165px" width="165px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DepartmentName}
                      onChange={onChangeDepartmentName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="45px" width="45px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>질환</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="175px" width="175px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DiseaseName}
                      onChange={onChangeDiseaseName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      소속 의사 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      연계 약국 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PharmacyName}
                      onChange={onChangePharmacyName}
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
                              : element === '활성'
                              ? 'rgb(112,173,71)'
                              : element === '등록 대기'
                              ? 'rgb(255, 192, 0)'
                              : element === '등록 반려'
                              ? 'rgb(192,0,0)'
                              : element === '블라인드'
                              ? 'rgb(192,0,0)'
                              : element === '운영 중'
                              ? 'rgb(112,173,71)'
                              : element === '운영 종료'
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
                              : element === '활성'
                              ? 'rgb(112,173,71)'
                              : element === '등록 대기'
                              ? 'rgb(255, 192, 0)'
                              : element === '등록 반려'
                              ? 'rgb(192,0,0)'
                              : element === '블라인드'
                              ? 'rgb(192,0,0)'
                              : element === '운영 중'
                              ? 'rgb(112,173,71)'
                              : element === '운영 종료'
                              ? 'rgb(192,0,0)'
                              : '#000000'
                          }
                        >
                          {element === '전체'
                            ? HospitalData.HospitalListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.total.toString()
                                )}건`
                              : '0건'
                            : element === '활성'
                            ? HospitalData.HospitalListData?.count?.active
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.active.toString()
                                )}건`
                              : '0건'
                            : element === '등록 대기'
                            ? HospitalData.HospitalListData?.count?.waitRegister
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.waitRegister.toString()
                                )}건`
                              : '0건'
                            : element === '등록 반려'
                            ? HospitalData.HospitalListData?.count?.registerRejected
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.registerRejected.toString()
                                )}건`
                              : '0건'
                            : element === '블라인드'
                            ? HospitalData.HospitalListData?.count?.blinded
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.blinded.toString()
                                )}건`
                              : '0건'
                            : element === '운영 중'
                            ? HospitalData.HospitalListData?.count?.running
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.running.toString()
                                )}건`
                              : '0건'
                            : element === '운영 종료'
                            ? HospitalData.HospitalListData?.count?.stop
                              ? `${ConvertCommaNumber(
                                  HospitalData.HospitalListData?.count?.stop.toString()
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
