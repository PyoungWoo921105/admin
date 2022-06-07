/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useState } from 'react';

import { observer } from 'mobx-react';

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

const TreatmentManagementHistoryFilter = observer(() => {
  /* 진료 번호 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 처방전 유무 */
  const PrescriptionStateList = ['선택', '전체', '있음', '없음'];
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
  /* 접수 항목 */
  const [DiseaseAndDepartment, setDiseaseAndDepartment] = useState('');
  const onChangeDiseaseAndDepartment = (event: { target: { value: string } }) => {
    setDiseaseAndDepartment(event.target.value);
  };
  /* 처방전 유무 */
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
  return (
    <FilterFrame>
      <FilterComponent>
        {/*  */}
        {/* SINGLE INPUT */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>진료 번호</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
        {/* SELECT & OPTION */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>처방전 유무</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
                <FilterElementTitleTextComponent>처방전 유무 선택</FilterElementTitleTextComponent>
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
        {/* SINGLE INPUT */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>접수 항목</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
        {/* SELECT & OPTION */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>약 수령 방법</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>약 수령 방법 선택</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="100%">
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
        {/* DOUBLE INPUT */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>시작 조회 기간</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>종료 조회 기간</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>진료 상태</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>진료 상태 선택</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="100%">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>환자 이름</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
            <FilterElementTitleFrame minWidth="100px" width="100px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>환자 전화번호</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="120px" width="120px">
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
      </FilterComponent>
    </FilterFrame>
  );
});

export default TreatmentManagementHistoryFilter;
