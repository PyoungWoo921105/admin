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

import { GetTreatmentList } from 'services/treatment/GetTreatmentList';
import { GetTreatmentListExport } from 'services/treatment/GetTreatmentListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, TreatmentData } = useStore();
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
    setDiseaseAndDepartment('');
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setTreatmentState(['전체']);
    setPatientName('');
    setPatientPhoneNumber('');
    setHospitalName('');
    setDoctorName('');
    setPrescriptionState(['전체']);
    setDeliveryMethod(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTreatmentListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTreatmentListFunction();
    TreatmentData.setPageNavigator(1);
    TreatmentData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 진료 코드 */
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
  /* 진료 상태 */
  const TreatmentStateList = [
    '선택',
    '전체',
    '접수 대기',
    '진료 대기',
    '진료 중',
    '처방 및 수납',
    '결제 대기',
    '완료',
    '결제 실패',
    '진료 취소',
    '진료 거절',
    '진료 시스템 취소',
  ];
  const [TreatmentState, setTreatmentState] = useState<string[]>(['전체']);
  const onChangeTreatmentState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setTreatmentState([event.target.value]);
    } else if (TreatmentState.indexOf(event.target.value) === -1) {
      if (TreatmentState.indexOf('전체') === -1) {
        /* setTreatmentState([event.target.value]); */
        setTreatmentState([...TreatmentState, event.target.value]);
      } else {
        setTreatmentState([event.target.value]);
      }
    } else if (TreatmentState.length === 1) {
      setTreatmentState(['전체']);
    } else {
      setTreatmentState(TreatmentState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteTreatmentState = (props: { key: any }) => {
    const { key } = props;
    if (TreatmentState.length === 1 && TreatmentState[0] === key) {
      setTreatmentState(['전체']);
    } else {
      setTreatmentState(TreatmentState.filter(element => element !== key));
    }
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
  /* 접수 항목 */
  const [DiseaseAndDepartment, setDiseaseAndDepartment] = useState('');
  const onChangeDiseaseAndDepartment = (event: { target: { value: string } }) => {
    setDiseaseAndDepartment(event.target.value);
  };
  /* 처방전 유무 */
  const PrescriptionStateList = ['선택', '전체', 'Y', 'N'];
  const [PrescriptionState, setPrescriptionState] = useState<string[]>(['전체']);
  const onChangePrescriptionState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setPrescriptionState([event.target.value]);
    } else if (PrescriptionState.indexOf(event.target.value) === -1) {
      if (PrescriptionState.indexOf('전체') === -1) {
        /* setPrescriptionState([event.target.value]); */
        setPrescriptionState([...PrescriptionState, event.target.value]);
      } else {
        setPrescriptionState([event.target.value]);
      }
    } else if (PrescriptionState.length === 1) {
      setPrescriptionState(['전체']);
    } else {
      setPrescriptionState(PrescriptionState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeletePrescriptionState = (props: { key: any }) => {
    const { key } = props;
    if (PrescriptionState.length === 1 && PrescriptionState[0] === key) {
      setPrescriptionState(['전체']);
    } else {
      setPrescriptionState(PrescriptionState.filter(element => element !== key));
    }
  };
  /* 약 수령 방법 유무 */
  const DeliveryMethodList = ['선택', '전체', '배달', '방문', '없음'];
  const [DeliveryMethod, setDeliveryMethod] = useState<string[]>(['전체']);
  const onChangeDeliveryMethod = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryMethod([event.target.value]);
    } else if (DeliveryMethod.indexOf(event.target.value) === -1) {
      if (DeliveryMethod.indexOf('전체') === -1) {
        /* setDeliveryMethod([event.target.value]); */
        setDeliveryMethod([...DeliveryMethod, event.target.value]);
      } else {
        setDeliveryMethod([event.target.value]);
      }
    } else if (DeliveryMethod.length === 1) {
      setDeliveryMethod(['전체']);
    } else {
      setDeliveryMethod(DeliveryMethod.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteDeliveryMethod = (props: { key: any }) => {
    const { key } = props;
    if (DeliveryMethod.length === 1 && DeliveryMethod[0] === key) {
      setDeliveryMethod(['전체']);
    } else {
      setDeliveryMethod(DeliveryMethod.filter(element => element !== key));
    }
  };
  /* 데이터 */
  const GetTreatmentListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempPrescriptionState = [];
    if (PrescriptionState.length !== 0 && PrescriptionState[0] !== '전체') {
      for (let i = 0; i < PrescriptionState.length; i += 1) {
        if (PrescriptionState[i] === 'Y') {
          TempPrescriptionState.push('있음');
        } else if (PrescriptionState[i] === 'N') {
          TempPrescriptionState.push('없음');
        }
      }
    }
    const GetTreatmentListData = {
      treatCode: null || TreatmentCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || TreatmentState[0] === '전체' ? null : TreatmentState,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      receptionCategory: null || DiseaseAndDepartment,
      prescriptionState: null || PrescriptionState[0] === '전체' ? null : TempPrescriptionState,
      medicineReceiveWay: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod,

      page: null || TreatmentData.PageNavigator - 1,
    };
    const response = await GetTreatmentList(GetTreatmentListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_TREATMENT_LIST',
        Title: '진료 현황 불러오기 실패',
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
    DeliveryMethod,
    DiseaseAndDepartment,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    PatientPhoneNumber,
    PrescriptionState,
    StartInquiryPeriod,
    TreatmentCode,
    TreatmentData.PageNavigator,
    TreatmentState,
  ]);
  const GetTreatmentListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempPrescriptionState = [];
    if (PrescriptionState.length !== 0 && PrescriptionState[0] !== '전체') {
      for (let i = 0; i < PrescriptionState.length; i += 1) {
        if (PrescriptionState[i] === 'Y') {
          TempPrescriptionState.push('있음');
        } else if (PrescriptionState[i] === 'N') {
          TempPrescriptionState.push('없음');
        }
      }
    }
    const GetTreatmentListData = {
      treatCode: null || TreatmentCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || TreatmentState[0] === '전체' ? null : TreatmentState,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      receptionCategory: null || DiseaseAndDepartment,
      prescriptionState: null || PrescriptionState[0] === '전체' ? null : TempPrescriptionState,
      medicineReceiveWay: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod,

      /* page: null || TreatmentData.PageNavigator - 1, */
    };
    const response = await GetTreatmentListExport(GetTreatmentListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_TREATMENT_LIST_EXPORT',
        Title: '진료 현황 데이터 다운로드 실패',
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
    DeliveryMethod,
    DiseaseAndDepartment,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    PatientName,
    PatientPhoneNumber,
    PrescriptionState,
    StartInquiryPeriod,
    TreatmentCode,
    TreatmentState,
  ]);

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTreatmentListFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TreatmentData.PageNavigator]);

  /* Socket */
  useEffect(() => {
    if (TreatmentData.SocketTreatmentData?.treatList?.length !== 0) {
      GetCurrentTime();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetTreatmentListFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TreatmentData.SocketTreatmentData]);

  /* 통계 */
  const StatisticsList = [
    '전체',
    '접수 대기',
    '진료 대기',
    '진료 중',
    '처방 및 수납',
    '결제 대기',
    '완료',
    '결제 실패',
    '진료 취소',
    '진료 거절',
    '진료 시스템 취소',
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
            <TitleTextComponent>진료 현황</TitleTextComponent>
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
                    <FilterElementTitleTextComponent>진료 코드</FilterElementTitleTextComponent>
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
                    <FilterElementTitleTextComponent>진료 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeTreatmentState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {TreatmentStateList.map(element => (
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
                      진료 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125%">
                  <FilterElementBoardComponent>
                    {TreatmentState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== TreatmentState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteTreatmentState({ key: element })}
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
            {/*  */}
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
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>접수 항목</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DiseaseAndDepartment}
                      onChange={onChangeDiseaseAndDepartment}
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
                <FilterElementTitleFrame minWidth="80px" width="80px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>처방전 유무</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="140px" width="140px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangePrescriptionState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {PrescriptionStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="105px" width="105px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      처방전 유무 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="115px" width="115%">
                  <FilterElementBoardComponent>
                    {PrescriptionState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== PrescriptionState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeletePrescriptionState({ key: element })}
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
                <FilterElementTitleFrame minWidth="85px" width="85px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약 수령 방법</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="135px" width="135px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryMethod}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DeliveryMethodList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="110px" width="110px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      약 수령 방법 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="110px" width="110%">
                  <FilterElementBoardComponent>
                    {DeliveryMethod.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DeliveryMethod.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDeliveryMethod({ key: element })}
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
                              ? 'rgb(0,0,0)'
                              : element === '접수 대기'
                              ? 'rgb(0,0,0)'
                              : element === '진료 대기'
                              ? 'rgb(0,0,0)'
                              : element === '진료 중'
                              ? 'rgb(0,0,0)'
                              : element === '결제 대기'
                              ? 'rgb(0,0,0)'
                              : element === '처방 및 수납'
                              ? 'rgb(0,0,0)'
                              : element === '결제 실패'
                              ? 'rgb(192,0,0)'
                              : element === '완료'
                              ? 'rgb(112,173,71)'
                              : element === '진료 취소'
                              ? 'rgb(192,0,0)'
                              : element === '진료 거절'
                              ? 'rgb(192,0,0)'
                              : element === '진료 시스템 취소'
                              ? 'rgb(192,0,0)'
                              : /*  */
                              element === '거절'
                              ? 'rgb(192,0,0)'
                              : element === '취소'
                              ? 'rgb(192,0,0)'
                              : element === '진료 완료'
                              ? 'rgb(112,173,71)'
                              : /*  */
                                '#000000'
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
                              ? 'rgb(0,0,0)'
                              : element === '접수 대기'
                              ? 'rgb(0,0,0)'
                              : element === '진료 대기'
                              ? 'rgb(0,0,0)'
                              : element === '진료 중'
                              ? 'rgb(0,0,0)'
                              : element === '결제 대기'
                              ? 'rgb(0,0,0)'
                              : element === '처방 및 수납'
                              ? 'rgb(0,0,0)'
                              : element === '결제 실패'
                              ? 'rgb(192,0,0)'
                              : element === '완료'
                              ? 'rgb(112,173,71)'
                              : element === '진료 취소'
                              ? 'rgb(192,0,0)'
                              : element === '진료 거절'
                              ? 'rgb(192,0,0)'
                              : element === '진료 시스템 취소'
                              ? 'rgb(192,0,0)'
                              : /*  */
                              element === '거절'
                              ? 'rgb(192,0,0)'
                              : element === '취소'
                              ? 'rgb(192,0,0)'
                              : element === '진료 완료'
                              ? 'rgb(112,173,71)'
                              : /*  */
                                '#000000'
                          }
                        >
                          {element === '전체'
                            ? TreatmentData.TreatmentListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.total.toString()
                                )}건`
                              : '0건'
                            : element === '접수 대기'
                            ? TreatmentData.TreatmentListData?.count?.waitReception
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.waitReception.toString()
                                )}건`
                              : '0건'
                            : element === '진료 대기'
                            ? TreatmentData.TreatmentListData?.count?.waitTreat
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.waitTreat.toString()
                                )}건`
                              : '0건'
                            : element === '진료 중'
                            ? TreatmentData.TreatmentListData?.count?.inTreat
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.inTreat.toString()
                                )}건`
                              : '0건'
                            : element === '처방 및 수납'
                            ? TreatmentData.TreatmentListData?.count?.prescriptionAndReceipt
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.prescriptionAndReceipt.toString()
                                )}건`
                              : '0건'
                            : element === '결제 대기'
                            ? TreatmentData.TreatmentListData?.count?.waitToPay
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.waitToPay.toString()
                                )}건`
                              : '0건'
                            : element === '완료'
                            ? TreatmentData.TreatmentListData?.count?.completed
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.completed.toString()
                                )}건`
                              : '0건'
                            : element === '결제 실패'
                            ? TreatmentData.TreatmentListData?.count?.failedToPay
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.failedToPay.toString()
                                )}건`
                              : '0건'
                            : element === '진료 거절'
                            ? TreatmentData.TreatmentListData?.count?.declined
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.declined.toString()
                                )}건`
                              : '0건'
                            : element === '진료 취소'
                            ? TreatmentData.TreatmentListData?.count?.canceled
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.canceled.toString()
                                )}건`
                              : '0건'
                            : element === '진료 시스템 취소'
                            ? TreatmentData.TreatmentListData?.count?.systemCanceled
                              ? `${ConvertCommaNumber(
                                  TreatmentData.TreatmentListData?.count?.systemCanceled.toString()
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
