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

import { GetDeliveryLinkList } from 'services/delivery/GetDeliveryLinkList';

import { GetRiderListBasic } from 'services/rider/GetRiderListBasic';

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
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
    setPharmacyCode('');
    setPharmacyName('');
    setPharmacyPhoneNumber('');
    setDeliveryAgencyName([{ code: '', name: '전체' }]);
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryLinkListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetRiderListBasicFunction();
    DeliveryData.setPageNavigator(1);
    DeliveryData.setParagraphNavigator(1);
  };
  /* 필터 */
  /* 약국 번호 */
  const [PharmacyCode, setPharmacyCode] = useState('');
  const onChangePharmacyCode = (event: { target: { value: string } }) => {
    setPharmacyCode(event.target.value);
  };
  /* 약국 이름 */
  const [PharmacyName, setPharmacyName] = useState('');
  const onChangePharmacyName = (event: { target: { value: string } }) => {
    setPharmacyName(event.target.value);
  };
  /* 약국 전화번호 */
  const [PharmacyPhoneNumber, setPharmacyPhoneNumber] = useState('');
  const onChangePharmacyPhoneNumber = (event: { target: { value: string } }) => {
    setPharmacyPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
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

  /* 데이터 */
  const GetDeliveryLinkListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetDeliveryLinkListData = {
      pharmacyCode: null || PharmacyCode,
      pharmacyName: null || PharmacyName,
      pharmacyPhoneNum: null || PharmacyPhoneNumber,
      /* FUTUREWORK */
      /* riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName, */
      riderCode: null || DeliveryAgencyName[0].name === '전체' ? null : DeliveryAgencyName[0].code,

      page: null || DeliveryData.PageNavigator - 1,
    };
    const response = await GetDeliveryLinkList(GetDeliveryLinkListData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_DELIVERY_LINK_LIST',
        Title: '배달 운영 불러오기 실패',
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
    DeliveryData.PageNavigator,
    PharmacyCode,
    PharmacyName,
    PharmacyPhoneNumber,
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
        Title: '라이더 운영 불러오기 실패',
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
    GetDeliveryLinkListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetRiderListBasicFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetDeliveryLinkListFunction();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetRiderListBasicFunction();
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
            <TitleTextComponent>배달 운영</TitleTextComponent>
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
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약국 번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PharmacyCode}
                      onChange={onChangePharmacyCode}
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
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약국 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PharmacyName}
                      onChange={onChangePharmacyName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>약국 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PharmacyPhoneNumber}
                      onChange={onChangePharmacyPhoneNumber}
                      placeholder="숫자만 입력해 주세요."
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      배송 업체 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  {' '}
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
                      <StatisticElementTitleTextComponent
                        width="100%"
                        lineHeight="30px"
                        color={element === '전체' ? '#000000' : '#000000'}
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
                        color={element === '전체' ? '#000000' : '#000000'}
                      >
                        {element === '전체'
                          ? DeliveryData.DeliveryLinkListData?.count?.total
                            ? `${ConvertCommaNumber(
                                DeliveryData.DeliveryLinkListData?.count?.total.toString()
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
