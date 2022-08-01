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
  /* 알림 발송 */
  TitleSendAlarmFrame,
  TitleSendAlarmButtonFrame,
  TitleSendAlarmButtonComponent,
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

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';

import { GetAdminHospitalAdditionDetailsList } from 'services/admin/hospitalAddition/GetAdminHospitalAdditionDetailsList';
import { GetAdminHospitalAdditionDetailsListExport } from 'services/admin/hospitalAddition/GetAdminHospitalAdditionDetailsListExport';
import { PostAdminHospitalAdditionNotification } from 'services/admin/hospitalAddition/PostAdminHospitalAdditionNotification';

import { GetCurrentTime } from 'libraries/time/GetCurrentTime';
import { ConvertCommaNumber } from 'libraries/conversion/ConvertCommaNumber';
/*  */
const BoardTitleAndFilter = observer(() => {
  const { CommonData, AdminData, HospitalData, AlarmData } = useStore();
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
    setStartInquiryPeriod('');
    setEndInquiryPeriod('');
    setAlarmNotificationState(['전체']);
    setAlarmAgreementState(['전체']);
    setRequestHospitalName('');
    setRequestHospitalMetropolitanAddress(['전체']);
    setRequestHospitalElementaryAddress('');
    setPatientName('');
    setPatientPhoneNumber('');
    setPatientAddress('');
    setHospitalName('');
    setHospitalPhoneNumber('');
    setRequestHospitalLinkState(['전체']);
  };
  /* 데이터 다운로드 */
  const onClickFilterDownload = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminHospitalAdditionDetailsListExportFunction();
  };
  /* 새로고침 */
  const onClickPageRefresh = () => {
    window.location.replace(window.location.href);
  };
  /* 검색 */
  const onClickSearch = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminHospitalAdditionDetailsListFunction();
    HospitalData.setPageNavigator(1);
    HospitalData.setParagraphNavigator(1);
  };
  /* 알림 발송 */
  const onClickSendAlarm = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    PostAdminHospitalAdditionNotificationFunction();
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
  /* 알림 발송 상태 */
  const AlarmNotificationStateList = ['선택', '전체', 'O', 'X'];
  const [AlarmNotificationState, setAlarmNotificationState] = useState<string[]>(['전체']);
  const onChangeAlarmNotificationState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setAlarmNotificationState([event.target.value]);
    } else if (AlarmNotificationState.indexOf(event.target.value) === -1) {
      if (AlarmNotificationState.indexOf('전체') === -1) {
        setAlarmNotificationState([event.target.value]);
        /* setAlarmNotificationState([...AlarmNotificationState, event.target.value]); */
      } else {
        setAlarmNotificationState([event.target.value]);
      }
    } else if (AlarmNotificationState.length === 1) {
      setAlarmNotificationState(['전체']);
    } else {
      setAlarmNotificationState(
        AlarmNotificationState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteAlarmNotificationState = (props: { key: any }) => {
    const { key } = props;
    if (AlarmNotificationState.length === 1 && AlarmNotificationState[0] === key) {
      setAlarmNotificationState(['전체']);
    } else {
      setAlarmNotificationState(AlarmNotificationState.filter(element => element !== key));
    }
  };
  /* 알림 동의 상태 */
  const AlarmAgreementStateList = ['선택', '전체', 'O', 'X'];
  const [AlarmAgreementState, setAlarmAgreementState] = useState<string[]>(['전체']);
  const onChangeAlarmAgreementState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setAlarmAgreementState([event.target.value]);
    } else if (AlarmAgreementState.indexOf(event.target.value) === -1) {
      if (AlarmAgreementState.indexOf('전체') === -1) {
        setAlarmAgreementState([event.target.value]);
        /* setAlarmAgreementState([...AlarmAgreementState, event.target.value]); */
      } else {
        setAlarmAgreementState([event.target.value]);
      }
    } else if (AlarmAgreementState.length === 1) {
      setAlarmAgreementState(['전체']);
    } else {
      setAlarmAgreementState(AlarmAgreementState.filter(element => element !== event.target.value));
    }
  };
  const onClickDeleteAlarmAgreementState = (props: { key: any }) => {
    const { key } = props;
    if (AlarmAgreementState.length === 1 && AlarmAgreementState[0] === key) {
      setAlarmAgreementState(['전체']);
    } else {
      setAlarmAgreementState(AlarmAgreementState.filter(element => element !== key));
    }
  };
  /* 요청 병원 이름 */
  const [RequestHospitalName, setRequestHospitalName] = useState('');
  const onChangeRequestHospitalName = (event: { target: { value: string } }) => {
    setRequestHospitalName(event.target.value);
  };
  /* 요청 병원 특별지방자치단체 주소 */
  const RequestHospitalMetropolitanAddressList = [
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
  const [RequestHospitalMetropolitanAddress, setRequestHospitalMetropolitanAddress] = useState<
    string[]
  >(['전체']);
  const onChangeRequestHospitalMetropolitanAddress = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setRequestHospitalMetropolitanAddress([event.target.value]);
    } else if (RequestHospitalMetropolitanAddress.indexOf(event.target.value) === -1) {
      if (RequestHospitalMetropolitanAddress.indexOf('전체') === -1) {
        setRequestHospitalMetropolitanAddress([event.target.value]);
        /* setRequestHospitalMetropolitanAddress([...RequestHospitalMetropolitanAddress, event.target.value]); */
      } else {
        setRequestHospitalMetropolitanAddress([event.target.value]);
      }
    } else if (RequestHospitalMetropolitanAddress.length === 1) {
      setRequestHospitalMetropolitanAddress(['전체']);
    } else {
      setRequestHospitalMetropolitanAddress(
        RequestHospitalMetropolitanAddress.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteRequestHospitalMetropolitanAddress = (props: { key: any }) => {
    const { key } = props;
    if (
      RequestHospitalMetropolitanAddress.length === 1 &&
      RequestHospitalMetropolitanAddress[0] === key
    ) {
      setRequestHospitalMetropolitanAddress(['전체']);
    } else {
      setRequestHospitalMetropolitanAddress(
        RequestHospitalMetropolitanAddress.filter(element => element !== key)
      );
    }
  };
  /* 요청 병원 기초지방자치단체 주소  */
  const [RequestHospitalElementaryAddress, setRequestHospitalElementaryAddress] = useState('');
  const onChangeRequestHospitalElementaryAddress = (event: { target: { value: string } }) => {
    setRequestHospitalElementaryAddress(event.target.value);
  };
  /* 환자 이름 */
  const [PatientName, setPatientName] = useState('');
  const onChangePatientName = (event: { target: { value: string } }) => {
    setPatientName(event.target.value);
  };
  /* 환자 전화번호 */
  const [PatientPhoneNumber, setPatientPhoneNumber] = useState('');
  const onChangePatientPhoneNumber = (event: { target: { value: string } }) => {
    setPatientPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
  };
  /* 환자 주소 */
  const [PatientAddress, setPatientAddress] = useState('');
  const onChangePatientAddress = (event: { target: { value: string } }) => {
    setPatientAddress(event.target.value);
  };
  /* 병원 이름 */
  const [HospitalName, setHospitalName] = useState('');
  const onChangeHospitalName = (event: { target: { value: string } }) => {
    setHospitalName(event.target.value);
  };
  /* 병원 전화번호 */
  const [HospitalPhoneNumber, setHospitalPhoneNumber] = useState('');
  const onChangeHospitalPhoneNumber = (event: { target: { value: string } }) => {
    setHospitalPhoneNumber(ConvertContactNumber(AllowNumber(event.target.value)));
  };
  /* 병원 연결 상태 */
  const RequestHospitalLinkStateList = ['선택', '전체', 'O', 'X'];
  const [RequestHospitalLinkState, setRequestHospitalLinkState] = useState<string[]>(['전체']);
  const onChangeRequestHospitalLinkState = (event: { target: { value: string } }) => {
    if (event.target.value === '전체') {
      setRequestHospitalLinkState([event.target.value]);
    } else if (RequestHospitalLinkState.indexOf(event.target.value) === -1) {
      if (RequestHospitalLinkState.indexOf('전체') === -1) {
        setRequestHospitalLinkState([event.target.value]);
        /* setRequestHospitalLinkState([...RequestHospitalLinkState, event.target.value]); */
      } else {
        setRequestHospitalLinkState([event.target.value]);
      }
    } else if (RequestHospitalLinkState.length === 1) {
      setRequestHospitalLinkState(['전체']);
    } else {
      setRequestHospitalLinkState(
        RequestHospitalLinkState.filter(element => element !== event.target.value)
      );
    }
  };
  const onClickDeleteRequestHospitalLinkState = (props: { key: any }) => {
    const { key } = props;
    if (RequestHospitalLinkState.length === 1 && RequestHospitalLinkState[0] === key) {
      setRequestHospitalLinkState(['전체']);
    } else {
      setRequestHospitalLinkState(RequestHospitalLinkState.filter(element => element !== key));
    }
  };
  /* 데이터 */
  const GetAdminHospitalAdditionDetailsListFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempAlarmNotificationState = [];
    if (AlarmNotificationState.length !== 0 && AlarmNotificationState[0] !== '전체') {
      for (let i = 0; i < AlarmNotificationState.length; i += 1) {
        if (AlarmNotificationState[i] === 'O') {
          TempAlarmNotificationState.push(true);
        } else if (AlarmNotificationState[i] === 'X') {
          TempAlarmNotificationState.push(false);
        }
      }
    }
    const TempAlarmAgreementState = [];
    if (AlarmAgreementState.length !== 0 && AlarmAgreementState[0] !== '전체') {
      for (let i = 0; i < AlarmAgreementState.length; i += 1) {
        if (AlarmAgreementState[i] === 'O') {
          TempAlarmAgreementState.push(true);
        } else if (AlarmAgreementState[i] === 'X') {
          TempAlarmAgreementState.push(false);
        }
      }
    }
    const TempRequestHospitalLinkState = [];
    if (RequestHospitalLinkState.length !== 0 && RequestHospitalLinkState[0] !== '전체') {
      for (let i = 0; i < RequestHospitalLinkState.length; i += 1) {
        if (RequestHospitalLinkState[i] === 'O') {
          TempRequestHospitalLinkState.push(true);
        } else if (RequestHospitalLinkState[i] === 'X') {
          TempRequestHospitalLinkState.push(false);
        }
      }
    }
    const GetAdminHospitalAdditionDetailsListData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      isSendNoti: AlarmNotificationState[0] === '전체' ? null : TempAlarmNotificationState[0],
      isAgreeNoti: AlarmAgreementState[0] === '전체' ? null : TempAlarmAgreementState[0],
      hospitalName: null || RequestHospitalName,
      hospitalSido:
        RequestHospitalMetropolitanAddress[0] === '전체'
          ? null
          : RequestHospitalMetropolitanAddress[0],
      hospitalSigungu: null || RequestHospitalElementaryAddress,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      patientJibunAddress: null || PatientAddress,
      regHospitalName: null || HospitalName,
      regHospitalPhoneNum: null || HospitalPhoneNumber,
      isRegistered: RequestHospitalLinkState[0] === '전체' ? null : TempRequestHospitalLinkState[0],

      size: 20,
      from: HospitalData.PageNavigator ? (HospitalData.PageNavigator - 1) * 20 : undefined,

      sortOption: 'created-date-time',
      sortType: 'desc',
    };
    const response = await GetAdminHospitalAdditionDetailsList(
      GetAdminHospitalAdditionDetailsListData
    );
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_ADMIN_HOSPITAL_ADDITION_DETAILS_LIST',
        Title: '병원 추가 요청 내역 불러오기 실패',
        Contents: MetaError?.data?.message
          ? [MetaError?.data?.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    AlarmAgreementState,
    AlarmNotificationState,
    CommonData,
    EndInquiryPeriod,
    HospitalData.PageNavigator,
    HospitalName,
    HospitalPhoneNumber,
    PatientAddress,
    PatientName,
    PatientPhoneNumber,
    RequestHospitalElementaryAddress,
    RequestHospitalLinkState,
    RequestHospitalMetropolitanAddress,
    RequestHospitalName,
    StartInquiryPeriod,
  ]);
  const GetAdminHospitalAdditionDetailsListExportFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempAlarmNotificationState = [];
    if (AlarmNotificationState.length !== 0 && AlarmNotificationState[0] !== '전체') {
      for (let i = 0; i < AlarmNotificationState.length; i += 1) {
        if (AlarmNotificationState[i] === 'O') {
          TempAlarmNotificationState.push(true);
        } else if (AlarmNotificationState[i] === 'X') {
          TempAlarmNotificationState.push(false);
        }
      }
    }
    const TempAlarmAgreementState = [];
    if (AlarmAgreementState.length !== 0 && AlarmAgreementState[0] !== '전체') {
      for (let i = 0; i < AlarmAgreementState.length; i += 1) {
        if (AlarmAgreementState[i] === 'O') {
          TempAlarmAgreementState.push(true);
        } else if (AlarmAgreementState[i] === 'X') {
          TempAlarmAgreementState.push(false);
        }
      }
    }
    const TempRequestHospitalLinkState = [];
    if (RequestHospitalLinkState.length !== 0 && RequestHospitalLinkState[0] !== '전체') {
      for (let i = 0; i < RequestHospitalLinkState.length; i += 1) {
        if (RequestHospitalLinkState[i] === 'O') {
          TempRequestHospitalLinkState.push(true);
        } else if (RequestHospitalLinkState[i] === 'X') {
          TempRequestHospitalLinkState.push(false);
        }
      }
    }
    const GetAdminHospitalAdditionDetailsListExportData = {
      startDate: null || StartInquiryPeriod,
      endDate: null || EndInquiryPeriod,
      isSendNoti: AlarmNotificationState[0] === '전체' ? null : TempAlarmNotificationState[0],
      isAgreeNoti: AlarmAgreementState[0] === '전체' ? null : TempAlarmAgreementState[0],
      hospitalName: null || RequestHospitalName,
      hospitalSido:
        RequestHospitalMetropolitanAddress[0] === '전체'
          ? null
          : RequestHospitalMetropolitanAddress[0],
      hospitalSigungu: null || RequestHospitalElementaryAddress,
      patientName: null || PatientName,
      patientPhoneNum: null || PatientPhoneNumber,
      patientJibunAddress: null || PatientAddress,
      regHospitalName: null || HospitalName,
      regHospitalPhoneNum: null || HospitalPhoneNumber,
      isRegistered: RequestHospitalLinkState[0] === '전체' ? null : TempRequestHospitalLinkState[0],

      /* size: 20,
      from: HospitalData.PageNavigator ? (HospitalData.PageNavigator - 1) * 20 : undefined, */
    };
    const response = await GetAdminHospitalAdditionDetailsListExport(
      GetAdminHospitalAdditionDetailsListExportData
    );
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      /*  */
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'GET_ADMIN_HOSPITAL_ADDITION_DETAILS_LIST_EXPORT',
        Title: '병원 추가 요청 내역 데이터 다운로드 실패',
        Contents: MetaError?.data?.message
          ? [MetaError?.data?.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [
    AlarmAgreementState,
    AlarmNotificationState,
    CommonData,
    EndInquiryPeriod,
    HospitalName,
    HospitalPhoneNumber,
    PatientAddress,
    PatientName,
    PatientPhoneNumber,
    RequestHospitalElementaryAddress,
    RequestHospitalLinkState,
    RequestHospitalMetropolitanAddress,
    RequestHospitalName,
    StartInquiryPeriod,
  ]);
  const PostAdminHospitalAdditionNotificationFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const TempCodeList = [];
    for (let i = 0; i < HospitalData.AdminHospitalAdditionNotificationData.length; i += 1) {
      TempCodeList.push(HospitalData.AdminHospitalAdditionNotificationData[i].code);
    }
    const PostAdminHospitalAdditionNotificationData = {
      codeList: TempCodeList,
    };
    const response = await PostAdminHospitalAdditionNotification(
      PostAdminHospitalAdditionNotificationData
    );
    CommonData.setLoadingFlag(false);
    if (response.status === 201) {
      /*  */
      if (response.data.result !== 0) {
        const MetaError = response as {
          status: number;
          data: { result: number; message: { body: string } };
        };
        const PopUpData = {
          Category: 'ERROR',
          Name: 'POST_ADMIN_HOSPITAL_ADDITION_NOTIFICATION',
          Title: '병원 추가 요청 알림 발송 실패',
          Contents: MetaError?.data?.message?.body
            ? [MetaError?.data?.message?.body]
            : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
          Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
        };
        CommonData.setPopUpData(PopUpData);
        CommonData.setPopUpFlag(true);
      } else {
        GetCurrentTime();
        AlarmData.pushAlarmListData({
          ID: `PUSH_ADMIN_HOSPITAL_ADDITION_NOTIFICATION_${CommonData.CurrentTime.substring(
            0,
            14
          )}`,
          Code: '',
          Title: '병원 추가 요청 알림 발송',
          TitleDesign: { backGroundColor: '#00B264', color: '#FFFFFF' },

          Descriptions: [
            `추가 요청 코드 ${PostAdminHospitalAdditionNotificationData.codeList.join(
              `, `
            )}(으)로 병원 추가 요청 알림이 발송되었습니다.`,
          ],
          DescriptionsDesign: { backGroundColor: '#00B264', color: '#FFFFFF' },

          Seconds: 10,
        });
      }
    } else {
      const MetaError = response as {
        status: number;
        data: { result: number; message: { body: string } };
      };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'POST_ADMIN_HOSPITAL_ADDITION_NOTIFICATION',
        Title: '병원 추가 요청 알림 발송 실패',
        Contents: MetaError?.data?.message?.body
          ? [MetaError?.data?.message?.body]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [AlarmData, CommonData, HospitalData.AdminHospitalAdditionNotificationData]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    GetAdminHospitalAdditionDetailsListFunction();
    GetCurrentTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [HospitalData.PageNavigator]);

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
            <TitleTextComponent>병원 추가 요청 내역</TitleTextComponent>
          </TitleTextFrame>
          {/*  */}
          {/* 페이지 세로고침 */}
          <TitlePageRefreshFrame>
            <TitlePageRefreshButtonFrame onClick={onClickPageRefresh}>
              <TitlePageRefreshButtonComponent>페이지 새로고침</TitlePageRefreshButtonComponent>
            </TitlePageRefreshButtonFrame>
          </TitlePageRefreshFrame>
          {/* 알림 발송 */}
          <TitleSendAlarmFrame>
            <TitleSendAlarmButtonFrame onClick={onClickSendAlarm}>
              <TitleSendAlarmButtonComponent>알림 발송</TitleSendAlarmButtonComponent>
            </TitleSendAlarmButtonFrame>
          </TitleSendAlarmFrame>
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
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      알림 발송 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeAlarmNotificationState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {AlarmNotificationStateList.map(element => (
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
                      알림 발송 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {AlarmNotificationState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== AlarmNotificationState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteAlarmNotificationState({ key: element })}
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
                      알림 동의 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeAlarmAgreementState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {AlarmAgreementStateList.map(element => (
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
                      알림 동의 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {AlarmAgreementState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={key !== AlarmAgreementState.length - 1 ? '0px 5px 0px 0px' : ''}
                        onClick={() => onClickDeleteAlarmAgreementState({ key: element })}
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
              <FilterElementComponent margin="0px 1px 0px 0px">
                <FilterElementTitleFrame minWidth="95px" width="95px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      요청 병원 이름
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={RequestHospitalName}
                      onChange={onChangeRequestHospitalName}
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
                      병원 위치 (시/도)
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="110px" width="110px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeRequestHospitalMetropolitanAddress}
                      onKeyPress={onKeyPressEnter}
                    >
                      {RequestHospitalMetropolitanAddressList.map(element => (
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
                      병원 위치 (시/도) 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="85px" width="85%">
                  <FilterElementBoardComponent>
                    {RequestHospitalMetropolitanAddress.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={
                          key !== RequestHospitalMetropolitanAddress.length - 1
                            ? '0px 5px 0px 0px'
                            : ''
                        }
                        onClick={() =>
                          onClickDeleteRequestHospitalMetropolitanAddress({ key: element })
                        }
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
                <FilterElementTitleFrame minWidth="125px" width="125px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>
                      병원 위치 (시/군/구)
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="95px" width="95px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={RequestHospitalElementaryAddress}
                      onChange={onChangeRequestHospitalElementaryAddress}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
            </FilterElementFrame>
            {/*  */}
            {/* TRIPLE INPUT */}
            <FilterElementFrame>
              <FilterElementComponent margin="0px 1px 0px 0px">
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
              <FilterElementComponent margin="0px 1px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientPhoneNumber}
                      onChange={onChangePatientPhoneNumber}
                      placeholder="숫자만 입력해 주세요."
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="70px" width="70px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>환자 주소</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={PatientAddress}
                      onChange={onChangePatientAddress}
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
                    <FilterElementTitleTextComponent>병원 이름</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="150px" width="150px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalName}
                      onChange={onChangeHospitalName}
                      onKeyPress={onKeyPressEnter}
                    />
                  </FilterElementBoardComponent>
                </FilterElementBoardFrame>
              </FilterElementComponent>
              <FilterElementComponent margin="0px 0px 0px 1px">
                <FilterElementTitleFrame minWidth="90px" width="90px">
                  <FilterElementTitleComponent>
                    <FilterElementTitleTextComponent>병원 전화번호</FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="130px" width="130px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardInputComponent
                      width="100%"
                      value={HospitalPhoneNumber}
                      onChange={onChangeHospitalPhoneNumber}
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
                      병원 연결 상태
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="125px" width="125px">
                  <FilterElementBoardComponent>
                    <FilterElementBoardSelectComponent
                      width="100%"
                      value="선택"
                      onChange={onChangeRequestHospitalLinkState}
                      onKeyPress={onKeyPressEnter}
                    >
                      {RequestHospitalLinkStateList.map(element => (
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
                      병원 연결 상태 선택
                    </FilterElementTitleTextComponent>
                  </FilterElementTitleComponent>
                </FilterElementTitleFrame>
                <FilterElementBoardFrame minWidth="100px" width="100%">
                  <FilterElementBoardComponent>
                    {RequestHospitalLinkState.map((element, key) => (
                      <FilterElementBoardSelectedComponent
                        key={element}
                        margin={
                          key !== RequestHospitalLinkState.length - 1 ? '0px 5px 0px 0px' : ''
                        }
                        onClick={() => onClickDeleteRequestHospitalLinkState({ key: element })}
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
                          color={element === '전체' ? '#000000' : '#000000'}
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
                          color={element === '전체' ? '#000000' : '#000000'}
                        >
                          {element === '전체'
                            ? HospitalData.AdminHospitalAdditionDetailsListData?.count?.total
                              ? `${ConvertCommaNumber(
                                  HospitalData.AdminHospitalAdditionDetailsListData?.count?.total.toString()
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
