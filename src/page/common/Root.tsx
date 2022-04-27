import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';
import { Route, useHistory } from 'react-router-dom';

import { RootFrame } from 'styles/components/common/Frame';

import Loading from 'components/loading/Loading';
import PopUp from 'components/popup/PopUp';

import LogIn from 'page/login/LogIn';
import Common from 'page/common/Common';

import { PostAuthLogIn } from 'services/login/PostAuthLogIn';

const Root = observer(() => {
  const { CommonData, AdminData } = useStore();

  const history = useHistory();

  const PostAuthLogInFunction = async () => {
    const PostAuthLogInData = {
      username: sessionStorage.getItem('LogInUserID'),
      password: sessionStorage.getItem('LogInUserPassword'),
    };
    CommonData.setLoadingFlag(true);
    const response = await PostAuthLogIn(PostAuthLogInData);
    CommonData.setLoadingFlag(false);
    if (response.status === 201) {
      sessionStorage.setItem('LogInUserID', AdminData.LogInUserID);
      sessionStorage.setItem('LogInUserPassword', AdminData.LogInUserPassword);
      history.push({ pathname: history.location.pathname });
    } else {
      const PopUpData = {
        Category: 'ERROR',
        Name: 'POST_AUTH_LOGIN',
        Title: '관리자 로그인 실패',
        Contents: response.data.message
          ? [response.data.message]
          : ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'],
        Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
      };
      CommonData.setPopUpData(PopUpData);
      CommonData.setPopUpFlag(true);
      AdminData.setLogInMessage(response.data.message);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('LogInUserID') && sessionStorage.getItem('LogInUserPassword')) {
      PostAuthLogInFunction();
    } else {
      history.push({ pathname: '/login' });
    }
  }, []);

  console.log(history.location.pathname);

  return (
    <RootFrame>
      {CommonData.LoadingFlag ? <Loading /> : null}
      {CommonData.PopUpFlag ? <PopUp /> : null}
      <Route exact path="/login" component={LogIn} />
      <Route
        render={({ location }) => (location.pathname.indexOf('/login') === -1 ? <Common /> : null)}
      />
    </RootFrame>
  );
});

export default Root;
