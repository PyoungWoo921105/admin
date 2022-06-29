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
          {/*  */}
          <ProcessControlElementComponent
            border="none"
            backgroundColor={
              TreatmentData.TreatmentDetailsData?.status === '결제 대기' ||
              TreatmentData.TreatmentDetailsData?.status === '결제 실패' ||
              TreatmentData.TreatmentDetailsData?.status === '완료' ||
              /*  */
              TreatmentData.TreatmentDetailsData?.status === '진료 완료'
                ? 'rgb(0,178,100)'
                : '#d3d3d3'
            }
            cursor={
              TreatmentData.TreatmentDetailsData?.status === '결제 대기' ||
              TreatmentData.TreatmentDetailsData?.status === '결제 실패' ||
              TreatmentData.TreatmentDetailsData?.status === '완료' ||
              /*  */
              TreatmentData.TreatmentDetailsData?.status === '진료 완료'
                ? 'pointer'
                : ''
            }
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent
                  color={
                    TreatmentData.TreatmentDetailsData?.status === '결제 대기' ||
                    TreatmentData.TreatmentDetailsData?.status === '결제 실패' ||
                    TreatmentData.TreatmentDetailsData?.status === '완료' ||
                    /*  */
                    TreatmentData.TreatmentDetailsData?.status === '진료 완료'
                      ? '#ffffff'
                      : '#000000'
                  }
                >
                  처방전 및 기타 서류 관리
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          {/*  */}
        </ProcessControlComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'MEDICINE' ? (
        <ProcessControlComponent width="230px" height="200px">
          {/*  */}
          <ProcessControlElementComponent
            border="none"
            backgroundColor={
              MedicineData.MedicineDetailsData?.status === '조제 거절' ||
              MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
              /*  */
              MedicineData.MedicineDetailsData?.status === '거절'
                ? 'rgb(0,178,100)'
                : '#d3d3d3'
            }
            cursor={
              MedicineData.MedicineDetailsData?.status === '조제 거절' ||
              MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
              /*  */
              MedicineData.MedicineDetailsData?.status === '거절'
                ? 'pointer'
                : ''
            }
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent
                  color={
                    MedicineData.MedicineDetailsData?.status === '조제 거절' ||
                    MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
                    /*  */
                    MedicineData.MedicineDetailsData?.status === '거절'
                      ? '#ffffff'
                      : '#000000'
                  }
                >
                  약국 강제 접수
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          <ProcessControlElementComponent
            border="none"
            backgroundColor={
              MedicineData.MedicineDetailsData?.status === '접수 대기' ||
              MedicineData.MedicineDetailsData?.status === '조제 중' ||
              MedicineData.MedicineDetailsData?.status === '결제 실패' ||
              MedicineData.MedicineDetailsData?.status === '조제 거절' ||
              MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
              MedicineData.MedicineDetailsData?.status === '완료' ||
              /*  */
              MedicineData.MedicineDetailsData?.status === '거절' ||
              MedicineData.MedicineDetailsData?.status === '취소' ||
              MedicineData.MedicineDetailsData?.status === '조제 완료' ||
              MedicineData.MedicineDetailsData?.status === '조제 취소' ||
              MedicineData.MedicineDetailsData?.status === '방문 대기' ||
              MedicineData.MedicineDetailsData?.status === '배차 대기' ||
              MedicineData.MedicineDetailsData?.status === '배차 완료' ||
              MedicineData.MedicineDetailsData?.status === '픽업 완료'
                ? 'rgb(0,178,100)'
                : '#d3d3d3'
            }
            cursor={
              MedicineData.MedicineDetailsData?.status === '접수 대기' ||
              MedicineData.MedicineDetailsData?.status === '조제 중' ||
              MedicineData.MedicineDetailsData?.status === '결제 실패' ||
              MedicineData.MedicineDetailsData?.status === '조제 거절' ||
              MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
              MedicineData.MedicineDetailsData?.status === '완료' ||
              /*  */
              MedicineData.MedicineDetailsData?.status === '거절' ||
              MedicineData.MedicineDetailsData?.status === '취소' ||
              MedicineData.MedicineDetailsData?.status === '조제 완료' ||
              MedicineData.MedicineDetailsData?.status === '조제 취소' ||
              MedicineData.MedicineDetailsData?.status === '방문 대기' ||
              MedicineData.MedicineDetailsData?.status === '배차 대기' ||
              MedicineData.MedicineDetailsData?.status === '배차 완료' ||
              MedicineData.MedicineDetailsData?.status === '픽업 완료'
                ? 'pointer'
                : ''
            }
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent
                  color={
                    MedicineData.MedicineDetailsData?.status === '접수 대기' ||
                    MedicineData.MedicineDetailsData?.status === '조제 중' ||
                    MedicineData.MedicineDetailsData?.status === '결제 실패' ||
                    MedicineData.MedicineDetailsData?.status === '조제 거절' ||
                    MedicineData.MedicineDetailsData?.status === '조제 시스템 취소' ||
                    MedicineData.MedicineDetailsData?.status === '완료' ||
                    /*  */
                    MedicineData.MedicineDetailsData?.status === '거절' ||
                    MedicineData.MedicineDetailsData?.status === '취소' ||
                    MedicineData.MedicineDetailsData?.status === '조제 완료' ||
                    MedicineData.MedicineDetailsData?.status === '조제 취소' ||
                    MedicineData.MedicineDetailsData?.status === '방문 대기' ||
                    MedicineData.MedicineDetailsData?.status === '배차 대기' ||
                    MedicineData.MedicineDetailsData?.status === '배차 완료' ||
                    MedicineData.MedicineDetailsData?.status === '픽업 완료'
                      ? '#ffffff'
                      : '#000000'
                  }
                >
                  방문/배달 등록
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          <ProcessControlElementComponent
            border="none"
            backgroundColor={
              MedicineData.MedicineDetailsData?.status === '접수 대기' ||
              MedicineData.MedicineDetailsData?.status === '조제 중'
                ? 'rgb(0,178,100)'
                : '#d3d3d3'
            }
            cursor={
              MedicineData.MedicineDetailsData?.status === '접수 대기' ||
              MedicineData.MedicineDetailsData?.status === '조제 중'
                ? 'pointer'
                : ''
            }
          >
            <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
              <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                <ProcessControlElementTitleTextComponent
                  color={
                    MedicineData.MedicineDetailsData?.status === '접수 대기' ||
                    MedicineData.MedicineDetailsData?.status === '조제 중'
                      ? '#ffffff'
                      : '#000000'
                  }
                >
                  조제 시스템 취소
                </ProcessControlElementTitleTextComponent>
              </ProcessControlElementTitleTextFrame>
            </ProcessControlElementTitleComponent>
          </ProcessControlElementComponent>
          {/*  */}
        </ProcessControlComponent>
      ) : AdminData.ProcessPopUpData?.Step === 'DELIVERY' ? (
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '빠른 배달' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '오늘 배송' ||
        DeliveryData.DeliveryDetailsData?.deliveryInfo?.deliveryType === '택배' ? (
          <ProcessControlComponent width="230px" height="200px">
            <ProcessControlElementComponent
              border="none"
              backgroundColor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기'
                  ? 'rgb(0,178,100)'
                  : '#d3d3d3'
              }
              cursor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기'
                  ? 'pointer'
                  : ''
              }
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent
                    color={
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기'
                        ? '#ffffff'
                        : '#000000'
                    }
                  >
                    배차 요청
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent
              border="none"
              backgroundColor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)') ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '푸드테크') ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !== '푸드테크')
                  ? 'rgb(0,178,100)'
                  : '#d3d3d3'
              }
              cursor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)') ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '푸드테크') ||
                (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(이코노미)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(급송)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                    '카카오퀵(일반)' &&
                  DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !== '푸드테크')
                  ? 'pointer'
                  : ''
              }
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent
                    color={
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                      (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(이코노미)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(급송)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(일반)') ||
                      (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(이코노미)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(급송)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(일반)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '푸드테크') ||
                      (DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(이코노미)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(급송)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '카카오퀵(일반)' &&
                        DeliveryData?.DeliveryDetailsData?.deliveryInfo?.logiCompany?.name !==
                          '푸드테크')
                        ? '#ffffff'
                        : '#000000'
                    }
                  >
                    정보 수정
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent
              border="none"
              backgroundColor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '방문 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '완료' ||
                /*  */
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 거절' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '거절'
                  ? 'rgb(0,178,100)'
                  : '#d3d3d3'
              }
              cursor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '방문 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '완료' ||
                /*  */
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 완료' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 거절' ||
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '거절'
                  ? 'pointer'
                  : ''
              }
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent
                    color={
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '방문 대기' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '조제 대기' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '접수 대기' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 완료' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '픽업 완료' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '완료' ||
                      /*  */
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 완료' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배달 거절' ||
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '거절'
                        ? '#ffffff'
                        : '#000000'
                    }
                  >
                    상태 변경
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
            </ProcessControlElementComponent>
            <ProcessControlElementComponent
              border="none"
              backgroundColor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기'
                  ? 'rgb(0,178,100)'
                  : '#d3d3d3'
              }
              cursor={
                DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기'
                  ? 'pointer'
                  : ''
              }
            >
              <ProcessControlElementTitleComponent flexDirection="column" justifyContent="center">
                <ProcessControlElementTitleTextFrame height="20px" justifyContent="center">
                  <ProcessControlElementTitleTextComponent
                    color={
                      DeliveryData.DeliveryDetailsData?.deliveryInfo?.status === '배차 대기'
                        ? '#ffffff'
                        : '#000000'
                    }
                  >
                    배송 업체 취소
                  </ProcessControlElementTitleTextComponent>
                </ProcessControlElementTitleTextFrame>
              </ProcessControlElementTitleComponent>
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
                    정보 수정
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
                    상태 변경
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
            {/*  */}
          </ProcessControlComponent>
        ) : null
      ) : null}
    </ProcessControlFrame>
  );
});

export default ProcessControl;
