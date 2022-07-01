/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import {
  ProcessLogTypeComponent,
  ProcessLogComponent,
  /*  */
  /* ProcessLogElementFrame,
  ProcessLogElementComponent,
  ProcessLogElementTitleComponent,
  ProcessLogElementTitleTextFrame,
  ProcessLogElementTitleTextComponent,
  ProcessLogElementContentComponent,
  ProcessLogElementContentTextFrame,
  ProcessLogElementContentTextComponent, */
  /*  */
} from 'styles/components/process/ProcessLog';
/* 컨텐츠 */
import { StaticBoardContentFrame } from 'styles/components/common/Frame';
/*  */
/* 레코드 */
import {
  /* 내용 */
  RecordFrame,
  RecordComponent,
  /* 카테고리 */
  CategoryFrame,
  CategoryComponent,
  CategoryElementFrame,
  CategoryElementComponent,
  CategoryElementTitleFrame,
  CategoryElementTitleComponent,
  CategoryElementTitleTextComponent,
  /* 데이터 */
  DataFrame,
  DataComponent,
  DataElementFrame,
  DataElementComponent,
  DataElementContentFrame,
  DataElementContentComponent,
  DataElementContentTextComponent,
  DataElementContentButtonComponent,
  /* 네비게이션 */
  /* NavigationFrame,
  NavigationComponent,  
  NavigationButtonFrame,
  NavigationPluralParagraphButtonComponent,
  NavigationSingularParagraphButtonComponent,
  NavigationPageButtonComponent,
  NavigationPageEmptyComponent,
  NavigationTextComponent, */
} from 'styles/components/common/Record';
/*  */

import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertDate } from 'libraries/conversion/ConvertDate';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';

const ProcessTreatmentLog = observer(() => {
  const { TreatmentData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 카테고리 */
  const CategoryList = [
    { title: '분류', width: 90 },
    { title: '상태', width: 120 },
    { title: '처방전 유무', width: 80 },
    { title: '처방전 변경 여부', width: 105 },
    { title: '기타 서류 개수', width: 95 },
    { title: '대체 조제 사전 동의 여부', width: 145 },
    { title: '결제 금액', width: 90 },
    { title: '처리자 이름', width: 120 },
    { title: '생성 일시', width: 140 },
  ];

  return (
    <ProcessLogTypeComponent>
      {/*  */}
      <ProcessLogComponent width="100%" height="100%">
        {/*  */}
        <StaticBoardContentFrame>
          {/* 내용 */}
          <RecordFrame>
            <RecordComponent>
              {/* 카테고리 */}
              <CategoryFrame>
                <CategoryComponent>
                  {/*  */}
                  {CategoryList.map(element => (
                    <CategoryElementFrame
                      key={element?.title}
                      minWidth={`${element?.width}px`}
                      width={`${element?.width}%`}
                    >
                      <CategoryElementComponent flexDirection="row">
                        <CategoryElementTitleFrame>
                          <CategoryElementTitleComponent justifyContent="center">
                            <CategoryElementTitleTextComponent>
                              {element?.title || '-'}
                            </CategoryElementTitleTextComponent>
                          </CategoryElementTitleComponent>
                        </CategoryElementTitleFrame>
                      </CategoryElementComponent>
                    </CategoryElementFrame>
                  ))}
                  {/*  */}
                </CategoryComponent>
              </CategoryFrame>
              {/*  */}
              {/* 데이터 */}
              <DataFrame>
                <DataComponent>
                  {/*  */}
                  {TreatmentData.TreatmentHandlingHistoryListData?.historyList?.map(element => (
                    <DataElementFrame key={element?.handledDateTime}>
                      <DataElementComponent>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[0].width}px`}
                          width={`${CategoryList[0].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {element?.hanldingType || '-'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[1].width}px`}
                          width={`${CategoryList[1].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentButtonComponent
                              backgroundColor={
                                element?.status === '접수 대기'
                                  ? 'rgb(0,0,0)'
                                  : element?.status === '진료 대기'
                                  ? 'rgb(0,0,0)'
                                  : element?.status === '진료 중'
                                  ? 'rgb(0,0,0)'
                                  : element?.status === '결제 대기'
                                  ? 'rgb(0,0,0)'
                                  : element?.status === '처방 및 수납'
                                  ? 'rgb(0,0,0)'
                                  : element?.status === '결제 실패'
                                  ? 'rgb(192,0,0)'
                                  : element?.status === '완료'
                                  ? 'rgb(112,173,71)'
                                  : element?.status === '진료 취소'
                                  ? 'rgb(192,0,0)'
                                  : element?.status === '진료 거절'
                                  ? 'rgb(192,0,0)'
                                  : element?.status === '진료 시스템 취소'
                                  ? 'rgb(192,0,0)'
                                  : /*  */
                                  element?.status === '거절'
                                  ? 'rgb(192,0,0)'
                                  : element?.status === '취소'
                                  ? 'rgb(192,0,0)'
                                  : element?.status === '진료 완료'
                                  ? 'rgb(112,173,71)'
                                  : /*  */
                                    'transparent'
                              }
                              color={
                                element?.status === '접수 대기'
                                  ? '#ffffff'
                                  : element?.status === '진료 대기'
                                  ? '#ffffff'
                                  : element?.status === '진료 중'
                                  ? '#ffffff'
                                  : element?.status === '결제 대기'
                                  ? '#ffffff'
                                  : element?.status === '처방 및 수납'
                                  ? '#ffffff'
                                  : element?.status === '결제 실패'
                                  ? '#ffffff'
                                  : element?.status === '완료'
                                  ? '#ffffff'
                                  : element?.status === '진료 취소'
                                  ? '#ffffff'
                                  : element?.status === '진료 거절'
                                  ? '#ffffff'
                                  : element?.status === '진료 시스템 취소'
                                  ? '#ffffff'
                                  : /*  */
                                  element?.status === '거절'
                                  ? '#ffffff'
                                  : element?.status === '취소'
                                  ? '#ffffff'
                                  : element?.status === '진료 완료'
                                  ? '#ffffff'
                                  : /*  */
                                    '#000000'
                              }
                            >
                              {element?.status || '-'}
                            </DataElementContentButtonComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[2].width}px`}
                          width={`${CategoryList[2].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {!element?.hasPrescription ? '-' : 'O'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[3].width}px`}
                          width={`${CategoryList[3].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {!element?.isPrescriptionChanged ? '-' : 'O'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[4].width}px`}
                          width={`${CategoryList[4].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {element?.extraDocsCount ? `${element?.extraDocsCount}개` : '-'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[5].width}px`}
                          width={`${CategoryList[5].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {!element?.allowsGenericSubstitution ? '-' : 'O'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[6].width}px`}
                          width={`${CategoryList[6].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {element?.payAmount
                                ? `${ConvertCommaNumber(element?.payAmount.toString())}원`
                                : '-'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[7].width}px`}
                          width={`${CategoryList[7].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {element?.handledBy
                                ? element?.handledBy.indexOf('admin') !== -1
                                  ? `관리자${element?.handledBy.replace('admin', '')}`
                                  : element?.handledBy === 'patient'
                                  ? '환자'
                                  : element?.handledBy === 'hospital'
                                  ? '병원'
                                  : element?.handledBy === 'doctor'
                                  ? '의사'
                                  : element?.handledBy === 'pharmacy'
                                  ? '약국'
                                  : element?.handledBy === 'rider'
                                  ? '라이더'
                                  : element?.handledBy
                                : '-'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[8].width}px`}
                          width={`${CategoryList[8].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent>
                              {element?.handledDateTime
                                ? ConvertDate(element?.handledDateTime)
                                : '-'}
                            </DataElementContentTextComponent>
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                      </DataElementComponent>
                    </DataElementFrame>
                  ))}
                  {/*  */}
                </DataComponent>
              </DataFrame>
            </RecordComponent>
          </RecordFrame>
          {/* <NavigationFrame
            minWidth={`${CategoryList.map(element => element?.width).reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            )}px`}
          >
            <NavigationComponent>
              <NavigationButtonFrame>
                <NavigationPluralParagraphButtonComponent
                  backgroundColor="#14C276"
                  cursor="pointer"
                  onClick={() => {
                    TreatmentData.setParagraphNavigator(1);
                  }}
                >
                  <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
                </NavigationPluralParagraphButtonComponent>
                <NavigationSingularParagraphButtonComponent
                  backgroundColor="#14C276"
                  cursor="pointer"
                  onClick={() =>
                    TreatmentData.ParagraphNavigator > 1
                      ? TreatmentData.setParagraphNavigator(TreatmentData.ParagraphNavigator - 1)
                      : {}
                  }
                >
                  <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
                </NavigationSingularParagraphButtonComponent>
              </NavigationButtonFrame>
              <NavigationButtonFrame>
                {[...Array(10)].map((element, key) =>
                  (TreatmentData.ParagraphNavigator - 1) * 10 + key + 1 <=
                  (TreatmentData.TreatmentListData?.count &&
                  TreatmentData.TreatmentListData?.count.total
                    ? Math.floor((Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20) +
                      1
                    : 1) ? (
                    <NavigationPageButtonComponent
                      // eslint-disable-next-line react/no-array-index-key
                      key={key}
                      cursor="pointer"
                      backgroundColor={
                        (TreatmentData.ParagraphNavigator - 1) * 10 + key + 1 ===
                        TreatmentData.PageNavigator
                          ? '#3C9E3F'
                          : '#14C276'
                      }
                      onClick={() => {
                        TreatmentData.setPageNavigator(
                          (TreatmentData.ParagraphNavigator - 1) * 10 + key + 1
                        );
                      }}
                    >
                      <NavigationTextComponent
                        color={
                          (TreatmentData.ParagraphNavigator - 1) * 10 + key + 1 ===
                          TreatmentData.PageNavigator
                            ? '#ffffff'
                            : '#ffffff'
                        }
                      >
                        {(TreatmentData.ParagraphNavigator - 1) * 10 + key + 1 <=
                        (TreatmentData.TreatmentListData?.count &&
                        TreatmentData.TreatmentListData?.count.total
                          ? Math.floor(
                              (Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20
                            ) + 1
                          : 1)
                          ? (TreatmentData.ParagraphNavigator - 1) * 10 + key + 1
                          : ''}
                      </NavigationTextComponent>
                    </NavigationPageButtonComponent>
                  ) : (
                    // eslint-disable-next-line react/no-array-index-key
                    <NavigationPageEmptyComponent key={key} />
                  )
                )}
              </NavigationButtonFrame>
              <NavigationButtonFrame>
                <NavigationSingularParagraphButtonComponent
                  backgroundColor="#14C276"
                  cursor="pointer"
                  onClick={() =>
                    TreatmentData.TreatmentListData?.count &&
                    TreatmentData.TreatmentListData?.count.total
                      ? Math.ceil(
                          (Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20 / 10
                        ) > TreatmentData.ParagraphNavigator
                        ? TreatmentData.setParagraphNavigator(TreatmentData.ParagraphNavigator + 1)
                        : {}
                      : {}
                  }
                >
                  <NavigationTextComponent color="#ffffff">{'>'}</NavigationTextComponent>
                </NavigationSingularParagraphButtonComponent>
                <NavigationPluralParagraphButtonComponent
                  backgroundColor="#14C276"
                  cursor="pointer"
                  onClick={() => {
                    TreatmentData.setParagraphNavigator(
                      parseInt(
                        (
                          ((TreatmentData.TreatmentListData?.count &&
                          TreatmentData.TreatmentListData?.count.total
                            ? Math.floor(
                                (Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20
                              )
                            : 0) +
                            1 -
                            1) /
                            10 +
                          1
                        ).toString(),
                        10
                      )
                    );
                  }}
                >
                  <NavigationTextComponent color="#ffffff">{'>>'}</NavigationTextComponent>
                </NavigationPluralParagraphButtonComponent>
              </NavigationButtonFrame>              
            </NavigationComponent>
          </NavigationFrame> */}
        </StaticBoardContentFrame>
        {/*  */}
      </ProcessLogComponent>
      {/*  */}
    </ProcessLogTypeComponent>
  );
});

export default ProcessTreatmentLog;
