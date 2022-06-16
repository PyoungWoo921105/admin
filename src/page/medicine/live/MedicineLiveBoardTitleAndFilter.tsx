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

import { GetMedicineList } from 'services/medicine/GetMedicineList';
import { GetMedicineListExport } from 'services/medicine/GetMedicineListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, MedicineData } = useStore();
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
    setMedicineCode('');
    setDeliveryCode('');
    setDiseaseAndDepartment('');
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setMedicineState(['전체']);
    setPatientName('');
    setPatientPhoneNumber('');
    setHospitalName('');
    setDoctorName('');
    setPharmacyName('');
    setDeliveryMethod(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetMedicineListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetMedicineListFunction();
    MedicineData.setPageNavigator(1);
    MedicineData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 조제 코드 */
  const [MedicineCode, setMedicineCode] = useState('');
  const onChangeMedicineCode = (event: { target: { value: string } }) => {
    setMedicineCode(event.target.value);
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
  /* 조제 상태 */
  const MedicineStateList = [
    '선택',
    '전체',
    '접수 대기',
    '조제 중',
    '결제 실패',
    '방문 대기',
    '배차 대기',
    '배차 완료',
    '픽업 완료',
    '완료',
    '조제 취소',
    '조제 거절',
    '조제 시스템 취소',
  ];
  const [MedicineState, setMedicineState] = useState<string[]>(['전체']);
  const onChangeMedicineState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setMedicineState([event.target.value]);
    } else if (MedicineState.indexOf(event.target.value) === -1) {
      if (MedicineState.indexOf('전체') === -1) {
        /* setMedicineState([event.target.value]); */
        setMedicineState([...MedicineState, event.target.value]);
      } else {
        setMedicineState([event.target.value]);
      }
    } else if (MedicineState.length === 1) {
      setMedicineState(['전체']);
    } else {
      setMedicineState(MedicineState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteMedicineState = (props: { key: any }) => {
    const { key } = props;
    if (MedicineState.length === 1 && MedicineState[0] === key) {
      setMedicineState(['전체']);
    } else {
      setMedicineState(MedicineState.filter(element => element !== key));
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
  /* 약국 이름 */
  const [PharmacyName, setPharmacyName] = useState('');
  const onChangePharmacyName = (event: { target: { value: string } }) => {
    setPharmacyName(event.target.value);
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
  /* 배달 코드 */
  const [DeliveryCode, setDeliveryCode] = useState('');
  const onChangeDeliveryCode = (event: { target: { value: string } }) => {
    setDeliveryCode(event.target.value);
  };
  /* 데이터 */
  const GetMedicineListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetMedicineListData = {
      medicineCode: null || MedicineCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || MedicineState[0] === '전체' ? null : MedicineState,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      receptionCategory: null || DiseaseAndDepartment,
      pharamcyName: null || PharmacyName,
      medicineReceiveWay: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod,
      deliveryCode: null || DeliveryCode,

      page: null || MedicineData.PageNavigator - 1,
    };
    const response = await GetMedicineList(GetMedicineListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_MEDICINE_LIST',
        Title: '조제 현황 불러오기 실패',
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
    DeliveryCode,
    DeliveryMethod,
    DiseaseAndDepartment,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    MedicineCode,
    MedicineData.PageNavigator,
    MedicineState,
    PatientName,
    PatientPhoneNumber,
    PharmacyName,
    StartInquiryPeriod,
  ]);
  const GetMedicineListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetMedicineListData = {
      medicineCode: null || MedicineCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || MedicineState[0] === '전체' ? null : MedicineState,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      receptionCategory: null || DiseaseAndDepartment,
      pharamcyName: null || PharmacyName,
      medicineReceiveWay: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod,
      deliveryCode: null || DeliveryCode,

      /* page: null || MedicineData.PageNavigator - 1, */
    };
    const response = await GetMedicineListExport(GetMedicineListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_MEDICINE_LIST_EXPORT',
        Title: '조제 현황 데이터 다운로드 실패',
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
    DeliveryCode,
    DeliveryMethod,
    DiseaseAndDepartment,
    DoctorName,
    EndInquiryPeriod,
    HospitalName,
    MedicineCode,
    MedicineState,
    PatientName,
    PatientPhoneNumber,
    PharmacyName,
    StartInquiryPeriod,
  ]);

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetMedicineListFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetMedicineListFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MedicineData.PageNavigator]);

  /* Socket */
  useEffect(() => {
    if (MedicineData.SocketMedicineData?.medicineList?.length !== 0) {
      GetCurrentTime();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetMedicineListFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MedicineData.SocketMedicineData]);

  /* 통계 */
  const StatisticsList = [
    '전체',
    '접수 대기',
    '조제 중',
    '결제 실패',
    '방문 대기',
    '배차 대기',
    '배차 완료',
    '픽업 완료',
    '완료',
    '조제 취소',
    '조제 거절',
    '조제 시스템 취소',
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
            <TitleTextComponent>조제 현황</TitleTextComponent>
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
                    <FilterElementTitleTextComponent>조제 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={MedicineCode}
                      onChange={onChangeMedicineCode}
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
                    <FilterElementTitleTextComponent>조제 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeMedicineState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {MedicineStateList.map(element => (
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
                      조제 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125%">
                  <FilterElementBoardComponent>
                    {MedicineState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== MedicineState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteMedicineState({ key: element })}
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약국 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>배달 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DeliveryCode}
                      onChange={onChangeDeliveryCode}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
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
                              : element === '접수 대기'
                              ? '#000000'
                              : element === '조제 중'
                              ? '#000000'
                              : element === '결제 실패'
                              ? 'rgb(192,0,0)'
                              : element === '방문 대기'
                              ? '#000000'
                              : element === '배차 대기'
                              ? '#000000'
                              : element === '배차 완료'
                              ? '#000000'
                              : element === '픽업 완료'
                              ? '#000000'
                              : element === '완료'
                              ? 'rgb(112,173,71)'
                              : element === '조제 거절'
                              ? 'rgb(192,0,0)'
                              : element === '조제 취소'
                              ? 'rgb(192,0,0)'
                              : element === '조제 시스템 취소'
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
                              : element === '접수 대기'
                              ? '#000000'
                              : element === '조제 중'
                              ? '#000000'
                              : element === '결제 실패'
                              ? 'rgb(192,0,0)'
                              : element === '방문 대기'
                              ? '#000000'
                              : element === '배차 대기'
                              ? '#000000'
                              : element === '배차 완료'
                              ? '#000000'
                              : element === '픽업 완료'
                              ? '#000000'
                              : element === '완료'
                              ? 'rgb(112,173,71)'
                              : element === '조제 거절'
                              ? 'rgb(192,0,0)'
                              : element === '조제 취소'
                              ? 'rgb(192,0,0)'
                              : element === '조제 시스템 취소'
                              ? 'rgb(192,0,0)'
                              : '#000000'
                          }
                        >
                          {element === '전체'
                            ? MedicineData.MedicineListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.total.toString()
                                )}건`
                              : '0건'
                            : element === '접수 대기'
                            ? MedicineData.MedicineListData?.count?.waitReception
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.waitReception.toString()
                                )}건`
                              : '0건'
                            : element === '조제 중'
                            ? MedicineData.MedicineListData?.count?.inMaking
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.inMaking.toString()
                                )}건`
                              : '0건'
                            : element === '결제 실패'
                            ? MedicineData.MedicineListData?.count?.failedToPay
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.failedToPay.toString()
                                )}건`
                              : '0건'
                            : element === '방문 대기'
                            ? MedicineData.MedicineListData?.count?.waitVisit
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.waitVisit.toString()
                                )}건`
                              : '0건'
                            : element === '배차 대기'
                            ? MedicineData.MedicineListData?.count?.waitAllocation
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.waitAllocation.toString()
                                )}건`
                              : '0건'
                            : element === '배차 완료'
                            ? MedicineData.MedicineListData?.count?.allocationCompleted
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.allocationCompleted.toString()
                                )}건`
                              : '0건'
                            : element === '픽업 완료'
                            ? MedicineData.MedicineListData?.count?.pickUpCompleted
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.pickUpCompleted.toString()
                                )}건`
                              : '0건'
                            : element === '완료'
                            ? MedicineData.MedicineListData?.count?.completed
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.completed.toString()
                                )}건`
                              : '0건'
                            : element === '조제 거절'
                            ? MedicineData.MedicineListData?.count?.declined
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.declined.toString()
                                )}건`
                              : '0건'
                            : element === '조제 취소'
                            ? MedicineData.MedicineListData?.count?.canceled
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.canceled.toString()
                                )}건`
                              : '0건'
                            : element === '조제 시스템 취소'
                            ? MedicineData.MedicineListData?.count?.systemCanceled
                              ? `${ConvertCommaNumber(
                                  MedicineData.MedicineListData?.count?.systemCanceled.toString()
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
