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
  CategoryElementContentFrame,
  CategoryElementContentComponent,
  CategoryElementContentTextComponent,
  /* 데이터 */
  DataFrame,
  DataComponent,
  DataElementFrame,
  DataElementComponent,
  DataElementContentFrame,
  DataElementContentComponent,
  DataElementContentTextComponent,
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
  const { RiderData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '약국 코드', width: 120 },
    { title: '약국 이름', width: 90 },
    { title: '약국 전화번호', width: 120 },
    { title: '약국 주소', width: 260 },
    { title: '빠른 배달', content: '1순위', width: 90 },
    { title: '빠른 배달', content: '2순위', width: 90 },
    { title: '빠른 배달', content: '3순위', width: 90 },
    { title: '오늘 배송', content: '1순위', width: 90 },
    { title: '오늘 배송', content: '2순위', width: 90 },
    { title: '오늘 배송', content: '3순위', width: 90 },
    { title: '택배', content: '1순위', width: 90 },
    { title: '택배', content: '2순위', width: 90 },
    { title: '택배', content: '3순위', width: 90 },
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
                  key={`${element?.title}${element?.content ? element?.content : ''}`}
                  minWidth={`${element?.width}px`}
                  width={`${element?.width}%`}
                >
                  <CategoryElementComponent flexDirection="column">
                    <CategoryElementTitleFrame>
                      <CategoryElementTitleComponent justifyContent="center">
                        <CategoryElementTitleTextComponent>
                          {element?.title || '-'}
                        </CategoryElementTitleTextComponent>
                      </CategoryElementTitleComponent>
                    </CategoryElementTitleFrame>
                    {element?.content ? (
                      <CategoryElementContentFrame>
                        <CategoryElementContentComponent justifyContent="center">
                          <CategoryElementContentTextComponent>
                            {element?.content || '-'}
                          </CategoryElementContentTextComponent>
                        </CategoryElementContentComponent>
                      </CategoryElementContentFrame>
                    ) : null}
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
              {RiderData.RiderLinkListData?.linkList?.map(element => (
                <DataElementFrame key={element?.pharmacy?.code}>
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
                          {element?.pharmacy?.code || '-'}
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
                          {element?.pharmacy?.name || '-'}
                        </DataElementContentTextComponent>
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
                          {element?.pharmacy?.phoneNum
                            ? AllowNumber(element?.pharmacy?.phoneNum)
                              ? ConvertContactNumber(AllowNumber(element?.pharmacy?.phoneNum))
                              : element?.pharmacy?.phoneNum
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
                          {element?.pharmacy?.address || '-'}
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
                          {element?.riders?.quick?.[1]?.name || '-'}
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
                          {element?.riders?.quick?.[2]?.name || '-'}
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
                          {element?.riders?.quick?.[3]?.name || '-'}
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
                          {element?.riders?.sameDayDelivery?.[1]?.name || '-'}
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
                          {element?.riders?.sameDayDelivery?.[2]?.name || '-'}
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
                          {element?.riders?.sameDayDelivery?.[3]?.name || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[10].width}px`}
                      width={`${CategoryList[10].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.riders?.parcel?.[1]?.name || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[11].width}px`}
                      width={`${CategoryList[11].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.riders?.parcel?.[2]?.name || '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[12].width}px`}
                      width={`${CategoryList[12].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                        >
                          {element?.riders?.parcel?.[3]?.name || '-'}
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
                /* RiderData.setPageNavigator(1); */
                RiderData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                RiderData.ParagraphNavigator > 1
                  ? RiderData.setParagraphNavigator(RiderData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (RiderData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (RiderData.RiderLinkListData?.count && RiderData.RiderLinkListData?.count.total
                ? Math.floor((Number(RiderData.RiderLinkListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (RiderData.ParagraphNavigator - 1) * 10 + key + 1 === RiderData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    RiderData.setPageNavigator((RiderData.ParagraphNavigator - 1) * 10 + key + 1);
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (RiderData.ParagraphNavigator - 1) * 10 + key + 1 === RiderData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(RiderData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (RiderData.RiderLinkListData?.count && RiderData.RiderLinkListData?.count.total
                      ? Math.floor((Number(RiderData.RiderLinkListData?.count.total) - 1) / 20) + 1
                      : 1)
                      ? (RiderData.ParagraphNavigator - 1) * 10 + key + 1
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
                RiderData.RiderLinkListData?.count && RiderData.RiderLinkListData?.count.total
                  ? Math.ceil((Number(RiderData.RiderLinkListData?.count.total) - 1) / 20 / 10) >
                    RiderData.ParagraphNavigator
                    ? RiderData.setParagraphNavigator(RiderData.ParagraphNavigator + 1)
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
                /* RiderData.setPageNavigator(
                  RiderData.RiderLinkListData?.count &&
                    RiderData.RiderLinkListData?.count.total
                    ? Math.floor((Number(RiderData.RiderLinkListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                RiderData.setParagraphNavigator(
                  parseInt(
                    (
                      ((RiderData.RiderLinkListData?.count &&
                      RiderData.RiderLinkListData?.count.total
                        ? Math.floor((Number(RiderData.RiderLinkListData?.count.total) - 1) / 20)
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
