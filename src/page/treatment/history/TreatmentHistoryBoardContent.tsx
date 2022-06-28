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
import { TreatmentElementDataType } from 'data/stores/TreatmentData';
/*  */
const BoardContent = observer(() => {
  const { TreatmentData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '진료 코드', width: 120 },
    { title: '생성 일시', width: 140 },
    { title: '진료 상태', width: 110 },
    { title: '병원 이름', width: 90 },
    { title: '의사 이름', width: 90 },
    { title: '회원 이름', width: 90 },
    { title: '환자 이름', width: 90 },
    { title: '접수 항목', width: 110 },
    { title: '결제 금액', width: 90 },
    { title: '처방전 유무', width: 90 },
    { title: '조제 요청 여부', width: 90 },
  ];

  const onClickProcessPopUp = (props: any) => {
    const { element } = props;
    const ProcessPopUpData = {
      Title: '통합 상세 정보',
      Code: (element as TreatmentElementDataType).treatCode,
      Step: 'TREATMENT',
      Type: 'SPECIFICATION',
      Data: element,
      Actions: [{ Choice: '돌아가기', Action: () => AdminData.setProcessPopUpFlag(false) }],
    };
    AdminData.setProcessPopUpData(ProcessPopUpData);
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
              {TreatmentData.TreatmentListData?.treatList?.map(element => (
                <DataElementFrame key={element?.treatCode}>
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
                          {element?.treatCode || '-'}
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
                      minWidth={`${CategoryList[3].width}px`}
                      width={`${CategoryList[3].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentTextComponent>
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
                        <DataElementContentTextComponent>
                          {element?.doctor?.name || '-'}
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
                          {element?.receptionCategory || '-'}
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
                          {element?.payAmount ? `${ConvertCommaNumber(element?.payAmount)}원` : '-'}
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
                          {element?.prescriptionImgFile?.url ? 'O' : '-'}
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
                          {element?.isMedicineRequested ? 'O' : '-'}
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
              (TreatmentData.TreatmentListData?.count &&
              TreatmentData.TreatmentListData?.count.total
                ? Math.floor((Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20) + 1
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
                /* TreatmentData.setPageNavigator(
                  TreatmentData.TreatmentListData?.count &&
                    TreatmentData.TreatmentListData?.count.total
                    ? Math.floor((Number(TreatmentData.TreatmentListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
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
          {/*  */}
        </NavigationComponent>
      </NavigationFrame>
    </BoardContentFrame>
  );
});

export default BoardContent;
