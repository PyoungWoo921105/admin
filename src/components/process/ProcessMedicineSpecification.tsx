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

const ProcessMedicineSpecification = observer(() => {
  const { MedicineData } = useStore();

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
                    {MedicineData?.MedicineDetailsData?.pharmacy?.name || '-'}
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
                    {MedicineData?.MedicineDetailsData?.pharmacy?.phoneNum
                      ? AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.phoneNum)
                          )
                        : MedicineData?.MedicineDetailsData?.pharmacy?.phoneNum
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
                    {MedicineData?.MedicineDetailsData?.pharmacy?.ownerPhoneNum
                      ? AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.ownerPhoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.ownerPhoneNum)
                          )
                        : MedicineData?.MedicineDetailsData?.pharmacy?.ownerPhoneNum
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
                    {MedicineData?.MedicineDetailsData?.pharmacy?.faxNum
                      ? AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.faxNum)
                        ? ConvertContactNumber(
                            AllowNumber(MedicineData?.MedicineDetailsData?.pharmacy?.faxNum)
                          )
                        : MedicineData?.MedicineDetailsData?.pharmacy?.faxNum
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
                    병원 정보
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
                    병원 이름
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
                    {MedicineData?.MedicineDetailsData?.hospital?.name || '-'}
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
                    병원 전화번호
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
                    {MedicineData?.MedicineDetailsData?.hospital?.phoneNum
                      ? AllowNumber(MedicineData?.MedicineDetailsData?.hospital?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(MedicineData?.MedicineDetailsData?.hospital?.phoneNum)
                          )
                        : MedicineData?.MedicineDetailsData?.hospital?.phoneNum
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
                    {MedicineData?.MedicineDetailsData?.patient?.applicantName || '-'}
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
                    {MedicineData?.MedicineDetailsData?.patient?.phoneNum
                      ? AllowNumber(MedicineData?.MedicineDetailsData?.patient?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(MedicineData?.MedicineDetailsData?.patient?.phoneNum)
                          )
                        : MedicineData?.MedicineDetailsData?.patient?.phoneNum
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
                    {MedicineData?.MedicineDetailsData?.patient?.name || '-'}
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
                    {MedicineData?.MedicineDetailsData?.patient?.relationType || '-'}
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
                    조제 정보
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
                    조제 번호
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
                    {MedicineData?.MedicineDetailsData?.medicineCode || '-'}
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
                    조제 상태
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
                    {MedicineData?.MedicineDetailsData?.status || '-'}
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
                    접수 항목
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
                    {MedicineData?.MedicineDetailsData?.receptionCategory || '-'}
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
                    {MedicineData?.MedicineDetailsData?.waitReceptionDateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.waitReceptionDateTime)
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
                    조제 취소
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
                    {MedicineData?.MedicineDetailsData?.canceledInfo?.dateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.canceledInfo?.dateTime)
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
                    조제 중
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
                    {MedicineData?.MedicineDetailsData?.inMakingDateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.inMakingDateTime)
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
                    조제 거절
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
                    {MedicineData?.MedicineDetailsData?.declinedInfo?.dateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.declinedInfo?.dateTime)
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
                    결제 완료
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
                    {MedicineData?.MedicineDetailsData?.payment?.payedDateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.payment?.payedDateTime)
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
                    조제 거절 사유
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
                    {MedicineData?.MedicineDetailsData?.declinedInfo?.reason || '-'}
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
                    완료
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
                    {MedicineData?.MedicineDetailsData?.completedDateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.completedDateTime)
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
                    조제 시스템 취소
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
                    {MedicineData?.MedicineDetailsData?.systemCanceledInfo?.dateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.systemCanceledInfo?.dateTime)
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
                    결제 카드
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
                    {MedicineData?.MedicineDetailsData?.payment?.cardName || '-'}
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
                    결제 실패
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
                    {MedicineData?.MedicineDetailsData?.failedToPayInfo?.dateTime
                      ? ConvertDate(MedicineData?.MedicineDetailsData?.failedToPayInfo?.dateTime)
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
                    결제 금액
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
                    {MedicineData?.MedicineDetailsData?.payment?.payAmount
                      ? `${ConvertCommaNumber(
                          MedicineData?.MedicineDetailsData?.payment?.payAmount
                        )}원`
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
                    결제 실패 사유
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
                    {MedicineData?.MedicineDetailsData?.failedToPayInfo?.reason || '-'}
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
                    약 수령 방법
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
                    {MedicineData?.MedicineDetailsData?.deliveryType
                      ? MedicineData?.MedicineDetailsData?.deliveryType
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
                    대체 조제 사전 동의 여부
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
                    {!MedicineData?.MedicineDetailsData?.allowsGenericSubstitution ? '-' : 'O'}
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
                    {MedicineData?.MedicineDetailsData?.deliveryAddress?.jibunAddress || '-'}
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
                    {MedicineData?.MedicineDetailsData?.deliveryAddress?.roadAddress || '-'}
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
                    {MedicineData?.MedicineDetailsData?.deliveryAddress?.detailedAddress || '-'}
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

export default ProcessMedicineSpecification;
