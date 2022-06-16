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
  FilterElementBoardTextLinkComponent,
  FilterElementBoardInputComponent,
  FilterElementBoardSelectComponent,
  FilterElementBoardOptionComponent,
  FilterElementBoardSelectedComponent,
  FilterElementBoardSelectedTextFrame,
  FilterElementBoardSelectedTextComponent,
  FilterElementBoardSelectedImageFrame,
  FilterElementBoardSelectedImageComponent,
} from 'styles/components/common/Filter';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import { GetPromotionListExport } from 'services/promotion/GetPromotionListExport';
import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData } = useStore();
  /* 필터 스위치 */
  const onChangeFilterSwitchFlag = () => {
    AdminData.setFilterSwitchFlag(!AdminData.FilterSwitchFlag);
  };
  /* 필터 초기화 */
  const onClickFilterRefresh = () => {
    setPromotionCode('');
    setPromotionParticipant(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    GetCurrentTime();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetPromotionListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 필터 */
  /* 프로모션 코드 */
  const [PromotionCode, setPromotionCode] = useState('');
  const onChangePromotionCode = (event: { target: { value: string } }) => {
    setPromotionCode(event.target.value);
  };
  /* 프로모션 참여자 */
  const PromotionParticipantList = ['선택', '전체', '환자', '병원', '약국'];
  const [PromotionParticipant, setPromotionParticipant] = useState<string[]>(['전체']);
  const onChangePromotionParticipant = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setPromotionParticipant([event.target.value]);
    } else if (PromotionParticipant.indexOf(event.target.value) === -1) {
      if (PromotionParticipant.indexOf('전체') === -1) {
        setPromotionParticipant([event.target.value]);
        /* setPromotionParticipant([...PromotionParticipant, event.target.value]); */
      } else {
        setPromotionParticipant([event.target.value]);
      }
    } else if (PromotionParticipant.length === 1) {
      setPromotionParticipant(['전체']);
    } else {
      setPromotionParticipant(
        PromotionParticipant.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeletePromotionParticipant = (props: { key: any }) => {
    const { key } = props;
    if (PromotionParticipant.length === 1 && PromotionParticipant[0] === key) {
      setPromotionParticipant(['전체']);
    } else {
      setPromotionParticipant(PromotionParticipant.filter(element => element !== key));
    }
  };
  /* 데이터 */
  const GetPromotionListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempPromotionParticipant = [];
    if (PromotionParticipant.length !== 0 && PromotionParticipant[0] !== '전체') {
      for (let i = 0; i < PromotionParticipant.length; i += 1) {
        if (PromotionParticipant[i] === '환자') {
          TempPromotionParticipant.push('patient');
        } else if (PromotionParticipant[i] === '병원') {
          TempPromotionParticipant.push('hospital');
        } else if (PromotionParticipant[i] === '약국') {
          TempPromotionParticipant.push('pharmacy');
        }
      }
    }
    const GetPromotionListExportData = {
      promotionType: null || PromotionCode,
      participantRole:
        null || PromotionParticipant[0] === '전체' ? null : TempPromotionParticipant[0],
    };
    const response = await GetPromotionListExport(GetPromotionListExportData);
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_PROMOTION_LIST_EXPORT',
        Title: '프로모션 내역 데이터 다운로드 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [CommonData, PromotionCode, PromotionParticipant]);

  useEffect(() => {
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ENTER */
  const onKeyPressEnter = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onClickFilterDownload();
    }
  };

  return (
    <BoardTitleAndFilterFrame>
      <TitleFrame>
        <TitleComponent>
          {/* 내용 */}
          <TitleTextFrame>
            <TitleTextComponent>프로모션 내역</TitleTextComponent>
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
              <TitleFilterDownloadButtonFrame onClick={onClickFilterDownload}>
                <TitleFilterDownloadButtonComponent>
                  프로모션 결과 데이터 다운로드
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>프로모션 코드</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PromotionCode}
                      onChange={onChangePromotionCode}
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
                <FilterElementTitleFrame minWidth="100px" width="100px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      프로모션 참여자
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="120px" width="120px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangePromotionParticipant}
                      onKeyPress={onKeyPressEnter}
                    >
                      {PromotionParticipantList.map(element => (
                        <FilterElementBoardOptionComponent key={element}>
                          {element}
                        </FilterElementBoardOptionComponent>
                      ))}
                    </FilterElementBoardSelectComponent>
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="120px" width="125px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      프로모션 참여자 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="95px" width="95%">
                  <FilterElementBoardComponent>
                    {PromotionParticipant.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== PromotionParticipant.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeletePromotionParticipant({ key: element })}
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
            {/* SINGLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent>
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>프로모션 참고</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" /* width="130px" */>
                  <FilterElementBoardComponent>
                    <FilterElementBoardTextLinkComponent
                      width="100%"
                      color="#1338BE"
                      whiteSpace="pre"
                      onClick={() => {
                        window.open(
                          'https://www.notion.so/104fb191c869499a90c11c6b25109444?v=ff3520eb190f4f1ebd30630bc92dc68b'
                        );
                      }}
                    >
                      https://www.notion.so/104fb191c869499a90c11c6b25109444?v=ff3520eb190f4f1ebd30630bc92dc68b
                    </FilterElementBoardTextLinkComponent>
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
