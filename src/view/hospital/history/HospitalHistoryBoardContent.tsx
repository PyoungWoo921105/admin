/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

/* 컨텐츠 */
import { DynamicBoardContentFrame } from 'styles/components/common/Frame';
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
  const { HospitalData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '병원 코드', width: 120 },
    { title: '병원 이름', width: 90 },
    { title: '등록 상태', width: 130 },
    { title: '운영 상태', width: 130 },
    { title: '병원 주소', width: 260 },
    { title: '병원 전화번호', width: 120 },
    { title: '병원 운영 시간 (점심 시간)', width: 140 },
    { title: '소속 의사 이름', width: 90 },
    { title: '연계 약국 이름', width: 90 },
    { title: '접수 대기 건', width: 90 },
  ];

  return (
    <DynamicBoardContentFrame>
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
              {HospitalData.HospitalListData?.hospitalList?.map(element => (
                <DataElementFrame key={element?.code}>
                  <DataElementComponent>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[0].width}px`}
                      width={`${CategoryList[0].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                          color="blue"
                          cursor="pointer"
                        >
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
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
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
                          minWidth="110px"
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
                          minWidth="110px"
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
                      minWidth={`${CategoryList[4].width}px`}
                      width={`${CategoryList[4].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                          color={element?.address ? '#00B264' : ''}
                          cursor={element?.address ? 'pointer' : ''}
                          onClick={() => navigator.clipboard.writeText(element?.address || '-')}
                        >
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
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                          color={element?.phoneNum ? '#00B264' : ''}
                          cursor={element?.phoneNum ? 'pointer' : ''}
                          onClick={() =>
                            navigator.clipboard.writeText(
                              element?.phoneNum
                                ? AllowNumber(element?.phoneNum)
                                  ? ConvertContactNumber(AllowNumber(element?.phoneNum))
                                  : element?.phoneNum
                                : '-'
                            )
                          }
                        >
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
                      minWidth={`${CategoryList[6].width}px`}
                      width={`${CategoryList[6].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
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
                      minWidth={`${CategoryList[7].width}px`}
                      width={`${CategoryList[7].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.doctorList && element?.doctorList.length !== 0
                            ? element?.doctorList.map(doctorName => doctorName?.name).join(', ')
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
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.pharmacyList && element?.pharmacyList.length !== 0
                            ? element?.pharmacyList
                                .map(pharmacyName => pharmacyName?.name)
                                .join(', ')
                            : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[9].width}px`}
                      width={`${CategoryList[9].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.waitReceptionCount
                            ? ConvertCommaNumber(element?.waitReceptionCount.toString())
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
                /* HospitalData.setPageNavigator(1); */
                HospitalData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                HospitalData.ParagraphNavigator > 1
                  ? HospitalData.setParagraphNavigator(HospitalData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (HospitalData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (HospitalData.HospitalListData?.count && HospitalData.HospitalListData?.count.total
                ? Math.floor((Number(HospitalData.HospitalListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (HospitalData.ParagraphNavigator - 1) * 10 + key + 1 ===
                    HospitalData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    HospitalData.setPageNavigator(
                      (HospitalData.ParagraphNavigator - 1) * 10 + key + 1
                    );
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (HospitalData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      HospitalData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(HospitalData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (HospitalData.HospitalListData?.count &&
                    HospitalData.HospitalListData?.count.total
                      ? Math.floor((Number(HospitalData.HospitalListData?.count.total) - 1) / 20) +
                        1
                      : 1)
                      ? (HospitalData.ParagraphNavigator - 1) * 10 + key + 1
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
                HospitalData.HospitalListData?.count && HospitalData.HospitalListData?.count.total
                  ? Math.ceil((Number(HospitalData.HospitalListData?.count.total) - 1) / 20 / 10) >
                    HospitalData.ParagraphNavigator
                    ? HospitalData.setParagraphNavigator(HospitalData.ParagraphNavigator + 1)
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
                /* HospitalData.setPageNavigator(
                  HospitalData.HospitalListData?.count &&
                    HospitalData.HospitalListData?.count.total
                    ? Math.floor((Number(HospitalData.HospitalListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                HospitalData.setParagraphNavigator(
                  parseInt(
                    (
                      ((HospitalData.HospitalListData?.count &&
                      HospitalData.HospitalListData?.count.total
                        ? Math.floor((Number(HospitalData.HospitalListData?.count.total) - 1) / 20)
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
    </DynamicBoardContentFrame>
  );
});

export default BoardContent;
