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

import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
import { AllowNumber } from 'libraries/constraint/AllowNumber';
/*  */
const BoardContent = observer(() => {
  const { DoctorData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '의사 코드', width: 120 },
    { title: '의사 이름', width: 90 },
    { title: '등록 상태', width: 110 },
    { title: '운영 상태', width: 110 },
    { title: '의사 전화번호', width: 120 },
    { title: '진료과', width: 200 },
    { title: '질환', width: 200 },
    { title: '소속 병원 이름', width: 90 },
    { title: '병원 운영 시간 (점심 시간)', width: 140 },
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
              {DoctorData.DoctorListData?.doctorList?.map(element => (
                <DataElementFrame key={element?.code}>
                  <DataElementComponent>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[0].width}px`}
                      width={`${CategoryList[0].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent color="blue" cursor="pointer">
                          {element?.code || '-'}
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
                          {element?.name || '-'}
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
                            element?.state === '진료 가능'
                              ? 'rgb(112,173,71)'
                              : element?.state === '방문 가능'
                              ? 'rgb(112,173,71)'
                              : element?.state === '점심 시간'
                              ? 'rgb(255, 192, 0)'
                              : element?.state === '진료 종료'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.state === '진료 가능'
                              ? '#ffffff'
                              : element?.state === '방문 가능'
                              ? '#ffffff'
                              : element?.state === '점심 시간'
                              ? '#ffffff'
                              : element?.state === '진료 종료'
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.state || '-'}
                        </DataElementContentButtonComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[3].width}px`}
                      width={`${CategoryList[3].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          backgroundColor={
                            element?.registerState === '활성'
                              ? 'rgb(112,173,71)'
                              : element?.registerState === '등록 대기'
                              ? 'rgb(255, 192, 0)'
                              : element?.registerState === '등록 반려'
                              ? 'rgb(192,0,0)'
                              : element?.registerState === '블라인드'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.registerState === '활성'
                              ? '#ffffff'
                              : element?.registerState === '등록 대기'
                              ? '#ffffff'
                              : element?.registerState === '등록 반려'
                              ? '#ffffff'
                              : element?.registerState === '블라인드'
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.registerState || '-'}
                        </DataElementContentButtonComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[4].width}px`}
                      width={`${CategoryList[4].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.phoneNum
                            ? AllowNumber(element?.phoneNum)
                              ? ConvertContactNumber(AllowNumber(element?.phoneNum))
                              : element?.phoneNum
                            : '-'}
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
                          {element?.departments && element?.departments.length !== 0
                            ? element?.departments.join(', ')
                            : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[6].width}px`}
                      width={`${CategoryList[6].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.diseases && element?.diseases.length !== 0
                            ? element?.diseases.join(', ')
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
                          {element?.hospital?.name || '-'}
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
                          {element?.openingTime?.startHour &&
                          element?.openingTime?.startMinute &&
                          element?.openingTime?.endHour &&
                          element?.openingTime?.endMinute
                            ? `${element?.openingTime?.startHour}:${element?.openingTime?.startMinute}~${element?.openingTime?.endHour}:${element?.openingTime?.endMinute}`
                            : '-'}
                          {element?.openingTime?.lunchStartHour &&
                          element?.openingTime?.lunchStartMinute &&
                          element?.openingTime?.lunchEndHour &&
                          element?.openingTime?.lunchEndMinute
                            ? ` (${element?.openingTime?.lunchStartHour}:${element?.openingTime?.lunchStartMinute}~${element?.openingTime?.lunchEndHour}:${element?.openingTime?.lunchEndMinute})`
                            : ''}
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
                /* DoctorData.setPageNavigator(1); */
                DoctorData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                DoctorData.ParagraphNavigator > 1
                  ? DoctorData.setParagraphNavigator(DoctorData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (DoctorData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (DoctorData.DoctorListData?.count && DoctorData.DoctorListData?.count.total
                ? Math.floor((Number(DoctorData.DoctorListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (DoctorData.ParagraphNavigator - 1) * 10 + key + 1 === DoctorData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    DoctorData.setPageNavigator((DoctorData.ParagraphNavigator - 1) * 10 + key + 1);
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (DoctorData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      DoctorData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(DoctorData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (DoctorData.DoctorListData?.count && DoctorData.DoctorListData?.count.total
                      ? Math.floor((Number(DoctorData.DoctorListData?.count.total) - 1) / 20) + 1
                      : 1)
                      ? (DoctorData.ParagraphNavigator - 1) * 10 + key + 1
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
                DoctorData.DoctorListData?.count && DoctorData.DoctorListData?.count.total
                  ? Math.ceil((Number(DoctorData.DoctorListData?.count.total) - 1) / 20 / 10) >
                    DoctorData.ParagraphNavigator
                    ? DoctorData.setParagraphNavigator(DoctorData.ParagraphNavigator + 1)
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
                /* DoctorData.setPageNavigator(
                  DoctorData.DoctorListData?.count &&
                    DoctorData.DoctorListData?.count.total
                    ? Math.floor((Number(DoctorData.DoctorListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                DoctorData.setParagraphNavigator(
                  parseInt(
                    (
                      ((DoctorData.DoctorListData?.count && DoctorData.DoctorListData?.count.total
                        ? Math.floor((Number(DoctorData.DoctorListData?.count.total) - 1) / 20)
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
