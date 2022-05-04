import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';
import useWindowDimensions from 'styles/device/useWindowDimensions';
import { useHistory, useLocation } from 'react-router-dom';

import LogoIcon from 'assets/icons/LogoIcon.png';
import LogOutIcon from 'assets/icons/LogOutIcon.svg';
import MinusIcon from 'assets/icons/MinusIcon.svg';
import PlusIcon from 'assets/icons/PlusIcon.svg';

import {
  GlobalNavigationBarTitleComponent,
  GlobalNavigationBarTitleMainFrame,
  GlobalNavigationBarTitleSubFrame,
  GlobalNavigationBarLogoImageFrame,
  GlobalNavigationBarLogoImageComponent,
  GlobalNavigationBarTitleTextFrame,
  GlobalNavigationBarTitleTextComponent,
  GlobalNavigationBarShowContentImageFrame,
  GlobalNavigationBarShowContentImageComponent,
  GlobalNavigationBarShortCutFrame,
  GlobalNavigationBarShortCutComponent,
  GlobalNavigationBarShortCutTextComponent,
  GlobalNavigationBarContentOpeningComponent,
  GlobalNavigationBarContentClosingComponent,
  GlobalNavigationBarContentTitlesComponent,
  GlobalNavigationBarContentTitleComponent,
  GlobalNavigationBarContentTitleTextComponent,
  GlobalNavigationBarLogoutImageFrame,
  GlobalNavigationBarLogoutImageComponent,
} from 'styles/components/common/GlobalNavigation';
import {
  LocationNavigationBarFrame,
  LocationNavigationBarTitleFrame,
  LocationNavigationBarTitleComponent,
  LocationNavigationBarTitleTextFrame,
  LocationNavigationBarTitleTextComponent,
  LocationNavigationBarContentFrame,
} from 'styles/components/common/LocationNavigation';

import { PostAuthLogout } from 'services/login/PostAuthLogOut';

const TreatmentLeftNavigationBar = observer(() => {
  const { CommonData } = useStore();
  const history = useHistory();
  const location = useLocation();

  const { width } = useWindowDimensions();

  const GlobalNavigationBarTitleList = [
    [{ name: '홈', path: '/home' }],
    [
      { name: '환자 관리', path: '/patient_management' },
      { name: '의사 관리', path: '/doctor_management' },
      { name: '병원 관리', path: '/hospital_management' },
      { name: '약국 관리', path: '/pharmacy_management' },
    ],
    [
      { name: '진료 관리', path: '/treatment_management' },
      { name: '조제 관리', path: '/medicine_management' },
      { name: '배달 관리', path: '/delivery_management' },
      { name: '결제 관리', path: '/payment_management' },
    ],
    [
      { name: '정산 관리', path: '/settlement_management' },
      { name: '마케팅 관리', path: '/marketing_management' },
      { name: '광고 관리', path: '/advertisement_management' },
      { name: '리뷰 관리', path: '/review_management' },
    ],
    [
      { name: '지표 관리', path: '/indicator_management' },
      { name: '공지사항 관리', path: '/notice_management' },
      { name: '계정 관리', path: '/account_management' },
      { name: '시스템 관리', path: '/system_management' },
    ],
  ];

  const [GlobalNavigationBarState, setGlobalNavigationBarState] = useState('CLOSE');

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (GlobalNavigationBarState === 'CLOSING') {
      const interval = setInterval(() => {
        setGlobalNavigationBarState('CLOSE');
      }, 250);
      return () => clearInterval(interval);
    }
  }, [GlobalNavigationBarState]);

  const onClickGlobalNavigationBarMenu = (props: { firstKey: number; secondKey: number }) => {
    const { firstKey, secondKey } = props;
    if (location.pathname.indexOf(GlobalNavigationBarTitleList[firstKey][secondKey].path) !== -1) {
      /* history.push({ pathname: "/home" }); */
    } else {
      history.push({
        pathname: GlobalNavigationBarTitleList[firstKey][secondKey].path,
        state: { initiate: true },
      });
    }

    setGlobalNavigationBarState('CLOSING');
  };

  /*  */
  const keyDownEvent = useCallback(
    (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        if (GlobalNavigationBarState === 'OPENING') {
          setGlobalNavigationBarState('CLOSING');
        }
      }
    },
    [GlobalNavigationBarState]
  );
  /*  */

  useEffect(() => {
    document.addEventListener('keydown', keyDownEvent, false);
    return () => {
      document.removeEventListener('keydown', keyDownEvent, false);
    };
  }, [keyDownEvent]);

  const PostAuthLogOutFunction = useCallback(async () => {
    CommonData.setLoadingFlag(true);
    const response = await PostAuthLogout();
    CommonData.setLoadingFlag(false);
    if (response.status === 200) {
      history.push({ pathname: '/login' });
    } else {
      const PopUpData = {
        Category: 'ERROR',
        Name: 'POST_AUTH_LOGOUT',
        Title: '관리자 로그아웃 실패',
        Contents: response.data.message
          ? [response.data.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
    }
  }, [CommonData, history]);

  const onClickLogout = () => {
    PostAuthLogOutFunction().finally(undefined);
  };

  return (
    <LocationNavigationBarFrame>
      <LocationNavigationBarTitleFrame>
        <LocationNavigationBarTitleComponent>
          <LocationNavigationBarTitleTextFrame>
            <LocationNavigationBarTitleTextComponent>
              진료 관리
            </LocationNavigationBarTitleTextComponent>
          </LocationNavigationBarTitleTextFrame>
        </LocationNavigationBarTitleComponent>
      </LocationNavigationBarTitleFrame>
      <LocationNavigationBarContentFrame />
    </LocationNavigationBarFrame>
  );
});

export default TreatmentLeftNavigationBar;
