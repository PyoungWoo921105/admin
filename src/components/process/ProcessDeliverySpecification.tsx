/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessSpecificationFrame,
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

const ProcessDeliverySpecification = observer(() => {
  const { DeliveryData, CommonData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProcessSpecificationFrame>
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
                    약국 정보
                  </ProcessSpecificationElementTitleTextComponent>
                </ProcessSpecificationElementTitleTextFrame>
              </ProcessSpecificationElementTitleComponent>
            </ProcessSpecificationElementComponent>
          </ProcessSpecificationElementFrame>
          {/*  */}
          <ProcessSpecificationElementFrame width="100%" border="none">
            {/*  */}
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    약국 이름
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    약국 전화번호
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    약국 대표자 휴대폰 번호
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
                              DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy
                                ?.ownerPhoneNum
                            )
                          )
                        : DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.ownerPhoneNum
                      : '-'}
                  </ProcessSpecificationElementContentTextComponent>
                </ProcessSpecificationElementContentTextFrame>
              </ProcessSpecificationElementContentComponent>
            </ProcessSpecificationElementComponent>
            {/*  */}
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    약국 팩스번호
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
                      ? AllowNumber(
                          DeliveryData?.DeliveryDetailsData?.medicineInfo?.pharmacy?.faxNum
                        )
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
                    회원 정보
                  </ProcessSpecificationElementTitleTextComponent>
                </ProcessSpecificationElementTitleTextFrame>
              </ProcessSpecificationElementTitleComponent>
            </ProcessSpecificationElementComponent>
          </ProcessSpecificationElementFrame>
          {/*  */}
          <ProcessSpecificationElementFrame width="100%" border="none">
            {/*  */}
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    회원 이름
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    회원 전화번호
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    환자 이름
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    대리 접수 관계
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
                    배달 정보
                  </ProcessSpecificationElementTitleTextComponent>
                </ProcessSpecificationElementTitleTextFrame>
              </ProcessSpecificationElementTitleComponent>
            </ProcessSpecificationElementComponent>
          </ProcessSpecificationElementFrame>
          {/*  */}
          <ProcessSpecificationElementFrame width="100%" border="none">
            {/*  */}
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 번호
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 상태
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    전달 방법
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 거리
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배송 업체 이름
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    라이더 이름
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    라이더 전화번호
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    접수 대기
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    전체 소요 시간
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
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.requestedDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo?.endDateTime,
                            alt: [
                              DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            ],
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배차 대기
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배차 소요 시간
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
                            prev: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.requestedDateTime,
                            next: DeliveryData?.DeliveryDetailsData?.deliveryInfo
                              ?.allocCompletedDateTime,
                            alt: [
                              DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            ],
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배차 완료
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    픽업 소요 시간
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
                            alt: [
                              DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            ],
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    픽업 완료
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 소요 시간
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
                            alt: [
                              DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime,
                            ],
                            curr: CommonData.CurrentTime,
                          }).toString()
                        )}분`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 완료
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 취소
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
                      ? ConvertDate(
                          DeliveryData?.DeliveryDetailsData?.deliveryInfo?.canceledDateTime
                        )
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    추가 배달 귀책 대상
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
                        ? '메듭'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                          'patient'
                        ? '환자'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                          'hospital'
                        ? '병원'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                          'doctor'
                        ? '의사'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy ===
                          'pharmacy'
                        ? '약국'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy === 'rider'
                        ? '라이더'
                        : DeliveryData?.DeliveryDetailsData?.deliveryInfo?.addDeliveryBy
                      : '-'}
                  </ProcessSpecificationElementContentTextComponent>
                </ProcessSpecificationElementContentTextFrame>
              </ProcessSpecificationElementContentComponent>
            </ProcessSpecificationElementComponent>
            {/*  */}
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    3PL 배달비
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
                          DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiAddFee
                        )}원`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    추가 배달 귀책 사유
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    고객 지불 배달비
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
                        )}원`
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    배달 메모
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    시/도
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    시/군/구
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    지번 주소
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    도로명 주소
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
            <ProcessSpecificationElementComponent border="1px solid #14c276" width="100%">
              <ProcessSpecificationElementTitleComponent
                flexDirection="column"
                justifyContent="center"
                minWidth="150px"
                backgroundColor="#14c276"
              >
                <ProcessSpecificationElementTitleTextFrame>
                  <ProcessSpecificationElementTitleTextComponent color="#FFFFFF">
                    상세 주소
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
                    {DeliveryData?.DeliveryDetailsData?.deliveryInfo?.address?.detailedAddress ||
                      '-'}
                  </ProcessSpecificationElementContentTextComponent>
                </ProcessSpecificationElementContentTextFrame>
              </ProcessSpecificationElementContentComponent>
            </ProcessSpecificationElementComponent>
            {/*  */}
          </ProcessSpecificationElementFrame>
          {/*  */}
        </ProcessSpecificationComponent>
        {/*  */}
      </ProcessSpecificationTypeComponent>
    </ProcessSpecificationFrame>
  );
});

export default ProcessDeliverySpecification;
