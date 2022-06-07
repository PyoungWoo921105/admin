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

import { AllowNumericInput } from 'libraries/constraint/AllowNumericInput';

const TreatmentManagementHistoryFilter = observer(() => {
  /* 진료 번호 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 처방전 */
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
  /* 시작 조회 기간 */
  const [StartInquiryPeriod, setStartInquiryPeriod] = useState('');
  const onChangeStartInquiryPeriod = (event: { target: { value: string } }) => {
    setStartInquiryPeriod(AllowNumericInput(event.target.value));
  };
  /* 종료 조회 기간 */
  const [EndInquiryPeriod, setEndInquiryPeriod] = useState('');
  const onChangeEndInquiryPeriod = (event: { target: { value: string } }) => {
    setEndInquiryPeriod(AllowNumericInput(event.target.value));
  };

  return (
    <FilterFrame>
      <FilterComponent>
        {/*  */}
        {/* SINGLE INPUT */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="90px" width="90px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>진료 번호</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="130px" width="130px">
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
            <FilterElementTitleFrame minWidth="90px" width="90px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>처방전</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="130px" width="130px">
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
            <FilterElementTitleFrame minWidth="90px" width="90px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>처방전 선택</FilterElementTitleTextComponent>
              </FilterElementTitleComponent>
            </FilterElementTitleFrame>
            <FilterElementBoardFrame minWidth="130px" width="100%">
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
        {/* DOUBLE INPUT */}
        <FilterElementFrame>
          <FilterElementComponent>
            <FilterElementTitleFrame minWidth="90px" width="90px">
              <FilterElementTitleComponent>
                <FilterElementTitleTextComponent>시작 조회 기간</FilterElementTitleTextComponent>
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
                <FilterElementTitleTextComponent>종료 조회 기간</FilterElementTitleTextComponent>
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
      </FilterComponent>
    </FilterFrame>
  );
});

export default TreatmentManagementHistoryFilter;
