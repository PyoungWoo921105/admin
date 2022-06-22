/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessTicketFrame,
  ProcessTicketComponent,
  /*  */
  ProcessTicketElementComponent,
  ProcessTicketElementTitleComponent,
  ProcessTicketElementTitleTextFrame,
  ProcessTicketElementTitleTextComponent,
  ProcessTicketElementContentComponent,
  ProcessTicketElementContentTextFrame,
  ProcessTicketElementContentTextComponent,
  ProcessTicketElementContentButtonFrame,
  ProcessTicketElementContentButtonComponent,
  /*  */
} from 'styles/components/process/ProcessTicket';

import { GetTask } from 'services/process/GetTask';
import { ConvertDate } from 'libraries/conversion/ConvertDate';
import { ProcessPopUpDataType } from 'data/stores/AdminData';

const ProcessTicket = observer(() => {
  const { CommonData, AdminData } = useStore();

  const GetTaskFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);

    let GetTaskData = {};
    if (AdminData.ProcessPopUpData?.Step === 'TREATMENT') {
      GetTaskData = { treatCode: AdminData.ProcessPopUpData?.Code };
    } else if (AdminData.ProcessPopUpData?.Step === 'MEDICINE') {
      GetTaskData = { medicineCode: AdminData.ProcessPopUpData?.Code };
    } else if (AdminData.ProcessPopUpData?.Step === 'DELIVERY') {
      GetTaskData = { deliveryCode: AdminData.ProcessPopUpData?.Code };
    }

    const response = await GetTask(GetTaskData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_TASK',
        Title: '통합 상세 정보 불러오기 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [AdminData.ProcessPopUpData?.Code, AdminData.ProcessPopUpData?.Step, CommonData]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetTaskFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    AdminData.ProcessPopUpData?.Code,
    AdminData.ProcessPopUpData?.Step,
    AdminData.ProcessPopUpData?.Type,
  ]);

  const onClickProcessTicketElementComponent = (props: { ProcessCode: any; ProcessStep: any }) => {
    const { ProcessCode, ProcessStep } = props;
    const TempProcessPopUpData = JSON.parse(
      JSON.stringify(AdminData.ProcessPopUpData)
    ) as ProcessPopUpDataType;
    TempProcessPopUpData.Code = ProcessCode;
    TempProcessPopUpData.Step = ProcessStep;
    AdminData.setProcessPopUpData(TempProcessPopUpData);
  };

  return (
    <ProcessTicketFrame>
      <ProcessTicketComponent width="230px" height="250px">
        {/*  */}
        {AdminData.TaskData?.treatList?.map(treatment => (
          <ProcessTicketElementComponent
            key={treatment?.code}
            onClick={() =>
              onClickProcessTicketElementComponent({
                ProcessCode: treatment?.code,
                ProcessStep: 'TREATMENT',
              })
            }
            border={
              AdminData.ProcessPopUpData?.Code === treatment?.code &&
              AdminData.ProcessPopUpData?.Step === 'TREATMENT'
                ? '1px solid #ffffff'
                : '1px solid #ffffff'
            }
            backgroundColor={
              AdminData.ProcessPopUpData?.Code === treatment?.code &&
              AdminData.ProcessPopUpData?.Step === 'TREATMENT'
                ? '#3c9e3f'
                : '#14c276'
            }
          >
            <ProcessTicketElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementTitleTextFrame
                minWidth="50px"
                height="20px"
                justifyContent="center"
              >
                <ProcessTicketElementTitleTextComponent color="#ffffff">
                  진료
                </ProcessTicketElementTitleTextComponent>
              </ProcessTicketElementTitleTextFrame>
            </ProcessTicketElementTitleComponent>
            <ProcessTicketElementContentComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent>
                  {treatment.createdDateTime ? ConvertDate(treatment.createdDateTime) : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent color="blue">
                  {treatment.code ? treatment.code : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentButtonFrame minWidth="120px" height="30px">
                <ProcessTicketElementContentButtonComponent
                  width="100%"
                  color="#ffffff"
                  backgroundColor={
                    treatment.status === '접수 대기'
                      ? 'rgb(0,0,0)'
                      : treatment.status === '진료 대기'
                      ? 'rgb(0,0,0)'
                      : treatment.status === '진료 중'
                      ? 'rgb(0,0,0)'
                      : treatment.status === '결제 대기'
                      ? 'rgb(0,0,0)'
                      : treatment.status === '처방 및 수납'
                      ? 'rgb(0,0,0)'
                      : treatment.status === '결제 실패'
                      ? 'rgb(192,0,0)'
                      : treatment.status === '완료'
                      ? 'rgb(112,173,71)'
                      : treatment.status === '진료 취소'
                      ? 'rgb(192,0,0)'
                      : treatment.status === '진료 거절'
                      ? 'rgb(192,0,0)'
                      : treatment.status === '진료 시스템 취소'
                      ? 'rgb(192,0,0)'
                      : /*  */
                      treatment.status === '거절'
                      ? 'rgb(192,0,0)'
                      : treatment.status === '취소'
                      ? 'rgb(192,0,0)'
                      : treatment.status === '진료 완료'
                      ? 'rgb(112,173,71)'
                      : /*  */
                        '#000000'
                  }
                >
                  {treatment.status ? treatment.status : '-'}
                </ProcessTicketElementContentButtonComponent>
              </ProcessTicketElementContentButtonFrame>
            </ProcessTicketElementContentComponent>
          </ProcessTicketElementComponent>
        ))}
        {AdminData.TaskData?.medicineList?.map(medicine => (
          <ProcessTicketElementComponent
            key={medicine?.code}
            onClick={() =>
              onClickProcessTicketElementComponent({
                ProcessCode: medicine?.code,
                ProcessStep: 'MEDICINE',
              })
            }
            border={
              AdminData.ProcessPopUpData?.Code === medicine?.code &&
              AdminData.ProcessPopUpData?.Step === 'MEDICINE'
                ? '1px solid #ffffff'
                : '1px solid #ffffff'
            }
            backgroundColor={
              AdminData.ProcessPopUpData?.Code === medicine?.code &&
              AdminData.ProcessPopUpData?.Step === 'MEDICINE'
                ? '#3c9e3f'
                : '#14c276'
            }
          >
            <ProcessTicketElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementTitleTextFrame
                minWidth="50px"
                height="20px"
                justifyContent="center"
              >
                <ProcessTicketElementTitleTextComponent color="#ffffff">
                  조제
                </ProcessTicketElementTitleTextComponent>
              </ProcessTicketElementTitleTextFrame>
            </ProcessTicketElementTitleComponent>
            <ProcessTicketElementContentComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent>
                  {medicine.createdDateTime ? ConvertDate(medicine.createdDateTime) : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent color="blue">
                  {medicine.code ? medicine.code : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentButtonFrame minWidth="120px" height="30px">
                <ProcessTicketElementContentButtonComponent
                  width="100%"
                  color="#ffffff"
                  backgroundColor={
                    medicine.status === '접수 대기'
                      ? 'rgb(0,0,0)'
                      : medicine.status === '조제 중'
                      ? 'rgb(0,0,0)'
                      : medicine.status === '결제 실패'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '조제 거절'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '조제 시스템 취소'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '완료'
                      ? 'rgb(112,173,71)'
                      : /*  */
                      medicine.status === '거절'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '취소'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '조제 완료'
                      ? 'rgb(112,173,71)'
                      : medicine.status === '조제 취소'
                      ? 'rgb(192,0,0)'
                      : medicine.status === '방문 대기'
                      ? '#000000'
                      : medicine.status === '배차 대기'
                      ? '#000000'
                      : medicine.status === '배차 완료'
                      ? '#000000'
                      : medicine.status === '픽업 완료'
                      ? '#000000'
                      : /*  */
                        '#000000'
                  }
                >
                  {medicine.status ? medicine.status : '-'}
                </ProcessTicketElementContentButtonComponent>
              </ProcessTicketElementContentButtonFrame>
            </ProcessTicketElementContentComponent>
          </ProcessTicketElementComponent>
        ))}
        {AdminData.TaskData?.deliveryList?.map(delivery => (
          <ProcessTicketElementComponent
            key={delivery?.code}
            onClick={() =>
              onClickProcessTicketElementComponent({
                ProcessCode: delivery?.code,
                ProcessStep: 'DELIVERY',
              })
            }
            border={
              AdminData.ProcessPopUpData?.Code === delivery?.code &&
              AdminData.ProcessPopUpData?.Step === 'DELIVERY'
                ? '1px solid #ffffff'
                : '1px solid #ffffff'
            }
            backgroundColor={
              AdminData.ProcessPopUpData?.Code === delivery?.code &&
              AdminData.ProcessPopUpData?.Step === 'DELIVERY'
                ? '#3c9e3f'
                : '#14c276'
            }
          >
            <ProcessTicketElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementTitleTextFrame
                minWidth="50px"
                height="20px"
                justifyContent="center"
              >
                <ProcessTicketElementTitleTextComponent color="#ffffff">
                  {delivery?.deliveryType ? delivery?.deliveryType : '방문/배달'}
                </ProcessTicketElementTitleTextComponent>
              </ProcessTicketElementTitleTextFrame>
            </ProcessTicketElementTitleComponent>
            <ProcessTicketElementContentComponent flexDirection="column" justifyContent="center">
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent>
                  {delivery.createdDateTime ? ConvertDate(delivery.createdDateTime) : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentTextFrame minWidth="120px" height="20px">
                <ProcessTicketElementContentTextComponent color="blue">
                  {delivery.code ? delivery.code : '-'}
                </ProcessTicketElementContentTextComponent>
              </ProcessTicketElementContentTextFrame>
              <ProcessTicketElementContentButtonFrame minWidth="120px" height="30px">
                <ProcessTicketElementContentButtonComponent
                  width="100%"
                  color="#ffffff"
                  backgroundColor={
                    delivery?.status === '방문 대기'
                      ? 'rgb(255,64,64)'
                      : delivery?.status === '조제 대기'
                      ? 'rgb(255,64,64)'
                      : delivery?.status === '접수 대기'
                      ? 'rgb(255,64,64)'
                      : delivery?.status === '배차 대기'
                      ? 'rgb(255,192,0)'
                      : delivery?.status === '배차 완료'
                      ? 'rgb(0,0,0)'
                      : delivery?.status === '픽업 완료'
                      ? 'rgb(237,125,49)'
                      : delivery?.status === '완료'
                      ? 'rgb(112,173,71)'
                      : delivery?.status === '취소'
                      ? 'rgb(255,64,64)'
                      : /*  */
                      delivery?.status === '배달 완료'
                      ? 'rgb(112,173,71)'
                      : delivery?.status === '배달 취소'
                      ? 'rgb(255,64,64)'
                      : delivery?.status === '배달 거절'
                      ? 'rgb(255,64,64)'
                      : delivery?.status === '거절'
                      ? 'rgb(255,64,64)'
                      : /*  */
                        '#000000'
                  }
                >
                  {delivery.status ? delivery.status : '-'}
                </ProcessTicketElementContentButtonComponent>
              </ProcessTicketElementContentButtonFrame>
            </ProcessTicketElementContentComponent>
          </ProcessTicketElementComponent>
        ))}
        {/*  */}
      </ProcessTicketComponent>
    </ProcessTicketFrame>
  );
});

export default ProcessTicket;
