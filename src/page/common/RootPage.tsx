/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';
import { Route, useHistory } from 'react-router-dom';

import { RootFrame } from 'styles/components/common/Frame';

import Loading from 'components/loading/Loading';
import PopUp from 'components/popup/PopUp';

import LogInPage from 'page/login/LogInPage';
import Common from 'page/common/Common';

import { PostAuthLogIn } from 'services/login/PostAuthLogIn';
import { PostAuthAdminLogIn } from 'services/login/PostAuthAdminLogIn';

const RootPage = observer(() => {
  const { CommonData, AdminData } = useStore();

  const history = useHistory();

  const PostAuthLogInFunction = useCallback(async () => {
    const PostAuthLogInData = {
      username: sessionStorage.getItem('LogInUserID'),
      password: sessionStorage.getItem('LogInUserPassword'),
    };
    CommonData.setLoadingFlag(true);

    const responseTemp = await PostAuthAdminLogIn(PostAuthLogInData);
    CommonData.setResponseTempData(responseTemp);

    const response = await PostAuthLogIn(PostAuthLogInData);
    CommonData.setResponseData(response);

    CommonData.setLoadingFlag(false);
    if (response.status === 201) {
      AdminData.setLogInMessage('');
      history.push({ pathname: history.location.pathname });
    } else {
      const MetaError = response as { status: number; data: { message: string } };
      const PopUpData = {
        Category: 'ERROR',
        Name: 'POST_AUTH_LOGIN',
        Title: '관리자 로그인 실패',
        Contents: [MetaError?.data?.message] || [
          '일시적인 서버 오류가 발생하였습니다.',
          '다음에 다시 시도해주세요.',
        ],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
      AdminData.setLogInMessage(response.data.message);
    }
  }, [AdminData, CommonData, history]);

  useEffect(() => {
    if (sessionStorage.getItem('LogInUserID') && sessionStorage.getItem('LogInUserPassword')) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      PostAuthLogInFunction();
    } else {
      history.push({ pathname: '/login' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RootFrame>
      {CommonData.LoadingFlag ? <Loading /> : null}
      {CommonData.PopUpFlag ? <PopUp /> : null}
      <Route exact path="/login" component={LogInPage} />
      <Route
        render={({ location }) => (location.pathname.indexOf('/login') === -1 ? <Common /> : null)}
      />
    </RootFrame>
  );
});

export default RootPage;
