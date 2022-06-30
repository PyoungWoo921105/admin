/*
 * Copyright (c) 2022 Medir Inc.
 */

/* eslint-disable react/button-has-type */
/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessConverterFrame,
  ProcessConverterComponent,
  /*  */
  ProcessConverterElementComponent,
  ProcessConverterElementTitleComponent,
  ProcessConverterElementTitleTextFrame,
  ProcessConverterElementTitleTextComponent,
  /*  */
} from 'styles/components/process/ProcessConverter';

import { ProcessPopUpDataType } from 'data/stores/AdminData';

const ProcessConverter = observer(() => {
  const { AdminData } = useStore();

  const onClickProcessConverterElementComponent = (props: { ProcessType: any }) => {
    const { ProcessType } = props;
    const TempProcessPopUpData = JSON.parse(
      JSON.stringify(AdminData.ProcessPopUpData)
    ) as ProcessPopUpDataType;
    TempProcessPopUpData.Type = ProcessType;
    AdminData.setProcessPopUpData(TempProcessPopUpData);
  };

  return (
    <ProcessConverterFrame>
      <ProcessConverterComponent height="40px">
        {/*  */}
        <ProcessConverterElementComponent
          onClick={() =>
            onClickProcessConverterElementComponent({
              ProcessType: 'SPECIFICATION',
            })
          }
          border="1px solid #ffffff"
          backgroundColor={
            AdminData.ProcessPopUpData?.Type === 'SPECIFICATION' ? '#3c9e3f' : '#14c276'
          }
          cursor={AdminData.ProcessPopUpData?.Type === 'SPECIFICATION' ? '' : 'pointer'}
          width="100%"
        >
          <ProcessConverterElementTitleComponent flexDirection="column" justifyContent="center">
            <ProcessConverterElementTitleTextFrame
              height="20px"
              justifyContent="center"
              minWidth="120px"
            >
              <ProcessConverterElementTitleTextComponent
                color={AdminData.ProcessPopUpData?.Type === 'SPECIFICATION' ? '#ffffff' : '#ffffff'}
              >
                {AdminData.ProcessPopUpData?.Step === 'TREATMENT'
                  ? '진료'
                  : AdminData.ProcessPopUpData?.Step === 'MEDICINE'
                  ? '조제'
                  : AdminData.ProcessPopUpData?.Step === 'DELIVERY'
                  ? AdminData.TaskData?.deliveryList?.find(
                      delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                    )?.deliveryType
                    ? AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    : '방문/배달'
                  : ''}{' '}
                상세 정보
              </ProcessConverterElementTitleTextComponent>
            </ProcessConverterElementTitleTextFrame>
          </ProcessConverterElementTitleComponent>
        </ProcessConverterElementComponent>
        <ProcessConverterElementComponent
          onClick={() =>
            onClickProcessConverterElementComponent({
              ProcessType: 'LOG',
            })
          }
          border="1px solid #ffffff"
          backgroundColor={AdminData.ProcessPopUpData?.Type === 'LOG' ? '#3c9e3f' : '#14c276'}
          cursor={AdminData.ProcessPopUpData?.Type === 'LOG' ? '' : 'pointer'}
          width="100%"
        >
          <ProcessConverterElementTitleComponent flexDirection="column" justifyContent="center">
            <ProcessConverterElementTitleTextFrame
              height="20px"
              justifyContent="center"
              minWidth="120px"
            >
              <ProcessConverterElementTitleTextComponent
                color={AdminData.ProcessPopUpData?.Type === 'LOG' ? '#ffffff' : '#ffffff'}
              >
                {AdminData.ProcessPopUpData?.Step === 'TREATMENT'
                  ? '진료'
                  : AdminData.ProcessPopUpData?.Step === 'MEDICINE'
                  ? '조제'
                  : AdminData.ProcessPopUpData?.Step === 'DELIVERY'
                  ? AdminData.TaskData?.deliveryList?.find(
                      delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                    )?.deliveryType
                    ? AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    : '방문/배달'
                  : ''}{' '}
                처리 내역
              </ProcessConverterElementTitleTextComponent>
            </ProcessConverterElementTitleTextFrame>
          </ProcessConverterElementTitleComponent>
        </ProcessConverterElementComponent>
        {/*  */}
      </ProcessConverterComponent>
    </ProcessConverterFrame>
  );
});

export default ProcessConverter;
