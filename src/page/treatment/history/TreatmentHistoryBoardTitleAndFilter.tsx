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

import ExitIcon from 'assets/icons/ExitIcon.svg';

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';

import { GetTreatmentList } from 'services/treatment/GetTreatmentList';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, TreatmentData } = useStore();
  /* 필터 스위치 */
  const onChangeFilterSwitchFlag = () => {
    AdminData.setFilterSwitchFlag(!AdminData.FilterSwitchFlag);
  };
  /* 필터 초기화 */
  const onClickFilterRefresh = () => {
    setTreatmentCode('');
    setPrescriptionState(['전체']);
    setDiseaseAndDepartment('');
    setDeliveryMethod(['전체']);
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setTreatmentState(['전체']);
    setPatientName('');
    setPatientPhoneNumber('');
    setHospitalName('');
    setDoctorName('');
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
  /* 진료 번호 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 접수 항목 */
  const [DiseaseAndDepartment, setDiseaseAndDepartment] = useState('');
  const onChangeDiseaseAndDepartment = (event: { target: { value: string } }) => {
    setDiseaseAndDepartment(event.target.value);
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
      receptionCategory: null || DiseaseAndDepartment,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || TreatmentState[0] === '전체' ? null : TreatmentState,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      hospitalName: null || HospitalName,
      doctorName: null || DoctorName,
      prescriptionState: null || PrescriptionState[0] === '전체' ? null : TempPrescriptionState,
      medicineReceiveWay: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod,

      page: null || TreatmentData.PageNavigator - 1,
    };
    const response = await GetTreatmentList(GetTreatmentListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const metaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_TREATMENT_LIST',
        Title: '진료 내역 불러오기 실패',
        Contents: ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'] || [
          metaError?.data?.message,
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTreatmentListFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* TODO */
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTreatmentListFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [TreatmentData.PageNavigator]);

  return (
    <BoardTitleAndFilterFrame>
      <TitleFrame>
        <TitleComponent>
          {/* 내용 */}
          <TitleTextFrame>
            <TitleTextComponent>진료 내역</TitleTextComponent>
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
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={TreatmentCode}
                      onChange={onChangeTreatmentCode}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>접수 항목</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DiseaseAndDepartment}
                      onChange={onChangeDiseaseAndDepartment}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      시작 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={StartInquiryPeriod}
                      onChange={onChangeStartInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      종료 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={EndInquiryPeriod}
                      onChange={onChangeEndInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeTreatmentState}
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
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      진료 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="100%">
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
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientName}
                      onChange={onChangePatientName}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="85px" width="85px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="135px" width="135px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientPhoneNumber}
                      onChange={onChangePatientPhoneNumber}
                      placeholder="숫자만 입력해 주세요."
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>병원 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalName}
                      onChange={onChangeHospitalName}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>의사 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DoctorName}
                      onChange={onChangeDoctorName}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="75px" width="75px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>처방전 유무</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="145px" width="145px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangePrescriptionState}
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
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="100px" width="100px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      처방전 유무 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="120px" width="100%">
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
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="80px" width="80px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약 수령 방법</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="140px" width="140px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryMethod}
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
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="105px" width="105px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      약 수령 방법 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="115px" width="100%">
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
    </BoardTitleAndFilterFrame>
  );
});

export default BoardTitleAndFilter;
