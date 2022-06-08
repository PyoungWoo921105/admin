/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';
import useWindowDimensions from 'styles/device/useWindowDimensions';

import LogoIcon from 'assets/icons/LogoIcon.png';
import OnPrivateIcon from 'assets/icons/OnPrivateIcon.svg';
import OffPrivateIcon from 'assets/icons/OffPrivateIcon.svg';

import { GlobalFrame } from 'styles/components/common/Frame';

import {
  LogInFrame,
  LogInComponent,
  LogInTopFrame,
  LogInTopComponent,
  LogInTopTitleImageFrame,
  LogInTopTitleImageComponent,
  LogInTopContentTextFrame,
  LogInTopContentTextComponent,
  LogInMiddleFrame,
  LogInMiddleComponent,
  LogInMiddleContentComponent,
  LogInMiddleContentInputFrame,
  LogInMiddleContentInputComponent,
  LogInMiddleContentImageFrame,
  LogInMiddleContentImageComponent,
  LogInMiddleContentTextFrame,
  LogInMiddleContentTextComponent,
  LogInBottomFrame,
  LogInBottomComponent,
  LogInBottomButtonFrame,
  LogInBottomButtonComponent,
  LogInBottomTextFrame,
  LogInBottomTextComponent,
} from 'styles/components/login/LogIn';
import { PostAuthLogIn } from 'services/login/PostAuthLogIn';
import { useHistory } from 'react-router-dom';
import { PostAuthAdminLogIn } from 'services/login/PostAuthAdminLogIn';

const LogInPage = observer(() => {
  const { CommonData, AdminData } = useStore();

  const { width } = useWindowDimensions();

  const onClickPrivateFlag = () => {
    AdminData.setLogInPrivateFlag(!AdminData.LogInPrivateFlag);
  };
  const onChangeUserID = (e: { target: { value: string } }) => {
    AdminData.setLogInUserID(e.target.value);
  };
  const onChangeUserPassword = (e: { target: { value: string } }) => {
    AdminData.setLogInUserPassword(e.target.value);
  };

  useEffect(() => {
    if (AdminData.LogInUserID.length > 0 && AdminData.LogInUserPassword.length > 0) {
      AdminData.setLogInValidateFlag(true);
    } else {
      AdminData.setLogInValidateFlag(false);
    }
  }, [AdminData, AdminData.LogInUserID, AdminData.LogInUserPassword]);

  const history = useHistory();

  const onClickLogInButton = async () => {
    const LogInUserPasswordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{};])(?=.{8,})/;
    if (AdminData.LogInUserID.length < 6 || AdminData.LogInUserID.length > 20) {
      AdminData.setLogInMessage('아이디는 6~20자의 영문 소문자, 숫자만 사용 가능합니다.');
    } else if (!RegExp(LogInUserPasswordRegex).exec(AdminData.LogInUserPassword)) {
      AdminData.setLogInMessage(
        '비밀번호는 영문자, 숫자, 특수문자를 모두 포함하여 최소 8자리 이상이어야 합니다.'
      );
    } else {
      CommonData.setLoadingFlag(true);
      const PostAuthLogInData = {
        username: AdminData.LogInUserID,
        password: AdminData.LogInUserPassword,
      };

      const responseTemp = await PostAuthAdminLogIn(PostAuthLogInData);
      CommonData.setResponseTempData(responseTemp);

      const response = await PostAuthLogIn(PostAuthLogInData);
      CommonData.setResponseData(response);

      CommonData.setLoadingFlag(false);

      if (response.status === 201) {
        sessionStorage.setItem('LogInUserID', AdminData.LogInUserID);
        sessionStorage.setItem('LogInUserPassword', AdminData.LogInUserPassword);
        history.push({ pathname: '/home' });
      } else {
        const PopUpData = {
          Category: 'ERROR',
          Name: 'POST_AUTH_LOGIN',
          Title: '관리자 로그인 실패',
          Contents: ['일시적인 서버 오류가 발생하였습니다.', '다음에 다시 시도해주세요.'] || [
            response?.data?.message,
          ],
          Actions: [{ Choice: '돌아가기', Action: () => CommonData.setPopUpFlag(false) }],
        };
        CommonData.setPopUpData(PopUpData);
        CommonData.setPopUpFlag(true);
        AdminData.setLogInMessage(response.data.message);
      }
    }
  };

  const onKeyPressLogInButton = (e: { key: string }) => {
    if (e.key === 'Enter') {
      onClickLogInButton().finally(undefined);
    }
  };

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <GlobalFrame>
      <LogInFrame>
        <LogInComponent width={width >= 768 ? '425px' : '280px'}>
          <LogInTopFrame>
            <LogInTopComponent>
              <LogInTopTitleImageFrame>
                <LogInTopTitleImageComponent src={LogoIcon} />
              </LogInTopTitleImageFrame>
              <LogInTopContentTextFrame>
                <LogInTopContentTextComponent> 관리자용</LogInTopContentTextComponent>
              </LogInTopContentTextFrame>
            </LogInTopComponent>
          </LogInTopFrame>
          <LogInMiddleFrame>
            <LogInMiddleComponent>
              <LogInMiddleContentComponent flexDirection="column">
                <LogInMiddleContentInputFrame>
                  <LogInMiddleContentInputComponent
                    placeholder="관리자 아이디"
                    type="text"
                    onChange={onChangeUserID}
                    value={AdminData.LogInUserID}
                    id="id"
                    onKeyPress={onKeyPressLogInButton}
                  />
                </LogInMiddleContentInputFrame>
                <form style={{ width: '100%' }} onSubmit={onSubmit}>
                  <LogInMiddleContentInputFrame>
                    <LogInMiddleContentInputComponent
                      placeholder="비밀번호"
                      type={AdminData.LogInPrivateFlag ? 'password' : 'text'}
                      onChange={onChangeUserPassword}
                      value={AdminData.LogInUserPassword}
                      autoComplete="on"
                      id="pw"
                      onKeyPress={onKeyPressLogInButton}
                    />
                    <LogInMiddleContentImageFrame onClick={onClickPrivateFlag}>
                      <LogInMiddleContentImageComponent
                        src={AdminData.LogInPrivateFlag ? OffPrivateIcon : OnPrivateIcon}
                      />
                    </LogInMiddleContentImageFrame>
                  </LogInMiddleContentInputFrame>
                </form>
                <LogInMiddleContentTextFrame height={width >= 768 ? '40px' : '55px'}>
                  <LogInMiddleContentTextComponent>
                    {AdminData.LogInMessage}
                  </LogInMiddleContentTextComponent>
                </LogInMiddleContentTextFrame>
              </LogInMiddleContentComponent>
            </LogInMiddleComponent>
          </LogInMiddleFrame>
          <LogInBottomFrame>
            <LogInBottomComponent>
              <LogInBottomButtonFrame margin="0px 0px 5px 0px">
                <LogInBottomButtonComponent
                  backgroundColor={
                    AdminData.LogInValidateFlag ? 'rgb(0, 178, 100)' : 'rgb(224, 224, 224);'
                  }
                  onClick={onClickLogInButton}
                >
                  로그인하기
                </LogInBottomButtonComponent>
              </LogInBottomButtonFrame>
              <LogInBottomTextFrame margin="5px 0px 0px 0px">
                <LogInBottomTextComponent margin="5px 20px 5px 0px">
                  제휴 문의 | 010-5561-5147
                </LogInBottomTextComponent>
                <LogInBottomTextComponent margin="5px 0px 5px 0px">
                  시스템 관련 문의 | 02-555-0774
                </LogInBottomTextComponent>
              </LogInBottomTextFrame>
            </LogInBottomComponent>
          </LogInBottomFrame>
        </LogInComponent>
      </LogInFrame>
    </GlobalFrame>
  );
});

export default LogInPage;
