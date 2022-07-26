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

const ProcessDeliveryLog = observer(() => {
  const { DeliveryData, AdminData } = useStore();

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 카테고리 */
  const CategoryList = [
    { title: '분류', width: 90 },
    { title: '상태', width: 120 },
    { title: '배달 주소', width: 140 },
    { title: '배송 업체 이름', width: 120 },
    { title: '처리자 이름', width: 120 },
    { title: '상세 내용', width: 140 },
    { title: '일시', width: 140 },
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
                  {DeliveryData.DeliveryHandlingHistoryListData?.historyList?.map(element => (
                    <DataElementFrame key={element?.handledDateTime}>
                      <DataElementComponent
                        backgroundColor={
                          element?.hanldingType === '생성'
                            ? 'rgb(226,240,217)'
                            : element?.hanldingType === '상태 변경'
                            ? 'rgb(255,255,255)'
                            : element?.hanldingType === '라이더 변경'
                            ? 'rgb(222,235,247)'
                            : element?.hanldingType === '주소 변경'
                            ? 'rgb(252,242,204)'
                            : 'transparent'
                        }
                      >
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
                            >
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
                          </DataElementContentComponent>
                        </DataElementContentFrame>
                        {/*  */}
                        <DataElementContentFrame
                          minWidth={`${CategoryList[2].width}px`}
                          width={`${CategoryList[2].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent
                              lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                              overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                              textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                              whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                            >
                              {element?.address
                                ? element?.detailedAddress
                                  ? `${element?.address} ${element?.detailedAddress}`
                                  : element?.address
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
                            <DataElementContentTextComponent
                              lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                              overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                              textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                              whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                            >
                              {element?.riderName || '-'}
                            </DataElementContentTextComponent>
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
                            >
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
                          minWidth={`${CategoryList[5].width}px`}
                          width={`${CategoryList[5].width}%`}
                        >
                          <DataElementContentComponent justifyContent="center">
                            <DataElementContentTextComponent
                              lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                              overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                              textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                              whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                            >
                              {element?.reason || '-'}
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
                  (DeliveryData.DeliveryListData?.count &&
                  DeliveryData.DeliveryListData?.count.total
                    ? Math.floor((Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20) +
                      1
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
                          ? Math.floor(
                              (Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20
                            ) + 1
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
                    DeliveryData.DeliveryListData?.count &&
                    DeliveryData.DeliveryListData?.count.total
                      ? Math.ceil(
                          (Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20 / 10
                        ) > DeliveryData.ParagraphNavigator
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
                    DeliveryData.setParagraphNavigator(
                      parseInt(
                        (
                          ((DeliveryData.DeliveryListData?.count &&
                          DeliveryData.DeliveryListData?.count.total
                            ? Math.floor(
                                (Number(DeliveryData.DeliveryListData?.count.total) - 1) / 20
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

export default ProcessDeliveryLog;
