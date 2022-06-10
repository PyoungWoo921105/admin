/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect, useState } from 'react';

import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

/* 타이틀, 그리고 필터 */
import { BoardTitleAndFilterFrame } from 'styles/components/common/Frame';
/*  */
/* 타이틀 */
import {
  /* 내용 */
  TitleFrame,
  TitleComponent,
  TitleTextFrame,
  TitleTextComponent,
  /* 페이지 새로고침 */
  TitlePageRefreshFrame,
  TitlePageRefreshButtonFrame,
  TitlePageRefreshButtonComponent,
  /* 필터 스위치 */
  TitleFilterFrame,
  TitleFilterTextFrame,
  TitleFilterTextComponent,
  TitleFilterButtonFrame,
  TitleFilterButtonComponent,
  /* 필터 초기화 */
  TitleFilterRefreshFrame,
  TitleFilterRefreshButtonFrame,
  TitleFilterRefreshButtonComponent,
  /* 데이터 다운로드 */
  TitleFilterDownloadFrame,
  TitleFilterDownloadButtonFrame,
  TitleFilterDownloadButtonComponent,
  /* 검색 */
  TitleSearchFrame,
  TitleSearchButtonFrame,
  TitleSearchButtonComponent,
} from 'styles/components/common/Title';
/*  */
/* 필터 */
import {
  FilterFrame,
  FilterComponent,
  FilterElementFrame,
  FilterElementComponent,
  FilterElementTitleFrame,
  FilterElementTitleComponent,
  FilterElementTitleTextComponent,
  FilterElementBoardFrame,
  FilterElementBoardComponent,
  FilterElementBoardInputComponent,
  FilterElementBoardSelectComponent,
  FilterElementBoardOptionComponent,
  FilterElementBoardSelectedComponent,
  FilterElementBoardSelectedTextFrame,
  FilterElementBoardSelectedTextComponent,
  FilterElementBoardSelectedImageFrame,
  FilterElementBoardSelectedImageComponent,
} from 'styles/components/common/Filter';
/* 통계 */
import {
  StatisticFrame,
  StatisticComponent,
  StatisticElementFrame,
  StatisticElementComponent,
  StatisticElementTitleFrame,
  StatisticElementTitleComponent,
  StatisticElementTitleTextComponent,
  StatisticElementBoardFrame,
  StatisticElementBoardComponent,
  StatisticElementBoardTextComponent,
} from 'styles/components/common/Statistic';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { GetDeliveryList } from 'services/delivery/GetDeliveryList';
import { GetDeliveryListExport } from 'services/delivery/GetDeliveryListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, DeliveryData } = useStore();
  /* 필터 스위치 */
  const onChangeFilterSwitchFlag = () => {
    AdminData.setFilterSwitchFlag(!AdminData.FilterSwitchFlag);
  };
  /* 통계 스위치 */
  const onChangeStatisticSwitchFlag = () => {
    AdminData.setStatisticSwitchFlag(!AdminData.StatisticSwitchFlag);
  };
  /* 필터 초기화 */
  const onClickFilterRefresh = () => {
    setDeliveryCode('');
    setTreatmentCode('');
    setMedicineCode('');
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setDeliveryState(['전체']);
    setDeliveryAgencyName(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryListFunction();
    DeliveryData.setPageNavigator(1);
    DeliveryData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 배달 번호 */
  const [DeliveryCode, setDeliveryCode] = useState('');
  const onChangeDeliveryCode = (event: { target: { value: string } }) => {
    setDeliveryCode(event.target.value);
  };
  /* 진료 번호 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 조제 번호 */
  const [MedicineCode, setMedicineCode] = useState('');
  const onChangeMedicineCode = (event: { target: { value: string } }) => {
    setMedicineCode(event.target.value);
  };
  /* 시작 조회 기간 */
  const [StartInquiryPeriod, setStartInquiryPeriod] = useState('');
  const onChangeStartInquiryPeriod = (event: { target: { value: string } }) => {
    setStartInquiryPeriod(AllowNumber(event.target.value));
  };
  /* 종료 조회 기간 */
  const [EndInquiryPeriod, setEndInquiryPeriod] = useState('');
  const onChangeEndInquiryPeriod = (event: { target: { value: string } }) => {
    setEndInquiryPeriod(AllowNumber(event.target.value));
  };
  /* 배달 상태 */
  const DeliveryStateList = [
    '선택',
    '전체',
    '접수 대기',
    '배차 대기',
    '배차 완료',
    '픽업 완료',
    '완료',
    '배달 취소',
  ];
  const [DeliveryState, setDeliveryState] = useState<string[]>(['전체']);
  const onChangeDeliveryState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryState([event.target.value]);
    } else if (DeliveryState.indexOf(event.target.value) === -1) {
      if (DeliveryState.indexOf('전체') === -1) {
        /* setDeliveryState([event.target.value]); */
        setDeliveryState([...DeliveryState, event.target.value]);
      } else {
        setDeliveryState([event.target.value]);
      }
    } else if (DeliveryState.length === 1) {
      setDeliveryState(['전체']);
    } else {
      setDeliveryState(DeliveryState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteDeliveryState = (props: { key: any }) => {
    const { key } = props;
    if (DeliveryState.length === 1 && DeliveryState[0] === key) {
      setDeliveryState(['전체']);
    } else {
      setDeliveryState(DeliveryState.filter(element => element !== key));
    }
  };
  /* 배송 업체 이름 */
  const DeliveryAgencyNameList = [
    '선택',
    '전체',
    '접수 대기',
    '배차 대기',
    '배차 완료',
    '픽업 완료',
    '완료',
    '배달 취소',
  ];
  const [DeliveryAgencyName, setDeliveryAgencyName] = useState<string[]>(['전체']);
  const onChangeDeliveryAgencyName = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryAgencyName([event.target.value]);
    } else if (DeliveryAgencyName.indexOf(event.target.value) === -1) {
      if (DeliveryAgencyName.indexOf('전체') === -1) {
        /* setDeliveryAgencyName([event.target.value]); */
        setDeliveryAgencyName([...DeliveryAgencyName, event.target.value]);
      } else {
        setDeliveryAgencyName([event.target.value]);
      }
    } else if (DeliveryAgencyName.length === 1) {
      setDeliveryAgencyName(['전체']);
    } else {
      setDeliveryAgencyName(DeliveryAgencyName.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteDeliveryAgencyName = (props: { key: any }) => {
    const { key } = props;
    if (DeliveryAgencyName.length === 1 && DeliveryAgencyName[0] === key) {
      setDeliveryAgencyName(['전체']);
    } else {
      setDeliveryAgencyName(DeliveryAgencyName.filter(element => element !== key));
    }
  };

  /* 데이터 */
  const GetDeliveryListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDeliveryListData = {
      deliveryCode: null || DeliveryCode,
      treatCode: null || TreatmentCode,
      medicineCode: null || MedicineCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || DeliveryState[0] === '전체' ? null : DeliveryState,
      riderCode: null || DeliveryAgencyName[0] === '전체' ? null : DeliveryAgencyName,

      page: null || DeliveryData.PageNavigator - 1,
    };
    const response = await GetDeliveryList(GetDeliveryListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DELIVERY_LIST',
        Title: '배달 내역 불러오기 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CommonData,
    DeliveryAgencyName,
    DeliveryCode,
    DeliveryData.PageNavigator,
    DeliveryState,
    EndInquiryPeriod,
    MedicineCode,
    StartInquiryPeriod,
    TreatmentCode,
  ]);
  const GetDeliveryListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDeliveryListData = {
      deliveryCode: null || DeliveryCode,
      treatCode: null || TreatmentCode,
      medicineCode: null || MedicineCode,
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      statusList: null || DeliveryState[0] === '전체' ? null : DeliveryState,
      riderCode: null || DeliveryAgencyName[0] === '전체' ? null : DeliveryAgencyName,

      /* page: null || DeliveryData.PageNavigator - 1, */
    };
    const response = await GetDeliveryListExport(GetDeliveryListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DELIVERY_EXPORT_LIST',
        Title: '배달 내역 데이터 다운로드 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    CommonData,
    DeliveryAgencyName,
    DeliveryCode,
    DeliveryState,
    EndInquiryPeriod,
    MedicineCode,
    StartInquiryPeriod,
    TreatmentCode,
  ]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DeliveryData.PageNavigator]);

  /* 통계 */
  const StatisticsList = ['전체'];

  /* ENTER */
  const onKeyPressEnter = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onClickSearch();
    }
  };

  return (
    <BoardTitleAndFilterFrame>
      <TitleFrame>
        <TitleComponent>
          {/* 내용 */}
          <TitleTextFrame>
            <TitleTextComponent>배달 내역</TitleTextComponent>
          </TitleTextFrame>
          {/*  */}
          {/* 페이지 세로고침 */}
          <TitlePageRefreshFrame>
            <TitlePageRefreshButtonFrame onClick={onClickPageRefresh}>
              <TitlePageRefreshButtonComponent>페이지 새로고침</TitlePageRefreshButtonComponent>
            </TitlePageRefreshButtonFrame>
          </TitlePageRefreshFrame>
          {/*  */}
          {/* 필터 스위치 */}
          <TitleFilterFrame>
            <TitleFilterTextFrame>
              <TitleFilterTextComponent>필터</TitleFilterTextComponent>
            </TitleFilterTextFrame>
            <TitleFilterButtonFrame>
              <TitleFilterButtonComponent
                type="checkbox"
                checked={AdminData.FilterSwitchFlag}
                onChange={onChangeFilterSwitchFlag}
              />
            </TitleFilterButtonFrame>
          </TitleFilterFrame>
          {/* 통계 스위치 */}
          <TitleFilterFrame>
            <TitleFilterTextFrame>
              <TitleFilterTextComponent>통계</TitleFilterTextComponent>
            </TitleFilterTextFrame>
            <TitleFilterButtonFrame>
              <TitleFilterButtonComponent
                type="checkbox"
                checked={AdminData.StatisticSwitchFlag}
                onChange={onChangeStatisticSwitchFlag}
              />
            </TitleFilterButtonFrame>
          </TitleFilterFrame>
          {/*  */}
          {/* 필터 초기화 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleFilterRefreshFrame>
              <TitleFilterRefreshButtonFrame onClick={onClickFilterRefresh}>
                <TitleFilterRefreshButtonComponent>필터 초기화</TitleFilterRefreshButtonComponent>
              </TitleFilterRefreshButtonFrame>
            </TitleFilterRefreshFrame>
          ) : null}
          {/*  */}
          {/* 데이터 다운로드 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleFilterDownloadFrame>
              <TitleFilterDownloadButtonFrame onClick={onClickFilterDownload}>
                <TitleFilterDownloadButtonComponent>
                  데이터 다운로드
                </TitleFilterDownloadButtonComponent>
              </TitleFilterDownloadButtonFrame>
            </TitleFilterDownloadFrame>
          ) : null}
          {/*  */}
          {/* 검색 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleSearchFrame>
              <TitleSearchButtonFrame onClick={onClickSearch}>
                <TitleSearchButtonComponent>검색</TitleSearchButtonComponent>
              </TitleSearchButtonFrame>
            </TitleSearchFrame>
          ) : null}
          {/*  */}
        </TitleComponent>
      </TitleFrame>
      {AdminData.FilterSwitchFlag ? (
        <FilterFrame>
          <FilterComponent>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>배달 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DeliveryCode}
                      onChange={onChangeDeliveryCode}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={TreatmentCode}
                      onChange={onChangeTreatmentCode}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>조제 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={MedicineCode}
                      onChange={onChangeMedicineCode}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      시작 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={StartInquiryPeriod}
                      onChange={onChangeStartInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      종료 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={EndInquiryPeriod}
                      onChange={onChangeEndInquiryPeriod}
                      placeholder="YYYYMMDD"
                      textAlign="center"
                      maxLength={8}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="65px" width="65px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>배달 상태</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="155px" width="155px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DeliveryStateList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배달 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="100%">
                  <FilterElementBoardComponent>
                    {DeliveryState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DeliveryState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDeliveryState({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* SELECT & OPTION */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배송 업체 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryAgencyName}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DeliveryAgencyNameList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="110px" width="110px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배송 업체 이름 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="110px" width="110%">
                  <FilterElementBoardComponent>
                    {DeliveryAgencyName.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DeliveryAgencyName.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDeliveryAgencyName({ key: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element}
                          </FilterElementBoardSelectedTextComponent>
                        </FilterElementBoardSelectedTextFrame>
                        <FilterElementBoardSelectedImageFrame width="10px">
                          <FilterElementBoardSelectedImageComponent src={ExitIcon} />
                        </FilterElementBoardSelectedImageFrame>
                      </FilterElementBoardSelectedComponent>
                    ))}
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
          </FilterComponent>
        </FilterFrame>
      ) : null}
      {AdminData.StatisticSwitchFlag ? (
        <StatisticFrame>
          <StatisticComponent>
            {/*  */}
            {StatisticsList.map(element => (
              <StatisticElementFrame>
                <StatisticElementComponent>
                  <StatisticElementTitleFrame
                    minWidth={`${element.length * 10 + 40}px`}
                    width={`${element.length * 10 + 40}px`}
                  >
                    <StatisticElementTitleComponent>
                      <StatisticElementTitleTextComponent
                        width="100%"
                        lineHeight="30px"
                        color={
                          element === '전체'
                            ? '#000000'
                            : element === '접수 대기'
                            ? 'rgb(255,64,64)'
                            : element === '배차 대기'
                            ? 'rgb(255,192,0)'
                            : element === '배차 완료'
                            ? 'rgb(0,0,0)'
                            : element === '픽업 완료'
                            ? 'rgb(237,125,49)'
                            : element === '완료'
                            ? 'rgb(112,173,71)'
                            : element === '배달 취소'
                            ? 'rgb(255,64,64)'
                            : '#000000'
                        }
                      >
                        {element}
                      </StatisticElementTitleTextComponent>
                    </StatisticElementTitleComponent>
                  </StatisticElementTitleFrame>
                  <StatisticElementBoardFrame
                    minWidth={`${220 - (element.length * 10 + 40)}px`}
                    width={`${220 - (element.length * 10 + 40)}px`}
                  >
                    <StatisticElementBoardComponent>
                      <StatisticElementBoardTextComponent
                        width="100%"
                        textAlign="right"
                        lineHeight="30px"
                        color={
                          element === '전체'
                            ? '#000000'
                            : element === '접수 대기'
                            ? 'rgb(255,64,64)'
                            : element === '배차 대기'
                            ? 'rgb(255,192,0)'
                            : element === '배차 완료'
                            ? 'rgb(0,0,0)'
                            : element === '픽업 완료'
                            ? 'rgb(237,125,49)'
                            : element === '완료'
                            ? 'rgb(112,173,71)'
                            : element === '배달 취소'
                            ? 'rgb(255,64,64)'
                            : '#000000'
                        }
                      >
                        {element === '전체'
                          ? DeliveryData.DeliveryListData?.count?.total
                            ? `${ConvertCommaNumber(
                                DeliveryData.DeliveryListData?.count?.total.toString()
                              )}건`
                            : '0건'
                          : '0건'}
                      </StatisticElementBoardTextComponent>
                    </StatisticElementBoardComponent>
                  </StatisticElementBoardFrame>
                </StatisticElementComponent>
              </StatisticElementFrame>
            ))}
            {/*  */}
          </StatisticComponent>
        </StatisticFrame>
      ) : null}
    </BoardTitleAndFilterFrame>
  );
});

export default BoardTitleAndFilter;
