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
  DataElementContentInputComponent,
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
import { AdminHospitalAdditionNotificationDataType } from 'data/stores/HospitalData';
/*  */
const BoardContent = observer(() => {
  const { HospitalData, AdminData } = useStore();
  /* 카테고리 */
  const CategoryList = [
    { title: '선택', width: 60 },
    { title: '추가 요청 코드', width: 120 },
    { title: '환자 코드', width: 120 },
    { title: '추가 요청 병원 이름', width: 120 },
    { title: '병원 위치 (시/도)', width: 120 },
    { title: '병원 위치 (시/군/구)', width: 120 },
    { title: '추가 요청 일시', width: 140 },
    { title: '환자 주소', width: 260 },
    { title: '알림 발송 여부', width: 120 },
    { title: '알림 동의 여부', width: 120 },
    { title: '연결 병원 이름', width: 90 },
    { title: '연결 여부', width: 90 },
  ];

  const onChangeAdminHospitalAdditionNotificationData = (props: {
    element: AdminHospitalAdditionNotificationDataType;
  }) => {
    const { element } = props;
    if (
      HospitalData.AdminHospitalAdditionNotificationData.filter(
        (data: AdminHospitalAdditionNotificationDataType) => data.code !== element.code
      ).length === HospitalData.AdminHospitalAdditionNotificationData.length
    ) {
      HospitalData.setAdminHospitalAdditionNotificationData([
        ...HospitalData.AdminHospitalAdditionNotificationData,
        element,
      ]);
    } else {
      HospitalData.setAdminHospitalAdditionNotificationData(
        HospitalData.AdminHospitalAdditionNotificationData.filter(
          (data: AdminHospitalAdditionNotificationDataType) => data.code !== element.code
        )
      );
    }
  };

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
              {HospitalData.AdminHospitalAdditionDetailsListData?.additionList?.map(element => (
                <DataElementFrame key={element?.code}>
                  <DataElementComponent>
                    {/*  */}
                    <DataElementContentFrame
                      minWidth={`${CategoryList[0].width}px`}
                      width={`${CategoryList[0].width}%`}
                    >
                      <DataElementContentComponent justifyContent="center">
                        <DataElementContentInputComponent
                          type="checkbox"
                          width="15px"
                          height="15px"
                          onChange={() =>
                            onChangeAdminHospitalAdditionNotificationData({ element })
                          }
                        />
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
                          color="blue"
                          cursor="pointer"
                        >
                          {element?.code || '-'}
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
                          {element?.patient?.code || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.hospital?.sido || '-'}
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
                          {element?.hospital?.sigungu || '-'}
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
                          {element?.createdAt ? ConvertDate(element?.createdAt) : '-'}
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
                        >
                          {element?.address?.jibunAddress
                            ? `${element?.address?.jibunAddress} ${element?.address?.detailedAddress}`
                            : element?.address?.roadAddress
                            ? `${element?.address?.roadAddress} ${element?.address?.detailedAddress}`
                            : element?.address?.detailedAddress
                            ? element?.address?.detailedAddress
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {!element?.isSendNoti ? '-' : 'O'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {!element?.isAgreeNoti ? '-' : 'O'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {element?.registeredHospital?.name || '-'}
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
                          wordBreak={!AdminData.LocalContentState ? '' : 'break-word'}
                        >
                          {!element?.registeredHospital?.code ? '-' : 'O'}
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
              (HospitalData.AdminHospitalAdditionDetailsListData?.count &&
              HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                ? Math.floor(
                    (Number(HospitalData.AdminHospitalAdditionDetailsListData?.count.total) - 1) /
                      20
                  ) + 1
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
                    (HospitalData.AdminHospitalAdditionDetailsListData?.count &&
                    HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                      ? Math.floor(
                          (Number(HospitalData.AdminHospitalAdditionDetailsListData?.count.total) -
                            1) /
                            20
                        ) + 1
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
                HospitalData.AdminHospitalAdditionDetailsListData?.count &&
                HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                  ? Math.ceil(
                      (Number(HospitalData.AdminHospitalAdditionDetailsListData?.count.total) - 1) /
                        20 /
                        10
                    ) > HospitalData.ParagraphNavigator
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
                  HospitalData.AdminHospitalAdditionDetailsListData?.count &&
                    HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                    ? Math.floor((Number(HospitalData.AdminHospitalAdditionDetailsListData?.count.total) - 1) / 20) +
                        1
                    : 1
                ); */
                HospitalData.setParagraphNavigator(
                  parseInt(
                    (
                      ((HospitalData.AdminHospitalAdditionDetailsListData?.count &&
                      HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                        ? Math.floor(
                            (Number(
                              HospitalData.AdminHospitalAdditionDetailsListData?.count.total
                            ) -
                              1) /
                              20
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
