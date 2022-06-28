/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessControlFrame,
  ProcessControlComponent,
  /*  */
  ProcessControlElementComponent,
  ProcessControlElementTitleComponent,
  ProcessControlElementTitleTextFrame,
  ProcessControlElementTitleTextComponent,
  ProcessControlElementContentComponent,
  ProcessControlElementContentTextFrame,
  ProcessControlElementContentTextComponent,
  /*  */
} from 'styles/components/process/ProcessControl';

import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
import { GetConditionalMinutesTimeCost } from 'libraries/time/GetConditionalMinutesTimeCost';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';

const ProcessControl = observer(() => {
  const { CommonData, AdminData, TreatmentData, MedicineData, DeliveryData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProcessControlFrame>
      {AdminData.ProcessPopUpData?.Step === 'TREATMENT' ? (
        <ProcessControlComponent width="230px" height="200px">
          <ProcessControlElementComponent
            border="1px solid #3c9e3f"
            borderRadius="10px 10px 0px 0px"
            backgroundColor="#3c9e3f"
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent color="#ffffff">
                  진료
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          {/*  */}
          <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessControlElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementTitleTextComponent color="#000000">
                  접수 대기 시간
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
            <ProcessControlElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementContentTextComponent color="#000000">
                  {TreatmentData?.TreatmentDetailsData?.waitReceptionDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: TreatmentData?.TreatmentDetailsData?.waitReceptionDateTime,
                          next: TreatmentData?.TreatmentDetailsData?.waitTreatDateTime,
                          alt: TreatmentData?.TreatmentDetailsData?.canceledInfo?.dateTime,
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}분`
                    : '-'}
                </ProcessControlElementContentTextComponent>
              </ProcessControlElementContentTextFrame>
            </ProcessControlElementContentComponent>
          </ProcessControlElementComponent>
          <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessControlElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementTitleTextComponent color="#000000">
                  예상 대기 시간
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
            <ProcessControlElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementContentTextComponent color="#000000">
                  {TreatmentData?.TreatmentDetailsData?.waitTime
                    ? `${ConvertCommaNumber(TreatmentData?.TreatmentDetailsData?.waitTime)}분`
                    : '-'}
                </ProcessControlElementContentTextComponent>
              </ProcessControlElementContentTextFrame>
            </ProcessControlElementContentComponent>
          </ProcessControlElementComponent>
          <ProcessControlElementComponent
            border="1px solid #3c9e3f"
            borderRadius="0px 0px 10px 10px"
            backgroundColor="#ffffff"
          >
            <ProcessControlElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementTitleTextComponent color="#000000">
                  진료 대기 시간
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
            <ProcessControlElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementContentTextComponent color="#000000">
                  {TreatmentData?.TreatmentDetailsData?.waitTreatDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: TreatmentData?.TreatmentDetailsData?.waitTreatDateTime,
                          next: TreatmentData?.TreatmentDetailsData?.inTreatDateTime,
                          alt: TreatmentData?.TreatmentDetailsData?.canceledInfo?.dateTime,
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}분`
                    : '-'}
                </ProcessControlElementContentTextComponent>
              </ProcessControlElementContentTextFrame>
            </ProcessControlElementContentComponent>
          </ProcessControlElementComponent>
          {/*  */}
        </ProcessControlComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'MEDICINE' ? (
        <ProcessControlComponent width="230px" height="200px">
          <ProcessControlElementComponent
            border="1px solid #3c9e3f"
            borderRadius="10px 10px 0px 0px"
            backgroundColor="#3c9e3f"
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent color="#ffffff">
                  조제
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          {/*  */}
          <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
            <ProcessControlElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementTitleTextComponent color="#000000">
                  조제 대기 시간
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
            <ProcessControlElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementContentTextComponent color="#000000">
                  {MedicineData?.MedicineDetailsData?.waitReceptionDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: MedicineData?.MedicineDetailsData?.waitReceptionDateTime,
                          next: MedicineData?.MedicineDetailsData?.inMakingDateTime,
                          alt: MedicineData?.MedicineDetailsData?.canceledInfo?.dateTime,
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}분`
                    : '-'}
                </ProcessControlElementContentTextComponent>
              </ProcessControlElementContentTextFrame>
            </ProcessControlElementContentComponent>
          </ProcessControlElementComponent>
          <ProcessControlElementComponent
            border="1px solid #3c9e3f"
            borderRadius="0px 0px 10px 10px"
            backgroundColor="#ffffff"
          >
            <ProcessControlElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementTitleTextFrame
                width="75px"
                minWidth="75px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementTitleTextComponent color="#000000">
                  조제 중 시간
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
            <ProcessControlElementContentComponent
              flexDirection="column"
              justifyContent="center"
              border="1px solid #3c9e3f"
            >
              <ProcessControlElementContentTextFrame
                minWidth="95px"
                width="95px"
                height="20px"
                justifyContent="center"
              >
                <ProcessControlElementContentTextComponent color="#000000">
                  {MedicineData?.MedicineDetailsData?.inMakingDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: MedicineData?.MedicineDetailsData?.inMakingDateTime,
                          next: MedicineData?.MedicineDetailsData?.completedDateTime,
                          alt: MedicineData?.MedicineDetailsData?.canceledInfo?.dateTime,
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}분`
                    : '-'}
                </ProcessControlElementContentTextComponent>
              </ProcessControlElementContentTextFrame>
            </ProcessControlElementContentComponent>
          </ProcessControlElementComponent>
          {/*  */}
        </ProcessControlComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '빠른 배달' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '오늘 배송' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '택배' ? (
          <ProcessControlComponent width="230px" height="200px">
            <ProcessControlElementComponent
              border="1px solid #3c9e3f"
              borderRadius="10px 10px 0px 0px"
              backgroundColor="#3c9e3f"
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent color="#ffffff">
                    {
                      AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    }
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
            </ProcessControlElementComponent>
            {/*  */}
            <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessControlElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementTitleTextComponent color="#000000">
                    배차 소요 시간
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
              <ProcessControlElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementContentTextComponent color="#000000">
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                      ? `${ConvertCommaNumber(
                          GetConditionalMinutesTimeCost({
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.requestedDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.allocCompletedDateTime,
                            alt: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
                      : '-'}
                  </ProcessControlElementContentTextComponent>
                </ProcessControlElementContentTextFrame>
              </ProcessControlElementContentComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessControlElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementTitleTextComponent color="#000000">
                    픽업 소요 시간
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
              <ProcessControlElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementContentTextComponent color="#000000">
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.allocCompletedDateTime
                      ? `${ConvertCommaNumber(
                          GetConditionalMinutesTimeCost({
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.allocCompletedDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime,
                            alt: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
                      : '-'}
                  </ProcessControlElementContentTextComponent>
                </ProcessControlElementContentTextFrame>
              </ProcessControlElementContentComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent border="1px solid #3c9e3f" backgroundColor="#ffffff">
              <ProcessControlElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementTitleTextComponent color="#000000">
                    배달 소요 시간
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
              <ProcessControlElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementContentTextComponent color="#000000">
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime
                      ? `${ConvertCommaNumber(
                          GetConditionalMinutesTimeCost({
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime,
                            alt: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
                      : '-'}
                  </ProcessControlElementContentTextComponent>
                </ProcessControlElementContentTextFrame>
              </ProcessControlElementContentComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent
              border="1px solid #3c9e3f"
              borderRadius="0px 0px 10px 10px"
              backgroundColor="#ffffff"
            >
              <ProcessControlElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementTitleTextComponent color="#000000">
                    배송 업체
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
              <ProcessControlElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementContentTextComponent color="#000000">
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name || '-'}
                  </ProcessControlElementContentTextComponent>
                </ProcessControlElementContentTextFrame>
              </ProcessControlElementContentComponent>
            </ProcessControlElementComponent>
            {/*  */}
          </ProcessControlComponent>
        ) : DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '방문' ? (
          <ProcessControlComponent width="230px" height="200px">
            <ProcessControlElementComponent
              border="1px solid #3c9e3f"
              borderRadius="10px 10px 0px 0px"
              backgroundColor="#3c9e3f"
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent color="#ffffff">
                    {
                      AdminData.TaskData?.deliveryList?.find(
                        delivery => delivery.code === AdminData.ProcessPopUpData?.Code
                      )?.deliveryType
                    }
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
            </ProcessControlElementComponent>
            {/*  */}
            <ProcessControlElementComponent
              border="1px solid #3c9e3f"
              borderRadius="0px 0px 10px 10px"
              backgroundColor="#ffffff"
            >
              <ProcessControlElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementTitleTextFrame
                  width="75px"
                  minWidth="75px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementTitleTextComponent color="#000000">
                    방문 소요 시간
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
              <ProcessControlElementContentComponent
                flexDirection="column"
                justifyContent="center"
                border="1px solid #3c9e3f"
              >
                <ProcessControlElementContentTextFrame
                  minWidth="95px"
                  width="95px"
                  height="20px"
                  justifyContent="center"
                >
                  <ProcessControlElementContentTextComponent color="#000000">
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                      ? `${ConvertCommaNumber(
                          GetConditionalMinutesTimeCost({
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.requestedDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime,
                            alt: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
                      : '-'}
                  </ProcessControlElementContentTextComponent>
                </ProcessControlElementContentTextFrame>
              </ProcessControlElementContentComponent>
            </ProcessControlElementComponent>
            {/*  */}
          </ProcessControlComponent>
        ) : null
      ) : null}
    </ProcessControlFrame>
  );
});

export default ProcessControl;
