/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

/* 컨텐츠 */
import { BoardContentFrame } from 'styles/components/common/Frame';
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
  NavigationFrame,
  NavigationComponent,
  /*  */
  NavigationButtonFrame,
  NavigationPluralParagraphButtonComponent,
  NavigationSingularParagraphButtonComponent,
  NavigationPageButtonComponent,
  NavigationPageEmptyComponent,
  NavigationTextComponent,
} from 'styles/components/common/Record';
/*  */

import { ConvertDate } from 'libraries/conversion/ConvertDate';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardContent = observer(() => {
  const { MedicineData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '조제 코드', width: 120 },
    { title: '생성 일시', width: 140 },
    { title: '조제 상태', width: 110 },
    { title: '약국 이름', width: 90 },
    { title: '병원 이름', width: 90 },
    { title: '의사 이름', width: 90 },
    { title: '회원 이름', width: 90 },
    { title: '환자 이름', width: 90 },
    { title: '접수 항목', width: 110 },
    { title: '결제 금액', width: 90 },
    { title: '약 수령 방법', width: 90 },
    { title: '방문/배달 코드', width: 120 },
  ];

  return (
    <BoardContentFrame>
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
              {MedicineData.MedicineListData?.medicineList?.map(element => (
                <DataElementFrame key={element?.medicineCode}>
                  <DataElementComponent>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[0].width}px`}
                      width={`${CategoryList[0].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent color="blue" cursor="pointer">
                          {element?.medicineCode || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[1].width}px`}
                      width={`${CategoryList[1].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.requestedDateTime
                            ? ConvertDate(element?.requestedDateTime)
                            : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[2].width}px`}
                      width={`${CategoryList[2].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          backgroundColor={
                            element?.status === '접수 대기'
                              ? 'rgb(0,0,0)'
                              : element?.status === '조제 중'
                              ? 'rgb(0,0,0)'
                              : element?.status === '결제 실패'
                              ? 'rgb(192,0,0)'
                              : element?.status === '조제 거절'
                              ? 'rgb(192,0,0)'
                              : element?.status === '조제 시스템 취소'
                              ? 'rgb(192,0,0)'
                              : element?.status === '완료'
                              ? 'rgb(112,173,71)'
                              : /*  */
                              element?.status === '거절'
                              ? 'rgb(192,0,0)'
                              : element?.status === '취소'
                              ? 'rgb(192,0,0)'
                              : element?.status === '조제 완료'
                              ? 'rgb(112,173,71)'
                              : element?.status === '조제 취소'
                              ? 'rgb(192,0,0)'
                              : element?.status === '방문 대기'
                              ? '#000000'
                              : element?.status === '배차 대기'
                              ? '#000000'
                              : element?.status === '배차 완료'
                              ? '#000000'
                              : element?.status === '픽업 완료'
                              ? '#000000'
                              : /*  */
                                'transparent'
                          }
                          color={
                            element?.status === '접수 대기'
                              ? '#ffffff'
                              : element?.status === '조제 중'
                              ? '#ffffff'
                              : element?.status === '결제 실패'
                              ? '#ffffff'
                              : element?.status === '조제 거절'
                              ? '#ffffff'
                              : element?.status === '조제 시스템 취소'
                              ? '#ffffff'
                              : element?.status === '완료'
                              ? '#ffffff'
                              : /*  */
                              element?.status === '거절'
                              ? '#ffffff'
                              : element?.status === '취소'
                              ? '#ffffff'
                              : element?.status === '조제 완료'
                              ? '#ffffff'
                              : element?.status === '조제 취소'
                              ? '#ffffff'
                              : element?.status === '방문 대기'
                              ? '#000000'
                              : element?.status === '배차 대기'
                              ? '#000000'
                              : element?.status === '배차 완료'
                              ? '#000000'
                              : element?.status === '픽업 완료'
                              ? '#000000'
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
                      minWidth={`${CategoryList[3].width}px`}
                      width={`${CategoryList[3].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.pharmacy?.name || '-'}
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
                          {element?.hospital?.name || '-'}
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
                          {element?.doctor?.name || '-'}
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
                          {element?.patient?.applicantName || '-'}
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
                          {element?.patient?.name || '-'}
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
                          {element?.receptionCategory || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[9].width}px`}
                      width={`${CategoryList[9].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.payAmount ? `${ConvertCommaNumber(element?.payAmount)}원` : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[10].width}px`}
                      width={`${CategoryList[10].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.medicineReceiveWay || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[11].width}px`}
                      width={`${CategoryList[11].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.deliveryList && element?.deliveryList.length !== 0
                            ? element?.deliveryList.map(deliveryCode => deliveryCode).join(', ')
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
      <NavigationFrame
        minWidth={`${CategoryList.map(element => element?.width).reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )}px`}
      >
        <NavigationComponent>
          {/*  */}
          <NavigationButtonFrame>
            <NavigationPluralParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() => {
                /* MedicineData.setPageNavigator(1); */
                MedicineData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                MedicineData.ParagraphNavigator > 1
                  ? MedicineData.setParagraphNavigator(MedicineData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (MedicineData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (MedicineData.MedicineListData?.count && MedicineData.MedicineListData?.count.total
                ? Math.floor((Number(MedicineData.MedicineListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (MedicineData.ParagraphNavigator - 1) * 10 + key + 1 ===
                    MedicineData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    MedicineData.setPageNavigator(
                      (MedicineData.ParagraphNavigator - 1) * 10 + key + 1
                    );
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (MedicineData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      MedicineData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(MedicineData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (MedicineData.MedicineListData?.count &&
                    MedicineData.MedicineListData?.count.total
                      ? Math.floor((Number(MedicineData.MedicineListData?.count.total) - 1) / 20) +
                        1
                      : 1)
                      ? (MedicineData.ParagraphNavigator - 1) * 10 + key + 1
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
                MedicineData.MedicineListData?.count && MedicineData.MedicineListData?.count.total
                  ? Math.ceil((Number(MedicineData.MedicineListData?.count.total) - 1) / 20 / 10) >
                    MedicineData.ParagraphNavigator
                    ? MedicineData.setParagraphNavigator(MedicineData.ParagraphNavigator + 1)
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
                /* MedicineData.setPageNavigator(
                  MedicineData.MedicineListData?.count &&
                    MedicineData.MedicineListData?.count.total
                    ? Math.floor((Number(MedicineData.MedicineListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                MedicineData.setParagraphNavigator(
                  parseInt(
                    (
                      ((MedicineData.MedicineListData?.count &&
                      MedicineData.MedicineListData?.count.total
                        ? Math.floor((Number(MedicineData.MedicineListData?.count.total) - 1) / 20)
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
          {/*  */}
        </NavigationComponent>
      </NavigationFrame>
    </BoardContentFrame>
  );
});

export default BoardContent;
