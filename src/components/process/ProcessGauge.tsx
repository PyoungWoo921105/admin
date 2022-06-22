/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessGaugeFrame,
  ProcessGaugeComponent,
  /*  */
  ProcessGaugeElementComponent,
  ProcessGaugeElementTitleComponent,
  ProcessGaugeElementTitleTextFrame,
  ProcessGaugeElementTitleTextComponent,
  ProcessGaugeElementContentComponent,
  ProcessGaugeElementContentTextFrame,
  ProcessGaugeElementContentTextComponent,
  /*  */
} from 'styles/components/process/ProcessGauge';

import { GetTask } from 'services/process/GetTask';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
import { ProcessPopUpDataType } from 'data/stores/AdminData';

const ProcessGauge = observer(() => {
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

  useEffect(() => {
    if (AdminData.ProcessPopUpData?.Step === 'DELIVERY') {
      const TempProcessPopUpData = JSON.parse(
        JSON.stringify(AdminData.ProcessPopUpData)
      ) as ProcessPopUpDataType;
      if (
        AdminData.TaskData?.deliveryList?.find(
          delivery => delivery.code === AdminData.ProcessPopUpData?.Code
        )?.deliveryType === '방문'
      ) {
        TempProcessPopUpData.Way = 'VISIT';
      } else if (
        AdminData.TaskData?.deliveryList?.find(
          delivery => delivery.code === AdminData.ProcessPopUpData?.Code
        )?.deliveryType === '빠른 배달'
      ) {
        TempProcessPopUpData.Way = 'QUICK';
      } else if (
        AdminData.TaskData?.deliveryList?.find(
          delivery => delivery.code === AdminData.ProcessPopUpData?.Code
        )?.deliveryType === '오늘 배송'
      ) {
        TempProcessPopUpData.Way = 'TODAY';
      } else if (
        AdminData.TaskData?.deliveryList?.find(
          delivery => delivery.code === AdminData.ProcessPopUpData?.Code
        )?.deliveryType === '택배'
      ) {
        TempProcessPopUpData.Way = 'PARCEL';
      }

      AdminData.setProcessPopUpData(TempProcessPopUpData);
    } else {
      const TempProcessPopUpData = JSON.parse(
        JSON.stringify(AdminData.ProcessPopUpData)
      ) as ProcessPopUpDataType;
      TempProcessPopUpData.Way = '';
      AdminData.setProcessPopUpData(TempProcessPopUpData);
    }
  }, [
    AdminData,
    AdminData.ProcessPopUpData?.Code,
    AdminData.ProcessPopUpData?.Step,
    AdminData.TaskData?.deliveryList,
  ]);

  return (
    <ProcessGaugeFrame>
      {AdminData.ProcessPopUpData?.Step === 'TREATMENT' ? (
        <ProcessGaugeComponent width="230px" height="200px">
          <ProcessGaugeElementComponent
            border="1px solid #3c9e3f"
            borderRadius="10px 10px 0px 0px"
            backgroundColor="#3c9e3f"
          >
            <ProcessGaugeElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessGaugeElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessGaugeElementTitleTextComponent color="#ffffff">
                  진료
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
          </ProcessGaugeElementComponent>
          {/*  */}
          <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessGaugeElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementTitleTextComponent color="#000000">
                  접수 대기 시간
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
            <ProcessGaugeElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementContentTextComponent color="#000000">
                  {/* TODO */}
                  {`${ConvertCommaNumber('2010')}분`}
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessGaugeElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementTitleTextComponent color="#000000">
                  예상 대기 시간
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
            <ProcessGaugeElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementContentTextComponent color="#000000">
                  {/* TODO */}
                  {`${ConvertCommaNumber('2010')}분`}
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          <ProcessGaugeElementComponent
            border="1px solid #3c9e3f"
            borderRadius="0px 0px 10px 10px"
            backgroundColor="#ffffff"
          >
            <ProcessGaugeElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementTitleTextComponent color="#000000">
                  진료 대기 시간
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
            <ProcessGaugeElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementContentTextComponent color="#000000">
                  {/* TODO */}
                  {`${ConvertCommaNumber('2010')}분`}
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          {/*  */}
        </ProcessGaugeComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'MEDICINE' ? (
        <ProcessGaugeComponent width="230px" height="200px">
          <ProcessGaugeElementComponent
            border="1px solid #3c9e3f"
            borderRadius="10px 10px 0px 0px"
            backgroundColor="#3c9e3f"
          >
            <ProcessGaugeElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessGaugeElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessGaugeElementTitleTextComponent color="#ffffff">
                  조제
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
          </ProcessGaugeElementComponent>
          {/*  */}
          <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessGaugeElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementTitleTextComponent color="#000000">
                  조제 대기 시간
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
            <ProcessGaugeElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementContentTextComponent color="#000000">
                  {/* TODO */}
                  {`${ConvertCommaNumber('2010')}분`}
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          <ProcessGaugeElementComponent
            border="1px solid #3c9e3f"
            borderRadius="0px 0px 10px 10px"
            backgroundColor="#ffffff"
          >
            <ProcessGaugeElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementTitleTextComponent color="#000000">
                  조제 중 시간
                </ProcessGaugeElementTitleTextComponent>
              </ProcessGaugeElementTitleTextFrame>
            </ProcessGaugeElementTitleComponent>
            <ProcessGaugeElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessGaugeElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessGaugeElementContentTextComponent color="#000000">
                  {/* TODO */}
                  {`${ConvertCommaNumber('2010')}분`}
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          {/*  */}
        </ProcessGaugeComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        AdminData.ProcessPopUpData?.Way === 'QUICK' ||
        AdminData.ProcessPopUpData?.Way === 'TODAY' ||
        AdminData.ProcessPopUpData?.Way === 'PARCEL' ? (
          <ProcessGaugeComponent width="230px" height="200px">
            <ProcessGaugeElementComponent
              border="1px solid #3c9e3f"
              borderRadius="10px 10px 0px 0px"
              backgroundColor="#3c9e3f"
            >
              <ProcessGaugeElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessGaugeElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessGaugeElementTitleTextComponent color="#ffffff">
                    {
                      AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    }
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
            </ProcessGaugeElementComponent>
            {/*  */}
            <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessGaugeElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementTitleTextComponent color="#000000">
                    배차 소요 시간
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
              <ProcessGaugeElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementContentTextComponent color="#000000">
                    {/* TODO */}
                    {`${ConvertCommaNumber('2010')}분`}
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessGaugeElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementTitleTextComponent color="#000000">
                    픽업 소요 시간
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
              <ProcessGaugeElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementContentTextComponent color="#000000">
                    {/* TODO */}
                    {`${ConvertCommaNumber('2010')}분`}
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            <ProcessGaugeElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessGaugeElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementTitleTextComponent color="#000000">
                    배달 소요 시간
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
              <ProcessGaugeElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementContentTextComponent color="#000000">
                    {/* TODO */}
                    {`${ConvertCommaNumber('2010')}분`}
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            <ProcessGaugeElementComponent
              border="1px solid #3c9e3f"
              borderRadius="0px 0px 10px 10px"
              backgroundColor="#ffffff"
            >
              <ProcessGaugeElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementTitleTextComponent color="#000000">
                    배송 업체
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
              <ProcessGaugeElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementContentTextComponent color="#000000">
                    {/* TODO */}
                    카카오 퀵 (이코노미)
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            {/*  */}
          </ProcessGaugeComponent>
        ) : AdminData.ProcessPopUpData?.Way === 'VISIT' ? (
          <ProcessGaugeComponent width="230px" height="200px">
            <ProcessGaugeElementComponent
              border="1px solid #3c9e3f"
              borderRadius="10px 10px 0px 0px"
              backgroundColor="#3c9e3f"
            >
              <ProcessGaugeElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessGaugeElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessGaugeElementTitleTextComponent color="#ffffff">
                    {
                      AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    }
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
            </ProcessGaugeElementComponent>
            {/*  */}
            <ProcessGaugeElementComponent
              border="1px solid #3c9e3f"
              borderRadius="0px 0px 10px 10px"
              backgroundColor="#ffffff"
            >
              <ProcessGaugeElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementTitleTextComponent color="#000000">
                    방문 소요 시간
                  </ProcessGaugeElementTitleTextComponent>
                </ProcessGaugeElementTitleTextFrame>
              </ProcessGaugeElementTitleComponent>
              <ProcessGaugeElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessGaugeElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessGaugeElementContentTextComponent color="#000000">
                    {/* TODO */}
                    {`${ConvertCommaNumber('2010')}분`}
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            {/*  */}
          </ProcessGaugeComponent>
        ) : null
      ) : null}
    </ProcessGaugeFrame>
  );
});

export default ProcessGauge;
