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

import { ConvertDate } from 'libraries/conversion/ConvertDate';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardContent = observer(() => {
  const { ReviewData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '리뷰 코드', width: 120 },
    { title: '진료 코드', width: 120 },
    { title: '리뷰 작성 일시', width: 140 },
    { title: '리뷰 상태', width: 130 },
    { title: '병원 이름', width: 90 },
    { title: '의사 이름', width: 90 },
    { title: '환자 이름', width: 90 },
    { title: '리뷰 내용', width: 90 },
    { title: '리뷰 점수', width: 90 },
    { title: '리뷰 불만 사항 상태', width: 130 },
    { title: '리뷰 블라인드 상태', width: 130 },
    { title: '리뷰 블라인드 일시', width: 140 },
    { title: '리뷰 공개 상태', width: 130 },
    { title: '리뷰 댓글 상태', width: 130 },
    { title: '리뷰 댓글 블라인드 일시', width: 140 },
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
              {ReviewData.ReviewListData?.reviewList?.map(element => (
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.taskCode || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.createdDateTime ? ConvertDate(element?.createdDateTime) : '-'}
                        </DataElementContentTextComponent>
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
                            element?.reviewStatus === '정상'
                              ? 'rgb(112,173,71)'
                              : element?.reviewStatus === '블라인드'
                              ? 'rgb(192,0,0)'
                              : element?.reviewStatus === '삭제'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.reviewStatus === '정상'
                              ? '#ffffff'
                              : element?.reviewStatus === '블라인드'
                              ? '#ffffff'
                              : element?.reviewStatus === '삭제'
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.reviewStatus || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.hospitalName || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.doctorName || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.patientName || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                          color="blue"
                          cursor="pointer"
                        >
                          보기
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.rating
                            ? `${ConvertCommaNumber(element?.rating.toString())}점`
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
                        <DataElementContentButtonComponent
                          minWidth="110px"
                          backgroundColor={
                            element?.hasNegative === true
                              ? 'rgb(192,0,0)'
                              : element?.hasNegative === false
                              ? 'rgb(112,173,71)'
                              : 'transparent'
                          }
                          color={
                            element?.hasNegative === true
                              ? '#ffffff'
                              : element?.hasNegative === false
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.hasNegative ? '있음' : '없음'}
                        </DataElementContentButtonComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[10].width}px`}
                      width={`${CategoryList[10].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          minWidth="110px"
                          backgroundColor={
                            element?.blind === ''
                              ? 'rgb(112,173,71)'
                              : element?.blind === '리뷰'
                              ? 'rgb(192,0,0)'
                              : element?.blind === '댓글'
                              ? 'rgb(192,0,0)'
                              : element?.blind === '리뷰, 댓글'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.blind === ''
                              ? '#ffffff'
                              : element?.blind === '리뷰'
                              ? '#ffffff'
                              : element?.blind === '댓글'
                              ? '#ffffff'
                              : element?.blind === '리뷰, 댓글'
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.blind === ''
                            ? '없음'
                            : element?.blind === '리뷰'
                            ? '리뷰'
                            : element?.blind === '댓글'
                            ? '댓글'
                            : element?.blind === '리뷰, 댓글'
                            ? '리뷰, 댓글'
                            : '-'}
                        </DataElementContentButtonComponent>
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.reviewBlindedDateTime
                            ? ConvertDate(element?.reviewBlindedDateTime)
                            : '-'}
                        </DataElementContentTextComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[12].width}px`}
                      width={`${CategoryList[12].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          minWidth="110px"
                          backgroundColor={
                            element?.isPublic === true
                              ? 'rgb(112,173,71)'
                              : element?.isPublic === false
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.isPublic === true
                              ? '#ffffff'
                              : element?.isPublic === false
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.isPublic ? '공개' : '비공개'}
                        </DataElementContentButtonComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[13].width}px`}
                      width={`${CategoryList[13].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentButtonComponent
                          minWidth="110px"
                          backgroundColor={
                            element?.hasReply === true
                              ? 'rgb(112,173,71)'
                              : element?.hasReply === false
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.hasReply === true
                              ? '#ffffff'
                              : element?.hasReply === false
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.hasReply ? '있음' : '없음'}
                        </DataElementContentButtonComponent>
                      </DataElementContentComponent>
                    </DataElementContentFrame>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[14].width}px`}
                      width={`${CategoryList[14].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent
                          lineHeight={!AdminData.LocalContentState ? '38px' : '38px'}
                          overflow={!AdminData.LocalContentState ? 'hidden' : ''}
                          textOverflow={!AdminData.LocalContentState ? 'ellipsis' : ''}
                          whiteSpace={!AdminData.LocalContentState ? 'nowrap' : ''}
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.replyBlindedDateTime
                            ? ConvertDate(element?.replyBlindedDateTime)
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
                /* ReviewData.setPageNavigator(1); */
                ReviewData.setParagraphNavigator(1);
              }}
            >
              <NavigationTextComponent color="#ffffff">{'<<'}</NavigationTextComponent>
            </NavigationPluralParagraphButtonComponent>
            <NavigationSingularParagraphButtonComponent
              backgroundColor="#14C276"
              cursor="pointer"
              onClick={() =>
                ReviewData.ParagraphNavigator > 1
                  ? ReviewData.setParagraphNavigator(ReviewData.ParagraphNavigator - 1)
                  : {}
              }
            >
              <NavigationTextComponent color="#ffffff">{'<'}</NavigationTextComponent>
            </NavigationSingularParagraphButtonComponent>
          </NavigationButtonFrame>
          <NavigationButtonFrame>
            {[...Array(10)].map((element, key) =>
              (ReviewData.ParagraphNavigator - 1) * 10 + key + 1 <=
              (ReviewData.ReviewListData?.count && ReviewData.ReviewListData?.count.total
                ? Math.floor((Number(ReviewData.ReviewListData?.count.total) - 1) / 20) + 1
                : 1) ? (
                <NavigationPageButtonComponent
                  // eslint-disable-next-line react/no-array-index-key
                  key={key}
                  cursor="pointer"
                  backgroundColor={
                    (ReviewData.ParagraphNavigator - 1) * 10 + key + 1 === ReviewData.PageNavigator
                      ? '#3C9E3F'
                      : '#14C276'
                  }
                  onClick={() => {
                    ReviewData.setPageNavigator((ReviewData.ParagraphNavigator - 1) * 10 + key + 1);
                  }}
                >
                  <NavigationTextComponent
                    color={
                      (ReviewData.ParagraphNavigator - 1) * 10 + key + 1 ===
                      ReviewData.PageNavigator
                        ? '#ffffff'
                        : '#ffffff'
                    }
                  >
                    {(ReviewData.ParagraphNavigator - 1) * 10 + key + 1 <=
                    (ReviewData.ReviewListData?.count && ReviewData.ReviewListData?.count.total
                      ? Math.floor((Number(ReviewData.ReviewListData?.count.total) - 1) / 20) + 1
                      : 1)
                      ? (ReviewData.ParagraphNavigator - 1) * 10 + key + 1
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
                ReviewData.ReviewListData?.count && ReviewData.ReviewListData?.count.total
                  ? Math.ceil((Number(ReviewData.ReviewListData?.count.total) - 1) / 20 / 10) >
                    ReviewData.ParagraphNavigator
                    ? ReviewData.setParagraphNavigator(ReviewData.ParagraphNavigator + 1)
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
                /* ReviewData.setPageNavigator(
                  ReviewData.ReviewListData?.count &&
                    ReviewData.ReviewListData?.count.total
                    ? Math.floor((Number(ReviewData.ReviewListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                ReviewData.setParagraphNavigator(
                  parseInt(
                    (
                      ((ReviewData.ReviewListData?.count && ReviewData.ReviewListData?.count.total
                        ? Math.floor((Number(ReviewData.ReviewListData?.count.total) - 1) / 20)
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
