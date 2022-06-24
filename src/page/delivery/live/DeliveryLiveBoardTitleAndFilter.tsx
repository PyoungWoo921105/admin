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
  StatisticElementTitleTextFrame,
  StatisticElementTitleTextComponent,
  StatisticElementBoardFrame,
  StatisticElementBoardComponent,
  StatisticElementBoardTextFrame,
  StatisticElementBoardTextComponent,
} from 'styles/components/common/Statistic';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import { GetDeliveryList } from 'services/delivery/GetDeliveryList';
import { GetDeliveryListExport } from 'services/delivery/GetDeliveryListExport';

import { GetRiderListBasic } from 'services/rider/GetRiderListBasic';

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, DeliveryData, RiderData } = useStore();
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
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setDeliveryState(['전체']);
    setDeliveryAgencyName([{ code: '', name: '전체' }]);
    setPatientName('');
    setTreatmentCode('');
    setMedicineCode('');
    setDeliveryMethod(['전체']);
    setDeliveryMetropolitanAddress(['전체']);
    setDeliveryElementaryAddress('');
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
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetRiderListBasicFunction();
    DeliveryData.setPageNavigator(1);
    DeliveryData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 방문/배달 코드 */
  const [DeliveryCode, setDeliveryCode] = useState('');
  const onChangeDeliveryCode = (event: { target: { value: string } }) => {
    setDeliveryCode(event.target.value);
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
  /* 약 수령 방법 */
  const DeliveryMethodList = ['선택', '전체', '빠른 배달', '오늘 배송', '택배', '방문', '없음'];
  const [DeliveryMethod, setDeliveryMethod] = useState<string[]>(['전체']);
  const onChangeDeliveryMethod = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryMethod([event.target.value]);
    } else if (DeliveryMethod.indexOf(event.target.value) === -1) {
      if (DeliveryMethod.indexOf('전체') === -1) {
        setDeliveryMethod([event.target.value]);
        /* setDeliveryMethod([...DeliveryMethod, event.target.value]); */
      } else {
        setDeliveryMethod([event.target.value]);
      }
    } else if (DeliveryMethod.length === 1) {
      setDeliveryMethod(['전체']);
    } else {
      setDeliveryMethod(DeliveryMethod.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteDeliveryMethod = (props: { key: any }) => {
    const { key } = props;
    if (DeliveryMethod.length === 1 && DeliveryMethod[0] === key) {
      setDeliveryMethod(['전체']);
    } else {
      setDeliveryMethod(DeliveryMethod.filter(element => element !== key));
    }
  };
  /* 방문/배달 상태 */
  const DeliveryStateList = [
    '선택',
    '전체',
    '접수 대기',
    '배차 대기',
    '배차 완료',
    '픽업 완료',
    '완료',
    '취소',
    '배달 거절',
  ];
  const [DeliveryState, setDeliveryState] = useState<string[]>(['전체']);
  const onChangeDeliveryState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryState([event.target.value]);
    } else if (DeliveryState.indexOf(event.target.value) === -1) {
      if (DeliveryState.indexOf('전체') === -1) {
        setDeliveryState([event.target.value]);
        /* FUTUREWORK */
        /* setDeliveryState([...DeliveryState, event.target.value]); */
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
  const [DeliveryAgencyName, setDeliveryAgencyName] = useState<{ code: string; name: string }[]>([
    { code: '', name: '전체' },
  ]);
  const onChangeDeliveryAgencyName = (event: { target: { value: string } }) => {
    /* FUTUREWORK */
    const TempDeliveryAgencyName = JSON.parse(event.target.value) as {
      code: string;
      name: string;
    };
    if (TempDeliveryAgencyName.name === '전체') {
      setDeliveryAgencyName([TempDeliveryAgencyName]);
    } else if (
      DeliveryAgencyName.findIndex(element => element?.code === TempDeliveryAgencyName.code) === -1
    ) {
      if (DeliveryAgencyName.findIndex(element => element?.name === '전체') === -1) {
        setDeliveryAgencyName([TempDeliveryAgencyName]);
        /* FUTUREWORK */
        /* setDeliveryAgencyName([...DeliveryAgencyName, TempDeliveryAgencyName]); */
      } else {
        setDeliveryAgencyName([TempDeliveryAgencyName]);
      }
    } else if (DeliveryAgencyName.length === 1) {
      setDeliveryAgencyName([{ code: '', name: '전체' }]);
    } else {
      setDeliveryAgencyName(
        DeliveryAgencyName.filter(element => element?.code !== TempDeliveryAgencyName.code)
      );
    }
  };
  const onClickDeleteDeliveryAgencyName = (props: { object: { code: string; name: string } }) => {
    const { object } = props;
    if (DeliveryAgencyName.length === 1 && DeliveryAgencyName[0].code === object.code) {
      setDeliveryAgencyName([{ code: '', name: '전체' }]);
    } else {
      setDeliveryAgencyName(DeliveryAgencyName.filter(element => element?.code !== object.code));
    }
  };
  /* 환자 이름 */
  const [PatientName, setPatientName] = useState('');
  const onChangePatientName = (event: { target: { value: string } }) => {
    setPatientName(event.target.value);
  };
  /* 배달 특별지방자치단체 주소 */
  const DeliveryMetropolitanAddressList = [
    '선택',
    '전체',
    '서울',
    '경기',
    '강원',
    '경남',
    '경북',
    '광주',
    '대구',
    '대전',
    '부산',
    '세종',
    '울산',
    '인천',
    '전남',
    '전북',
    '제주',
    '충남',
    '충북',
  ];
  const [DeliveryMetropolitanAddress, setDeliveryMetropolitanAddress] = useState<string[]>([
    '전체',
  ]);
  const onChangeDeliveryMetropolitanAddress = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setDeliveryMetropolitanAddress([event.target.value]);
    } else if (DeliveryMetropolitanAddress.indexOf(event.target.value) === -1) {
      if (DeliveryMetropolitanAddress.indexOf('전체') === -1) {
        setDeliveryMetropolitanAddress([event.target.value]);
        /* setDeliveryMetropolitanAddress([...DeliveryMetropolitanAddress, event.target.value]); */
      } else {
        setDeliveryMetropolitanAddress([event.target.value]);
      }
    } else if (DeliveryMetropolitanAddress.length === 1) {
      setDeliveryMetropolitanAddress(['전체']);
    } else {
      setDeliveryMetropolitanAddress(
        DeliveryMetropolitanAddress.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteDeliveryMetropolitanAddress = (props: { key: any }) => {
    const { key } = props;
    if (DeliveryMetropolitanAddress.length === 1 && DeliveryMetropolitanAddress[0] === key) {
      setDeliveryMetropolitanAddress(['전체']);
    } else {
      setDeliveryMetropolitanAddress(
        DeliveryMetropolitanAddress.filter(element => element !== key)
      );
    }
  };
  /* 배달 기초지방자치단체 주소  */
  const [DeliveryElementaryAddress, setDeliveryElementaryAddress] = useState('');
  const onChangeDeliveryElementaryAddress = (event: { target: { value: string } }) => {
    setDeliveryElementaryAddress(event.target.value);
  };
  /* 진료 코드 */
  const [TreatmentCode, setTreatmentCode] = useState('');
  const onChangeTreatmentCode = (event: { target: { value: string } }) => {
    setTreatmentCode(event.target.value);
  };
  /* 조제 코드 */
  const [MedicineCode, setMedicineCode] = useState('');
  const onChangeMedicineCode = (event: { target: { value: string } }) => {
    setMedicineCode(event.target.value);
  };
  /* 데이터 */
  const GetDeliveryListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDeliveryListData = {
      deliveryCode: null || DeliveryCode,
      deliveryType: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod[0],
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      /* FUTUREWORK */
      /* statusList: null || DeliveryState[0] === '전체' ? null : DeliveryState, */
      status: null || DeliveryState[0] === '전체' ? null : DeliveryState[0],
      /* FUTUREWORK */
      /* riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName, */
      riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName[0].code,
      sido: DeliveryMetropolitanAddress[0] === '전체' ? null : DeliveryMetropolitanAddress[0],
      sigungu: null || DeliveryElementaryAddress,
      treatCode: null || TreatmentCode,
      medicineCode: null || MedicineCode,
      patientName: PatientName || PatientName,

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
        Title: '방문/배달 현황 불러오기 실패',
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
    DeliveryCode,
    DeliveryMethod,
    StartInquiryPeriod,
    EndInquiryPeriod,
    DeliveryState,
    DeliveryAgencyName,
    DeliveryMetropolitanAddress,
    DeliveryElementaryAddress,
    TreatmentCode,
    MedicineCode,
    PatientName,
    DeliveryData.PageNavigator,
  ]);
  const GetDeliveryListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDeliveryListData = {
      deliveryCode: null || DeliveryCode,
      deliveryType: null || DeliveryMethod[0] === '전체' ? null : DeliveryMethod[0],
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      /* FUTUREWORK */
      /* statusList: null || DeliveryState[0] === '전체' ? null : DeliveryState, */
      status: null || DeliveryState[0] === '전체' ? null : DeliveryState[0],
      /* FUTUREWORK */
      /* riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName, */
      riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName[0].code,
      sido: DeliveryMetropolitanAddress[0] === '전체' ? null : DeliveryMetropolitanAddress[0],
      sigungu: null || DeliveryElementaryAddress,
      treatCode: null || TreatmentCode,
      medicineCode: null || MedicineCode,
      patientName: PatientName || PatientName,

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
        Name: 'GET_DELIVERY_LIST_EXPORT',
        Title: '방문/배달 현황 데이터 다운로드 실패',
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
    DeliveryCode,
    DeliveryMethod,
    StartInquiryPeriod,
    EndInquiryPeriod,
    DeliveryState,
    DeliveryAgencyName,
    DeliveryMetropolitanAddress,
    DeliveryElementaryAddress,
    TreatmentCode,
    MedicineCode,
    PatientName,
  ]);
  const GetRiderListBasicFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const response = await GetRiderListBasic();
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
      const RiderList = RiderData.RiderListBasicData?.riderList.slice();
      if (RiderList) {
        RiderList.unshift({ code: '', name: '전체' });
        RiderList.unshift({ code: '', name: '선택' });
        RiderData.setRiderListBasicData({ riderList: RiderList });
      }
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DELIVERY_LIST',
        Title: '라이더 현황 불러오기 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [CommonData, RiderData]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetRiderListBasicFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DeliveryData.PageNavigator]);

  /* Socket */
  useEffect(() => {
    if (DeliveryData.SocketDeliveryData?.deliveryList?.length !== 0) {
      GetCurrentTime();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetDeliveryListFunction();
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetRiderListBasicFunction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [DeliveryData.SocketDeliveryData?.deliveryList]);

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
            <TitleTextComponent>방문/배달 현황</TitleTextComponent>
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      방문/배달 코드
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
            {/* DOUBLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      시작 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      종료 조회 기간
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
                <FilterElementTitleFrame minWidth="85px" width="85px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약 수령 방법</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="135px" width="135px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryMethod}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DeliveryMethodList.map(element => (
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
                      약 수령 방법 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="110px" width="110%">
                  <FilterElementBoardComponent>
                    {DeliveryMethod.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== DeliveryMethod.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDeliveryMethod({ key: element })}
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      방문/배달 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
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
                <FilterElementTitleFrame minWidth="120px" width="120px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      방문/배달 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배송 업체 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={event =>
                        onChangeDeliveryAgencyName(
                          event as unknown as { target: { value: string } }
                        )
                      }
                      onKeyPress={onKeyPressEnter}
                    >
                      {RiderData?.RiderListBasicData?.riderList.map(element => (
                        <FilterElementBoardOptionComponent
                          key={`${element?.name} (${element?.code})`}
                          value={JSON.stringify(element)}
                        >
                          {element?.name !== '전체' && element?.name !== '선택'
                            ? `${element?.name} (${element?.code})`
                            : `${element?.name}`}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="120px" width="120px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배송 업체 이름 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {DeliveryAgencyName.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element?.code}
                        margin={key !== DeliveryAgencyName.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteDeliveryAgencyName({ object: element })}
                      >
                        <FilterElementBoardSelectedTextFrame>
                          <FilterElementBoardSelectedTextComponent>
                            {element?.name}
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientName}
                      onChange={onChangePatientName}
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
                <FilterElementTitleFrame minWidth="110px" width="110px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배달 위치 (시/도)
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="110px" width="110px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeDeliveryMetropolitanAddress}
                      onKeyPress={onKeyPressEnter}
                    >
                      {DeliveryMetropolitanAddressList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="135px" width="135px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배달 위치 (시/도) 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="85px" width="85%">
                  <FilterElementBoardComponent>
                    {DeliveryMetropolitanAddress.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={
                          key !== DeliveryMetropolitanAddress.length - 1 ? '0px 5px 0px 0px' : ''
                        }
                        onClick={() => onClickDeleteDeliveryMetropolitanAddress({ key: element })}
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="125px" width="125px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배달 위치 (시/군/구)
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="95px" width="95px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={DeliveryElementaryAddress}
                      onChange={onChangeDeliveryElementaryAddress}
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
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>진료 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
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
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>조제 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
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
          </FilterComponent>
        </FilterFrame>
      ) : null}
      {AdminData.StatisticSwitchFlag ? (
        <StatisticFrame>
          <StatisticComponent>
            {/*  */}
            {StatisticsList.map(element => (
              <StatisticElementFrame key={element}>
                <StatisticElementComponent>
                  <StatisticElementTitleFrame
                    minWidth={`${element.length * 10 + 40}px`}
                    width={`${element.length * 10 + 40}px`}
                  >
                    <StatisticElementTitleComponent>
                      <StatisticElementTitleTextFrame>
                        <StatisticElementTitleTextComponent
                          width="100%"
                          lineHeight="30px"
                          color={
                            element === '전체'
                              ? '#000000'
                              : element === '방문 대기'
                              ? 'rgb(255,64,64)'
                              : element === '조제 대기'
                              ? 'rgb(255,64,64)'
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
                              : element === '취소'
                              ? 'rgb(255,64,64)'
                              : /*  */
                              element === '배달 완료'
                              ? 'rgb(112,173,71)'
                              : element === '배달 취소'
                              ? 'rgb(255,64,64)'
                              : element === '배달 거절'
                              ? 'rgb(255,64,64)'
                              : element === '거절'
                              ? 'rgb(255,64,64)'
                              : /*  */
                                '#000000'
                          }
                        >
                          {element}
                        </StatisticElementTitleTextComponent>
                      </StatisticElementTitleTextFrame>
                    </StatisticElementTitleComponent>
                  </StatisticElementTitleFrame>
                  <StatisticElementBoardFrame
                    minWidth={`${220 - (element.length * 10 + 40)}px`}
                    width={`${220 - (element.length * 10 + 40)}px`}
                  >
                    <StatisticElementBoardComponent>
                      <StatisticElementBoardTextFrame>
                        <StatisticElementBoardTextComponent
                          width="100%"
                          textAlign="right"
                          lineHeight="30px"
                          color={
                            element === '전체'
                              ? '#000000'
                              : element === '방문 대기'
                              ? 'rgb(255,64,64)'
                              : element === '조제 대기'
                              ? 'rgb(255,64,64)'
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
                              : element === '취소'
                              ? 'rgb(255,64,64)'
                              : /*  */
                              element === '배달 완료'
                              ? 'rgb(112,173,71)'
                              : element === '배달 취소'
                              ? 'rgb(255,64,64)'
                              : element === '배달 거절'
                              ? 'rgb(255,64,64)'
                              : element === '거절'
                              ? 'rgb(255,64,64)'
                              : /*  */
                                '#000000'
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
                      </StatisticElementBoardTextFrame>
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
