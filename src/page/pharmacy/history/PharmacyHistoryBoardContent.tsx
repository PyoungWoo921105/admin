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

import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
import { AllowNumber } from 'libraries/constraint/AllowNumber';
/*  */
const BoardContent = observer(() => {
  const { PharmacyData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '약국 번호', width: 120 },
    { title: '약국 이름', width: 90 },
    { title: '등록 상태', width: 110 },
    { title: '운영 상태', width: 110 },
    { title: '약국 주소', width: 260 },
    { title: '약국 전화번호', width: 120 },
    { title: '연계 병원 이름', width: 90 },
    { title: '연계 병원 운영 상태', width: 110 },
    { title: '약국 운영 시간 (점심 시간)', width: 140 },
    { title: '접수 대기 건', width: 90 },
    { title: '스티커/봉투', width: 90 },
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
              {PharmacyData.PharmacyListData?.pharmacyList?.map(element => (
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
                      minWidth={`${CategoryList[3].width}px`}
                      width={`${CategoryList[3].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          backgroundColor={
                            element?.state === '조제 가능'
                              ? 'rgb(112,173,71)'
                              : element?.state === '일시 중단'
                              ? 'rgb(255, 192, 0)'
                              : element?.state === '조제 종료'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.state === '조제 가능'
                              ? '#ffffff'
                              : element?.state === '일시 중단'
                              ? '#ffffff'
                              : element?.state === '조제 종료'
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
                      minWidth={`${CategoryList[4].width}px`}
                      width={`${CategoryList[4].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.address || '-'}
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
                          {element?.phoneNum
                            ? ConvertContactNumber(AllowNumber(element?.phoneNum))
                            : '-'}
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
                          {element?.hospitalList && element?.hospitalList.length !== 0
                            ? element?.hospitalList
                                .map(hospitalName => hospitalName?.name)
                                .join(', ')
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
                        <DataElementContentButtonComponent
                          backgroundColor={
                            element?.hospitalState === '진료 가능'
                              ? 'rgb(112,173,71)'
                              : element?.hospitalState === '방문 가능'
                              ? 'rgb(112,173,71)'
                              : element?.hospitalState === '점심 시간'
                              ? 'rgb(255, 192, 0)'
                              : element?.hospitalState === '진료 종료'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.hospitalState === '진료 가능'
                              ? '#ffffff'
                              : element?.hospitalState === '방문 가능'
                              ? '#ffffff'
                              : element?.hospitalState === '점심 시간'
                              ? '#ffffff'
                              : element?.hospitalState === '진료 종료'
                              ? 'rgb(192,0,0)'
                              : '#000000'
                          }
                        >
                          {element?.hospitalState || '-'}
                        </DataElementContentButtonComponent>
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
                    <DataElementContentFrame
                      minWidth={`${CategoryList[9].width}px`}
                      width={`${CategoryList[9].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.waitReceptionCount
                            ? ConvertCommaNumber(element?.waitReceptionCount.toString())
                            : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[10].width}px`}
                      width={`${CategoryList[10].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          backgroundColor={
                            element?.numMedicineBags > 50 && element?.numStickers > 50
                              ? 'rgb(112,173,71)'
                              : element?.numMedicineBags <= 50 || element?.numStickers <= 50
                              ? 'rgb(192,0,0)'
                              : '#000000'
                          }
                          color="#ffffff"
                        >
                          {element?.numMedicineBags > 50 && element?.numStickers > 50
                            ? '충분'
                            : element?.numMedicineBags <= 50 || element?.numStickers <= 50
                            ? '부족'
                            : '-'}
                        </DataElementContentButtonComponent>
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
                /* PharmacyData.setPageNavigator(1); */
                PharmacyData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                PharmacyData.ParagraphNavigator > 1
                  ? PharmacyData.setParagraphNavigator(PharmacyData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (PharmacyData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (PharmacyData.PharmacyListData?.count && PharmacyData.PharmacyListData?.count.total
                ? Math.floor((Number(PharmacyData.PharmacyListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (PharmacyData.ParagraphNavigator - 1) * 10 + key + 1 ===
                    PharmacyData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    PharmacyData.setPageNavigator(
                      (PharmacyData.ParagraphNavigator - 1) * 10 + key + 1
                    );
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (PharmacyData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      PharmacyData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(PharmacyData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (PharmacyData.PharmacyListData?.count &&
                    PharmacyData.PharmacyListData?.count.total
                      ? Math.floor((Number(PharmacyData.PharmacyListData?.count.total) - 1) / 20) +
                        1
                      : 1)
                      ? (PharmacyData.ParagraphNavigator - 1) * 10 + key + 1
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
                PharmacyData.PharmacyListData?.count && PharmacyData.PharmacyListData?.count.total
                  ? Math.ceil((Number(PharmacyData.PharmacyListData?.count.total) - 1) / 20 / 10) >
                    PharmacyData.ParagraphNavigator
                    ? PharmacyData.setParagraphNavigator(PharmacyData.ParagraphNavigator + 1)
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
                /* PharmacyData.setPageNavigator(
                  PharmacyData.PharmacyListData?.count &&
                    PharmacyData.PharmacyListData?.count.total
                    ? Math.floor((Number(PharmacyData.PharmacyListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                PharmacyData.setParagraphNavigator(
                  parseInt(
                    (
                      ((PharmacyData.PharmacyListData?.count &&
                      PharmacyData.PharmacyListData?.count.total
                        ? Math.floor((Number(PharmacyData.PharmacyListData?.count.total) - 1) / 20)
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
