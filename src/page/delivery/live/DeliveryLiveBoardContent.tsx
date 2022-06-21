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
  DataElementContentExtraButtonComponent,
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
import { GetTimeCost } from 'libraries/time/GetTimeCost';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { DeliveryElementDataType } from 'data/stores/DeliveryData';
/*  */
const BoardContent = observer(() => {
  const { CommonData, DeliveryData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '방문/배달 코드', width: 120 },
    { title: '방문/배달 상태', width: 110 },
    { title: '전체 소요 시간', width: 90 },
    { title: '배송 업체 이름', width: 90 },
    { title: '약국 이름', width: 90 },
    { title: '회원 이름', width: 90 },
    { title: '환자 이름', width: 90 },
    { title: '회원 전화번호', width: 120 },
    { title: '배달 주소', width: 260 },
    { title: '배달 생성 시각 / 픽업 소요 시간', width: 160 },
    { title: '픽업 완료 시각 / 배달 소요 시간', width: 160 },
    { title: '방문/배달 완료 시각', width: 140 },
  ];

  const onClickProcessPopUp = (props: any) => {
    const { element } = props;
    AdminData.setProcessPopUpData(element);

    AdminData.setProcessPopUpStep('TREATMENT');
    AdminData.setProcessPopUpType('SPECIFICATION');
    AdminData.setProcessPopUpCode((element as DeliveryElementDataType).deliveryCode);

    AdminData.setProcessPopUpFlag(true);
  };

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
              {DeliveryData.DeliveryListData?.deliveryList?.map(element => (
                <DataElementFrame key={element?.deliveryCode}>
                  <DataElementComponent>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[0].width}px`}
                      width={`${CategoryList[0].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          color="blue"
                          cursor="pointer"
                          onClick={() => onClickProcessPopUp({ element })}
                        >
                          {element?.deliveryCode || '-'}
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
                            element?.status === '방문 대기'
                              ? 'rgb(255,64,64)'
                              : element?.status === '조제 대기'
                              ? 'rgb(255,64,64)'
                              : element?.status === '접수 대기'
                              ? 'rgb(255,64,64)'
                              : element?.status === '배차 대기'
                              ? 'rgb(255,192,0)'
                              : element?.status === '배차 완료'
                              ? 'rgb(0,0,0)'
                              : element?.status === '픽업 완료'
                              ? 'rgb(237,125,49)'
                              : element?.status === '완료'
                              ? 'rgb(112,173,71)'
                              : element?.status === '취소'
                              ? 'rgb(255,64,64)'
                              : /*  */
                              element?.status === '배달 완료'
                              ? 'rgb(112,173,71)'
                              : element?.status === '배달 취소'
                              ? 'rgb(255,64,64)'
                              : element?.status === '배달 거절'
                              ? 'rgb(255,64,64)'
                              : element?.status === '거절'
                              ? 'rgb(255,64,64)'
                              : /*  */
                                'transparent'
                          }
                          color={
                            element?.status === '방문 대기'
                              ? '#ffffff'
                              : element?.status === '조제 대기'
                              ? '#ffffff'
                              : element?.status === '접수 대기'
                              ? '#ffffff'
                              : element?.status === '배차 대기'
                              ? '#ffffff'
                              : element?.status === '배차 완료'
                              ? '#ffffff'
                              : element?.status === '픽업 완료'
                              ? '#ffffff'
                              : element?.status === '완료'
                              ? '#ffffff'
                              : element?.status === '취소'
                              ? '#ffffff'
                              : /*  */
                              element?.status === '배달 완료'
                              ? '#ffffff'
                              : element?.status === '배달 취소'
                              ? '#ffffff'
                              : element?.status === '배달 거절'
                              ? '#ffffff'
                              : element?.status === '거절'
                              ? '#ffffff'
                              : /*  */
                                '#000000'
                          }
                        >
                          {element?.status || '-'}
                        </DataElementContentButtonComponent>
                        {element?.isExtraDelivery ? (
                          <DataElementContentExtraButtonComponent
                            backgroundColor="rgb(255,64,64)"
                            color="#ffffff"
                            minWidth="25px"
                            width="25px"
                            minHeight="25px"
                            height="25px"
                          >
                            추
                          </DataElementContentExtraButtonComponent>
                        ) : null}
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[2].width}px`}
                      width={`${CategoryList[2].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.requestedDateTime
                            ? `${ConvertCommaNumber(
                                GetTimeCost({
                                  prev: element?.requestedDateTime,
                                  next: element?.endDateTime,
                                  temp: CommonData.CurrentTime,
                                })
                              )}분`
                            : '-'}
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
                          {element?.rider?.name || '-'}
                        </DataElementContentTextComponent>
                        {element?.hasNotificationToCheck ? (
                          <DataElementContentExtraButtonComponent
                            backgroundColor="rgb(255,64,64)"
                            color="#ffffff"
                            minWidth="25px"
                            width="25px"
                            minHeight="25px"
                            height="25px"
                          >
                            !
                          </DataElementContentExtraButtonComponent>
                        ) : null}
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[4].width}px`}
                      width={`${CategoryList[4].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
                          {element?.pharmacy?.name || '-'}
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
                          {element?.patient?.applicantName || '-'}
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
                          {element?.patient?.name || '-'}
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
                          {element?.patient?.phoneNum
                            ? AllowNumber(element?.patient?.phoneNum)
                              ? ConvertContactNumber(AllowNumber(element?.patient?.phoneNum))
                              : element?.patient?.phoneNum
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
                          {element?.address || '-'}
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
                          {element?.requestedDateTime
                            ? `${ConvertDate(element?.requestedDateTime)}/${ConvertCommaNumber(
                                GetTimeCost({
                                  prev: element?.requestedDateTime,
                                  next: element?.pickUpDateTime,
                                  temp: CommonData.CurrentTime,
                                })
                              )}분`
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
                        <DataElementContentTextComponent>
                          {element?.pickUpDateTime
                            ? `${ConvertDate(element?.pickUpDateTime)}/${ConvertCommaNumber(
                                GetTimeCost({
                                  prev: element?.pickUpDateTime,
                                  next: element?.endDateTime,
                                  temp: CommonData.CurrentTime,
                                })
                              )}분`
                            : '-'}
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
                          {element?.endDateTime ? ConvertDate(element?.endDateTime) : '-'}
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
                /* DeliveryData.setPageNavigator(1); */
                DeliveryData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                DeliveryData.ParagraphNavigator > 1
                  ? DeliveryData.setParagraphNavigator(DeliveryData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (DeliveryData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (DeliveryData.DeliveryListData?.count && DeliveryData.DeliveryListData?.count.total
                ? Math.floor((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (DeliveryData.ParagraphNavigator - 1) * 10 + key + 1 ===
                    DeliveryData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    DeliveryData.setPageNavigator(
                      (DeliveryData.ParagraphNavigator - 1) * 10 + key + 1
                    );
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (DeliveryData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      DeliveryData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(DeliveryData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (DeliveryData.DeliveryListData?.count &&
                    DeliveryData.DeliveryListData?.count.total
                      ? Math.floor((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20) +
                        1
                      : 1)
                      ? (DeliveryData.ParagraphNavigator - 1) * 10 + key + 1
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
                DeliveryData.DeliveryListData?.count && DeliveryData.DeliveryListData?.count.total
                  ? Math.ceil((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20 / 10) >
                    DeliveryData.ParagraphNavigator
                    ? DeliveryData.setParagraphNavigator(DeliveryData.ParagraphNavigator + 1)
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
                /* DeliveryData.setPageNavigator(
                  DeliveryData.DeliveryListData?.count &&
                    DeliveryData.DeliveryListData?.count.total
                    ? Math.floor((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                DeliveryData.setParagraphNavigator(
                  parseInt(
                    (
                      ((DeliveryData.DeliveryListData?.count &&
                      DeliveryData.DeliveryListData?.count.total
                        ? Math.floor((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20)
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
