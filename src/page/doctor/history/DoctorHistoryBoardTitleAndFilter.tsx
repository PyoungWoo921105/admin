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

import { GetDoctorList } from 'services/doctor/GetDoctorList';
import { GetDoctorListExport } from 'services/doctor/GetDoctorListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, DoctorData } = useStore();
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
    setDoctorCode('');
    setDoctorOperationState(['전체']);
    setDoctorRegistrationState(['전체']);
    setDoctorName('');
    setDoctorPhoneNumber('');
    setHospitalName('');
    setDepartmentName('');
    setDiseaseName('');
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDoctorListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDoctorListFunction();
    DoctorData.setPageNavigator(1);
    DoctorData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 의사 코드 */
  const [DoctorCode, setDoctorCode] = useState('');
  const onChangeDoctorCode = (event: { target: { value: string } }) => {
    setDoctorCode(event.target.value);
  };
  /* 의사 운영 상태 */
  const DoctorOperationStateList = [
    '선택',
    '전체',
    '진료 가능',
    '점심 시간',
    '방문 가능',
    '진료 종료',
  ];
  const [DoctorOperationState, setDoctorOperationState] = useState<string[]>(['전체']);
  const onChangeDoctorOperationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDoctorOperationState([event.target.value]);
    } else if (DoctorOperationState.indexOf(event.target.value) === -1) {
      if (DoctorOperationState.indexOf('전체') === -1) {
        setDoctorOperationState([event.target.value]);
        /* setDoctorOperationState([...DoctorOperationState, event.target.value]); */
      } else {
        setDoctorOperationState([event.target.value]);
      }
    } else if (DoctorOperationState.length === 1) {
      setDoctorOperationState(['전체']);
    } else {
      setDoctorOperationState(
        DoctorOperationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteDoctorOperationState = (props: { key: any }) => {
    const { key } = props;
    if (DoctorOperationState.length === 1 && DoctorOperationState[0] === key) {
      setDoctorOperationState(['전체']);
    } else {
      setDoctorOperationState(DoctorOperationState.filter(element => element !== key));
    }
  };
  /* 의사 등록 상태 */
  const DoctorRegistrationStateList = [
    '선택',
    '전체',
    '활성',
    '등록 대기',
    '등록 반려',
    '블라인드',
  ];
  const [DoctorRegistrationState, setDoctorRegistrationState] = useState<string[]>(['전체']);
  const onChangeDoctorRegistrationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDoctorRegistrationState([event.target.value]);
    } else if (DoctorRegistrationState.indexOf(event.target.value) === -1) {
      if (DoctorRegistrationState.indexOf('전체') === -1) {
        setDoctorRegistrationState([event.target.value]);
        /* setDoctorRegistrationState([...DoctorRegistrationState, event.target.value]); */
      } else {
        setDoctorRegistrationState([event.target.value]);
      }
    } else if (DoctorRegistrationState.length === 1) {
      setDoctorRegistrationState(['전체']);
    } else {
      setDoctorRegistrationState(
        DoctorRegistrationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteDoctorRegistrationState = (props: { key: any }) => {
    const { key } = props;
    if (DoctorRegistrationState.length === 1 && DoctorRegistrationState[0] === key) {
      setDoctorRegistrationState(['전체']);
    } else {
      setDoctorRegistrationState(DoctorRegistrationState.filter(element => element !== key));
    }
  };
  /* 의사 이름 */
  const [DoctorName, setDoctorName] = useState('');
  const onChangeDoctorName = (event: { target: { value: string } }) => {
    setDoctorName(event.target.value);
  };
  /* 의사 전화번호 */
  const [DoctorPhoneNumber, setDoctorPhoneNumber] = useState('');
  const onChangeDoctorPhoneNumber = (event: { target: { value: string } }) => {
    setDoctorPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
  };
  /* 소속 병원 이름 */
  const [HospitalName, setHospitalName] = useState('');
  const onChangeHospitalName = (event: { target: { value: string } }) => {
    setHospitalName(event.target.value);
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
  /* 데이터 */
  const GetDoctorListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDoctorListData = {
      doctorCode: null || DoctorCode,
      state: DoctorOperationState[0] === '전체' ? null : DoctorOperationState[0],
      registerState: DoctorRegistrationState[0] === '전체' ? null : DoctorRegistrationState[0],
      doctorName: null || DoctorName,
      doctorPhoneNum: null || DoctorPhoneNumber,
      hospitalName: null || HospitalName,
      department: null || DepartmentName,
      disease: null || DiseaseName,

      page: null || DoctorData.PageNavigator - 1,
    };
    const response = await GetDoctorList(GetDoctorListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DOCTOR_LIST',
        Title: '의사 내역 불러오기 실패',
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
    DepartmentName,
    DiseaseName,
    DoctorCode,
    DoctorData.PageNavigator,
    DoctorName,
    DoctorOperationState,
    DoctorPhoneNumber,
    DoctorRegistrationState,
    HospitalName,
  ]);
  const GetDoctorListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDoctorListExportData = {
      doctorCode: null || DoctorCode,
      state: DoctorOperationState[0] === '전체' ? null : DoctorOperationState[0],
      registerState: DoctorRegistrationState[0] === '전체' ? null : DoctorRegistrationState[0],
      doctorName: null || DoctorName,
      doctorPhoneNum: null || DoctorPhoneNumber,
      hospitalName: null || HospitalName,
      department: null || DepartmentName,
      disease: null || DiseaseName,

      /* page: null || DoctorData.PageNavigator - 1, */
    };
    const response = await GetDoctorListExport(GetDoctorListExportData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DOCTOR_LIST_EXPORT',
        Title: '의사 내역 데이터 다운로드 실패',
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
    DepartmentName,
    DiseaseName,
    DoctorCode,
    DoctorName,
    DoctorOperationState,
    DoctorPhoneNumber,
    DoctorRegistrationState,
    HospitalName,
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDoctorListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DoctorData.PageNavigator]);

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
            <TitleTextComponent>의사 내역</TitleTextComponent>
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
                    <FilterElementTitleTextComponent>의사 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DoctorCode}
                      onChange={onChangeDoctorCode}
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
                      의사 운영 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDoctorOperationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DoctorOperationStateList.map(element => (
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
                      의사 운영 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {DoctorOperationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DoctorOperationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDoctorOperationState({ key: element })}
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
                      의사 등록 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDoctorRegistrationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DoctorRegistrationStateList.map(element => (
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
                      의사 등록 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {DoctorRegistrationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DoctorRegistrationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDoctorRegistrationState({ key: element })}
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
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>의사 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DoctorPhoneNumber}
                      onChange={onChangeDoctorPhoneNumber}
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      소속 병원 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
                            ? DoctorData.DoctorListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.total.toString()
                                )}건`
                              : '0건'
                            : element === '활성'
                            ? DoctorData.DoctorListData?.count?.active
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.active.toString()
                                )}건`
                              : '0건'
                            : element === '등록 대기'
                            ? DoctorData.DoctorListData?.count?.waitRegister
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.waitRegister.toString()
                                )}건`
                              : '0건'
                            : element === '등록 반려'
                            ? DoctorData.DoctorListData?.count?.registerRejected
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.registerRejected.toString()
                                )}건`
                              : '0건'
                            : element === '블라인드'
                            ? DoctorData.DoctorListData?.count?.blinded
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.blinded.toString()
                                )}건`
                              : '0건'
                            : element === '운영 중'
                            ? DoctorData.DoctorListData?.count?.running
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.running.toString()
                                )}건`
                              : '0건'
                            : element === '운영 종료'
                            ? DoctorData.DoctorListData?.count?.stop
                              ? `${ConvertCommaNumber(
                                  DoctorData.DoctorListData?.count?.stop.toString()
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
