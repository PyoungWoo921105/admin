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
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
import { AllowNumber } from 'libraries/constraint/AllowNumber';
/*  */
const BoardContent = observer(() => {
  const { TreatmentData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '인증 코드', width: 120 },
    { title: '인증 요청 일시', width: 140 },
    { title: '인증 상태', width: 110 },
    { title: '병원 이름', width: 90 },
    { title: '환자 이름', width: 90 },
    { title: '환자 전화번호', width: 120 },
    { title: '환자 주소', width: 260 },
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
              {TreatmentData.AdminVisitCheckListData?.visitCheckList?.map(element => (
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
                          {element?.code ? element?.code : '-'}
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
                          {element?.createdAt ? ConvertDate(element?.createdAt) : '-'}
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
                            element?.status === 'wait-register'
                              ? 'rgb(255, 192, 0)'
                              : element?.status === 'in-checking'
                              ? 'rgb(255, 192, 0)'
                              : element?.status === 'completed'
                              ? 'rgb(112,173,71)'
                              : element?.status === 'declined'
                              ? 'rgb(192,0,0)'
                              : 'transparent'
                          }
                          color={
                            element?.status === 'wait-register'
                              ? '#ffffff'
                              : element?.status === 'in-checking'
                              ? '#ffffff'
                              : element?.status === 'completed'
                              ? '#ffffff'
                              : element?.status === 'declined'
                              ? '#ffffff'
                              : '#000000'
                          }
                        >
                          {element?.status === 'wait-register'
                            ? '회원가입 대기'
                            : element?.status === 'in-checking'
                            ? '인증 요청'
                            : element?.status === 'completed'
                            ? '인증 완료'
                            : element?.status === 'declined'
                            ? '인증 거절'
                            : '-'}
                        </DataElementContentButtonComponent>
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
                          {element?.hospital?.name || '-'}
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
                          {element?.patient?.name || '-'}
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
                          {element?.receptionInfo?.phoneNum
                            ? AllowNumber(element?.receptionInfo?.phoneNum)
                              ? ConvertContactNumber(AllowNumber(element?.receptionInfo?.phoneNum))
                              : element?.receptionInfo?.phoneNum
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
                          {element?.receptionInfo?.jibunAddress
                            ? `${element?.receptionInfo?.jibunAddress} ${element?.receptionInfo?.detailedAddress}`
                            : element?.receptionInfo?.roadAddress
                            ? `${element?.receptionInfo?.roadAddress} ${element?.receptionInfo?.detailedAddress}`
                            : element?.receptionInfo?.detailedAddress
                            ? element?.receptionInfo?.detailedAddress
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
                /* TreatmentData.setPageNavigator(1); */
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
              (TreatmentData.AdminVisitCheckListData?.count &&
              TreatmentData.AdminVisitCheckListData?.count.total
                ? Math.floor(
                    (Number(TreatmentData.AdminVisitCheckListData?.count.total) - 1) / 20
                  ) + 1
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
                    (TreatmentData.AdminVisitCheckListData?.count &&
                    TreatmentData.AdminVisitCheckListData?.count.total
                      ? Math.floor(
                          (Number(TreatmentData.AdminVisitCheckListData?.count.total) - 1) / 20
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
                TreatmentData.AdminVisitCheckListData?.count &&
                TreatmentData.AdminVisitCheckListData?.count.total
                  ? Math.ceil(
                      (Number(TreatmentData.AdminVisitCheckListData?.count.total) - 1) / 20 / 10
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
                /* TreatmentData.setPageNavigator(
                  TreatmentData.AdminVisitCheckListData?.count &&
                    TreatmentData.AdminVisitCheckListData?.count.total
                    ? Math.floor((Number(TreatmentData.AdminVisitCheckListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                TreatmentData.setParagraphNavigator(
                  parseInt(
                    (
                      ((TreatmentData.AdminVisitCheckListData?.count &&
                      TreatmentData.AdminVisitCheckListData?.count.total
                        ? Math.floor(
                            (Number(TreatmentData.AdminVisitCheckListData?.count.total) - 1) / 20
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
          {/*  */}
        </NavigationComponent>
      </NavigationFrame>
    </DynamicBoardContentFrame>
  );
});

export default BoardContent;
