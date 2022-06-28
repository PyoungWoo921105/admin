/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
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

import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
import { GetConditionalMinutesTimeCost } from 'libraries/time/GetConditionalMinutesTimeCost';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';

const ProcessGauge = observer(() => {
  const { CommonData, AdminData, TreatmentData, MedicineData, DeliveryData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  {TreatmentData?.TreatmentDetailsData?.waitTime
                    ? `${ConvertCommaNumber(TreatmentData?.TreatmentDetailsData?.waitTime)}분`
                    : '-'}
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
                </ProcessGaugeElementContentTextComponent>
              </ProcessGaugeElementContentTextFrame>
            </ProcessGaugeElementContentComponent>
          </ProcessGaugeElementComponent>
          {/*  */}
        </ProcessGaugeComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '빠른 배달' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '오늘 배송' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '택배' ? (
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
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name || '-'}
                  </ProcessGaugeElementContentTextComponent>
                </ProcessGaugeElementContentTextFrame>
              </ProcessGaugeElementContentComponent>
            </ProcessGaugeElementComponent>
            {/*  */}
          </ProcessGaugeComponent>
        ) : DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '방문' ? (
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
