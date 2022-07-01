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

const ProcessTreatmentSpecification = observer(() => {
  const { TreatmentData } = useStore();

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
                    {TreatmentData?.TreatmentDetailsData?.hospital?.name || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.hospital?.phoneNum
                      ? AllowNumber(TreatmentData?.TreatmentDetailsData?.hospital?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(TreatmentData?.TreatmentDetailsData?.hospital?.phoneNum)
                          )
                        : TreatmentData?.TreatmentDetailsData?.hospital?.phoneNum
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
                    병원 대표자 휴대폰 번호
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
                    {TreatmentData?.TreatmentDetailsData?.hospital?.ownerPhoneNum
                      ? AllowNumber(TreatmentData?.TreatmentDetailsData?.hospital?.ownerPhoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(
                              TreatmentData?.TreatmentDetailsData?.hospital?.ownerPhoneNum
                            )
                          )
                        : TreatmentData?.TreatmentDetailsData?.hospital?.ownerPhoneNum
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
                    병원 팩스번호
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
                    {TreatmentData?.TreatmentDetailsData?.hospital?.faxNum
                      ? AllowNumber(TreatmentData?.TreatmentDetailsData?.hospital?.faxNum)
                        ? ConvertContactNumber(
                            AllowNumber(TreatmentData?.TreatmentDetailsData?.hospital?.faxNum)
                          )
                        : TreatmentData?.TreatmentDetailsData?.hospital?.faxNum
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
                    의사 정보
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
                    의사 이름
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
                    {TreatmentData?.TreatmentDetailsData?.doctor?.name || '-'}
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
                    의사 전화번호
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
                    {TreatmentData?.TreatmentDetailsData?.doctor?.phoneNum
                      ? AllowNumber(TreatmentData?.TreatmentDetailsData?.doctor?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(TreatmentData?.TreatmentDetailsData?.doctor?.phoneNum)
                          )
                        : TreatmentData?.TreatmentDetailsData?.doctor?.phoneNum
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
                    {TreatmentData?.TreatmentDetailsData?.patient?.applicantName || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.patient?.phoneNum
                      ? AllowNumber(TreatmentData?.TreatmentDetailsData?.patient?.phoneNum)
                        ? ConvertContactNumber(
                            AllowNumber(TreatmentData?.TreatmentDetailsData?.patient?.phoneNum)
                          )
                        : TreatmentData?.TreatmentDetailsData?.patient?.phoneNum
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
                    {TreatmentData?.TreatmentDetailsData?.patient?.name || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.patient?.relationType || '-'}
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
                    진료 정보
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
                    진료 번호
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
                    {TreatmentData?.TreatmentDetailsData?.treatCode || '-'}
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
                    진료 상태
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
                    {TreatmentData?.TreatmentDetailsData?.status || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.receptionCategory || '-'}
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
                    예상 대기 시간
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
                    {TreatmentData?.TreatmentDetailsData?.waitTime
                      ? `${TreatmentData?.TreatmentDetailsData?.waitTime}분`
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
                    증상
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
                    {TreatmentData?.TreatmentDetailsData?.patient?.symptom || '-'}
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
                    증상 사진
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
                    {TreatmentData?.TreatmentDetailsData?.symptomFilesCount
                      ? `${TreatmentData?.TreatmentDetailsData?.symptomFilesCount}개`
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
                    {TreatmentData?.TreatmentDetailsData?.waitReceptionDateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.waitReceptionDateTime)
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
                    진료 취소
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
                    {TreatmentData?.TreatmentDetailsData?.canceledInfo?.dateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.canceledInfo?.dateTime)
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
                    진료 대기
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
                    {TreatmentData?.TreatmentDetailsData?.waitTreatDateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.waitTreatDateTime)
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
                    진료 거절
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
                    {TreatmentData?.TreatmentDetailsData?.declinedInfo?.dateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.declinedInfo?.dateTime)
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
                    진료 중
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
                    {TreatmentData?.TreatmentDetailsData?.inTreatDateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.inTreatDateTime)
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
                    진료 거절 사유
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
                    {TreatmentData?.TreatmentDetailsData?.declinedInfo?.reason || '-'}
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
                    처방 및 수납
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
                    {TreatmentData?.TreatmentDetailsData?.prescriptionAndReceiptDateTime
                      ? ConvertDate(
                          TreatmentData?.TreatmentDetailsData?.prescriptionAndReceiptDateTime
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
                    진료 시스템 취소
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
                    {TreatmentData?.TreatmentDetailsData?.systemCanceledInfo?.dateTime
                      ? ConvertDate(
                          TreatmentData?.TreatmentDetailsData?.systemCanceledInfo?.dateTime
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
                    결제 대기
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
                    {TreatmentData?.TreatmentDetailsData?.waitToPayDateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.waitToPayDateTime)
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
                    {TreatmentData?.TreatmentDetailsData?.failedToPayInfo?.dateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.failedToPayInfo?.dateTime)
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
                    {TreatmentData?.TreatmentDetailsData?.completedDateTime
                      ? ConvertDate(TreatmentData?.TreatmentDetailsData?.completedDateTime)
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
                    {TreatmentData?.TreatmentDetailsData?.failedToPayInfo?.reason || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.payment?.cardName || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.payment?.payAmount
                      ? `${ConvertCommaNumber(
                          TreatmentData?.TreatmentDetailsData?.payment?.payAmount
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
                    조제 요청 여부
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
                    {!TreatmentData?.TreatmentDetailsData?.isMedicineRequested ? '-' : 'O'}
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
                    {!TreatmentData?.TreatmentDetailsData?.allowsGenericSubstitution ? '-' : 'O'}
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
                    {TreatmentData?.TreatmentDetailsData?.deliveryAddress?.jibunAddress || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.deliveryAddress?.roadAddress || '-'}
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
                    {TreatmentData?.TreatmentDetailsData?.deliveryAddress?.detailedAddress || '-'}
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

export default ProcessTreatmentSpecification;
