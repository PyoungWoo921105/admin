/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessSpecificationTypeComponent,
  ProcessSpecificationComponent,
  /*  */
  ProcessSpecificationElementFrame,
  ProcessSpecificationElementComponent,
  ProcessSpecificationElementTitleComponent,
  ProcessSpecificationElementTitleTextFrame,
  ProcessSpecificationElementTitleTextComponent,
  ProcessSpecificationElementContentComponent,
  ProcessSpecificationElementContentTextFrame,
  ProcessSpecificationElementContentTextComponent,
  /*  */
} from 'styles/components/process/ProcessSpecification';

import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
import { ConvertDate } from 'libraries/conversion/ConvertDate';
import { GetConditionalMinutesTimeCost } from 'libraries/time/GetConditionalMinutesTimeCost';
import { AllowConditionalNumberDifference } from 'libraries/constraint/AllowConditionalNumberDifference';

const ProcessDeliverySpecification = observer(() => {
  const { DeliveryData, CommonData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProcessSpecificationTypeComponent>
      {/*  */}
      <ProcessSpecificationComponent width="100%" height="100%">
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              backgroundColor="#3c9e3f"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#ffffff">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
          </ProcessSpecificationElementComponent>
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.name || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ????????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.phoneNum
                    ? AllowNumber(
                        DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.phoneNum
                      )
                      ? ConvertContactNumber(
                          AllowNumber(
                            DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.phoneNum
                          )
                        )
                      : DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.phoneNum
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ????????? ????????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.ownerPhoneNum
                    ? AllowNumber(
                        DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.ownerPhoneNum
                      )
                      ? ConvertContactNumber(
                          AllowNumber(
                            DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.ownerPhoneNum
                          )
                        )
                      : DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.ownerPhoneNum
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ????????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.faxNum
                    ? AllowNumber(DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.faxNum)
                      ? ConvertContactNumber(
                          AllowNumber(
                            DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.faxNum
                          )
                        )
                      : DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.faxNum
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
      </ProcessSpecificationComponent>
      {/*  */}
      <ProcessSpecificationComponent width="100%" height="100%">
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              backgroundColor="#3c9e3f"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#ffffff">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
          </ProcessSpecificationElementComponent>
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.applicantName || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ????????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.phoneNum
                    ? AllowNumber(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.phoneNum
                      )
                      ? ConvertContactNumber(
                          AllowNumber(
                            DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.phoneNum
                          )
                        )
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.phoneNum
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.name || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.patient?.relationType || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.deliveryRequest || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
      </ProcessSpecificationComponent>
      {/*  */}
      <ProcessSpecificationComponent width="100%" height="100%">
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              backgroundColor="#3c9e3f"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#ffffff">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
          </ProcessSpecificationElementComponent>
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.deliveryCode || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.status || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.deliveryType || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.distance
                    ? `${ConvertCommaNumber(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.distance.toString()
                      )}m`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ????????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.riderName || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ????????? ????????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.riderPhoneNum
                    ? AllowNumber(DeliveryData?.DeliveryDetailsData?.deliveryInfo?.riderPhoneNum)
                      ? ConvertContactNumber(
                          AllowNumber(
                            DeliveryData?.DeliveryDetailsData?.deliveryInfo?.riderPhoneNum
                          )
                        )
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.riderPhoneNum
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                    ? ConvertDate(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                      )
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime,
                          next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime,
                          alt: [DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime],
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.waitAllocDateTime
                    ? ConvertDate(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.waitAllocDateTime
                      )
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.requestedDateTime,
                          next: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                            ?.allocCompletedDateTime,
                          alt: [DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime],
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.allocCompletedDateTime
                    ? ConvertDate(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.allocCompletedDateTime
                      )
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.allocCompletedDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                            ?.allocCompletedDateTime,
                          next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime,
                          alt: [DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime],
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime
                    ? ConvertDate(DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime)
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime
                    ? `${ConvertCommaNumber(
                        GetConditionalMinutesTimeCost({
                          prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.pickUpDateTime,
                          next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime,
                          alt: [DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime],
                          curr: CommonData.CurrentTime,
                        }).toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime
                    ? ConvertDate(DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime)
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime
                    ? ConvertDate(DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime)
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy
                    ? DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy === 'admin'
                      ? '??????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy === 'patient'
                      ? '??????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                        'hospital'
                      ? '??????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy === 'doctor'
                      ? '??????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                        'pharmacy'
                      ? '??????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy === 'rider'
                      ? '?????????'
                      : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  3PL ?????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiAddFee
                    ? `${ConvertCommaNumber(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiAddFee.toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryReason || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ?????????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.userPaidFee
                    ? `${ConvertCommaNumber(
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.userPaidFee.toString()
                      )}???`
                    : '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent
                  color="#000000"
                  whiteSpace="pre-line"
                >
                  {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.deliveryRequest || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ???/???
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.sido || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ???/???/???
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.sigungu || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.jibunAddress || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ????????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.roadAddress || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
        <ProcessSpecificationElementFrame width="100%" border="none">
          {/*  */}
          <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
            <ProcessSpecificationElementTitleComponent
              flexDirection="column"
              justifyContent="center"
              minWidth="150px"
              backgroundColor="#14c276"
            >
              <ProcessSpecificationElementTitleTextFrame>
                <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                  ?????? ??????
                </ProcessSpecificationElementTitleTextComponent>
              </ProcessSpecificationElementTitleTextFrame>
            </ProcessSpecificationElementTitleComponent>
            <ProcessSpecificationElementContentComponent
              flexDirection="column"
              justifyContent="center"
              width="100%"
              minWidth="300px"
            >
              <ProcessSpecificationElementContentTextFrame>
                <ProcessSpecificationElementContentTextComponent color="#000000">
                  {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.detailedAddress || '-'}
                </ProcessSpecificationElementContentTextComponent>
              </ProcessSpecificationElementContentTextFrame>
            </ProcessSpecificationElementContentComponent>
          </ProcessSpecificationElementComponent>
          {/*  */}
        </ProcessSpecificationElementFrame>
        {/*  */}
      </ProcessSpecificationComponent>
      {/*  */}
      {DeliveryData.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name ? (
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name ===
          '????????????(????????????)' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name === '????????????(??????)' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name === '????????????(??????)' ? (
          <ProcessSpecificationComponent width="100%" height="100%">
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  backgroundColor="#3c9e3f"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#ffffff">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      3PL ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiOrderCode || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ????????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.agency?.name || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ????????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.agency?.code || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpMinute
                        ? `${DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpMinute}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpStartDateTime
                        ? ConvertDate(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpStartDateTime
                          )
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.name || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.code || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee
                        ? `${ConvertCommaNumber(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee.toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee
                        ? `${ConvertCommaNumber(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee.toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {(DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee ||
                        DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee) &&
                      AllowConditionalNumberDifference({
                        first:
                          DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee.toString(),
                        second:
                          DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee.toString(),
                      }).toString()
                        ? `${ConvertCommaNumber(
                            AllowConditionalNumberDifference({
                              first:
                                DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee.toString(),
                              second:
                                DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee.toString(),
                            }).toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent
                      color="#000000"
                      whiteSpace="pre-line"
                    >
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.deliveryRequest || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
          </ProcessSpecificationComponent>
        ) : DeliveryData.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name === '????????????' ? (
          <ProcessSpecificationComponent width="100%" height="100%">
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  backgroundColor="#3c9e3f"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#ffffff">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      3PL ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiOrderCode || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ????????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.agency?.name || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ????????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.agency?.code || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpMinute
                        ? `${DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpMinute}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpStartDateTime
                        ? ConvertDate(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.pickUpStartDateTime
                          )
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.name || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.code || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee
                        ? `${ConvertCommaNumber(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee.toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee
                        ? `${ConvertCommaNumber(
                            DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee.toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent color="#000000">
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee ||
                      DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee
                        ? `${ConvertCommaNumber(
                            AllowConditionalNumberDifference({
                              first:
                                DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiDefaultFee.toString(),
                              second:
                                DeliveryData?.DeliveryDetailsData?.logisticsInfo?.logiAddFee.toString(),
                            }).toString()
                          )}???`
                        : '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
            <ProcessSpecificationElementFrame width="100%" border="none">
              {/*  */}
              <ProcessSpecificationElementComponent border="1px solid #3c9e3f" width="100%">
                <ProcessSpecificationElementTitleComponent
                  flexDirection="column"
                  justifyContent="center"
                  minWidth="150px"
                  backgroundColor="#14c276"
                >
                  <ProcessSpecificationElementTitleTextFrame>
                    <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                      ?????? ?????? ??????
                    </ProcessSpecificationElementTitleTextComponent>
                  </ProcessSpecificationElementTitleTextFrame>
                </ProcessSpecificationElementTitleComponent>
                <ProcessSpecificationElementContentComponent
                  flexDirection="column"
                  justifyContent="center"
                  width="100%"
                  minWidth="300px"
                >
                  <ProcessSpecificationElementContentTextFrame>
                    <ProcessSpecificationElementContentTextComponent
                      color="#000000"
                      whiteSpace="pre-line"
                    >
                      {DeliveryData?.DeliveryDetailsData?.logisticsInfo?.deliveryRequest || '-'}
                    </ProcessSpecificationElementContentTextComponent>
                  </ProcessSpecificationElementContentTextFrame>
                </ProcessSpecificationElementContentComponent>
              </ProcessSpecificationElementComponent>
              {/*  */}
            </ProcessSpecificationElementFrame>
            {/*  */}
          </ProcessSpecificationComponent>
        ) : null
      ) : null}
    </ProcessSpecificationTypeComponent>
  );
});

export default ProcessDeliverySpecification;
