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
} from 'styles/components/common/Filter';
/* 통계 */

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { AllowDate } from 'libraries/constraint/AllowDate';

import { GetSettlementHospitalListFile } from 'services/settlement/GetSettlementHospitalListFile';
import { GetSettlementPharmacyListFile } from 'services/settlement/GetSettlementPharmacyListFile';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { AllowDateDifference } from 'libraries/constraint/AllowDateDifference';
import moment from 'moment';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData } = useStore();
  /* 필터 스위치 */
  const onChangeFilterSwitchFlag = () => {
    AdminData.setFilterSwitchFlag(!AdminData.FilterSwitchFlag);
  };
  /* 필터 초기화 */
  const onClickFilterRefresh = () => {
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = (props: any) => {
    const { type } = props;
    GetCurrentTime();
    if (
      !StartInquiryPeriod ||
      !EndInquiryPeriod ||
      StartInquiryPeriod.length !== 8 ||
      EndInquiryPeriod.length !== 8 ||
      !AllowDate(StartInquiryPeriod) ||
      !AllowDate(EndInquiryPeriod) ||
      AllowDateDifference({
        previous: StartInquiryPeriod,
        next: EndInquiryPeriod,
        format: 'YYYYMMDD',
        unit: 'days',
      }) < 0 ||
      AllowDateDifference({
        previous: StartInquiryPeriod,
        next: moment(CommonData.CurrentTime, 'YYYYMMDDHHmmss').format('YYYYMMDD'),
        format: 'YYYYMMDD',
        unit: 'days',
      }) < 0 ||
      AllowDateDifference({
        previous: moment(CommonData.CurrentTime, 'YYYYMMDDHHmmss').format('YYYYMMDD'),
        next: EndInquiryPeriod,
        format: 'YYYYMMDD',
        unit: 'days',
      }) > 0
    ) {
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_SETTLEMENT_LIST_FILE',
        Title: '정산 내역 데이터 다운로드 실패',
        Contents: [
          '날짜를 다시 확인해 주세요.',
          '정산 내역 구간에 대한 시작 조회 기간 날짜, 그리고 종료 조회 기간 날짜를 정확하게 기입해 주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    } else if (type === '병원') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetSettlementHospitalListFileFunction();
    } else if (type === '약국') {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      GetSettlementPharmacyListFileFunction();
    }
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 필터 */
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
  /* 데이터 */
  const GetSettlementHospitalListFileFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetSettlementHospitalListFileData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
    };
    const response = await GetSettlementHospitalListFile(GetSettlementHospitalListFileData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_SETTLEMENT_HOSPITAL_LIST_FILE',
        Title: '병원 정산 내역 데이터 다운로드 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [CommonData, EndInquiryPeriod, StartInquiryPeriod]);
  const GetSettlementPharmacyListFileFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const GetSettlementPharmacyListFileData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
    };
    const response = await GetSettlementPharmacyListFile(GetSettlementPharmacyListFileData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_SETTLEMENT_PHARMACY_LIST_FILE',
        Title: '약국 정산 내역 데이터 다운로드 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [CommonData, EndInquiryPeriod, StartInquiryPeriod]);

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoardTitleAndFilterFrame>
      <TitleFrame>
        <TitleComponent>
          {/* 내용 */}
          <TitleTextFrame>
            <TitleTextComponent>정산 내역</TitleTextComponent>
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
              <TitleFilterDownloadButtonFrame
                onClick={() => onClickFilterDownload({ type: '병원' })}
              >
                <TitleFilterDownloadButtonComponent>
                  병원 정산 내역 데이터 다운로드
                </TitleFilterDownloadButtonComponent>
              </TitleFilterDownloadButtonFrame>
            </TitleFilterDownloadFrame>
          ) : null}
          {/* 데이터 다운로드 */}
          {AdminData.FilterSwitchFlag ? (
            <TitleFilterDownloadFrame>
              <TitleFilterDownloadButtonFrame
                onClick={() => onClickFilterDownload({ type: '약국' })}
              >
                <TitleFilterDownloadButtonComponent>
                  약국 정산 내역 데이터 다운로드
                </TitleFilterDownloadButtonComponent>
              </TitleFilterDownloadButtonFrame>
            </TitleFilterDownloadFrame>
          ) : null}
          {/*  */}
        </TitleComponent>
      </TitleFrame>
      {AdminData.FilterSwitchFlag ? (
        <FilterFrame>
          <FilterComponent>
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
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
          </FilterComponent>
        </FilterFrame>
      ) : null}
    </BoardTitleAndFilterFrame>
  );
});

export default BoardTitleAndFilter;
