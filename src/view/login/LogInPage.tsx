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
import { PostAuthAdminLogIn } from 'services/admin/login/PostAuthAdminLogIn';

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
      AdminData.setLogInMessage('???????????? 6~20?????? ?????? ?????????, ????????? ?????? ???????????????.');
    } else if (!RegExp(LogInUserPasswordRegex).exec(AdminData.LogInUserPassword)) {
      AdminData.setLogInMessage(
        '??????????????? ?????????, ??????, ??????????????? ?????? ???????????? ?????? 8?????? ??????????????? ?????????.'
      );
    } else {
      CommonData.setLoadingFlag(true);

      const PostAuthAdminLogInData = {
        username: AdminData.LogInUserID,
        password: AdminData.LogInUserPassword,
      };
      const responseTemp = await PostAuthAdminLogIn(PostAuthAdminLogInData);
      CommonData.setResponseTempData(responseTemp);

      const PostAuthLogInData = {
        username: AdminData.LogInUserID,
        password: AdminData.LogInUserPassword,
      };
      const response = await PostAuthLogIn(PostAuthLogInData);
      CommonData.setResponseData(response);

      CommonData.setLoadingFlag(false);

      if (response.status === 201) {
        sessionStorage.setItem('LogInUserID', AdminData.LogInUserID);
        sessionStorage.setItem('LogInUserPassword', AdminData.LogInUserPassword);
        AdminData.setLogInMessage('');
        history.push({ pathname: '/home' });
      } else {
        const MetaError = response as { status: number; data: { message: string } };
        const PopUpData = {
          Category: 'ERROR',
          Name: 'POST_AUTH_LOGIN',
          Title: '????????? ????????? ??????',
          Contents: MetaError?.data?.message
            ? [MetaError?.data?.message]
            : ['???????????? ?????? ????????? ?????????????????????.', '????????? ?????? ??????????????????.'],
          Actions: [{ Choice: '????????????', Action: () => CommonData.setPopUpFlag(false) }],
        };
        CommonData.setPopUpData(PopUpData);
        CommonData.setPopUpFlag(true);
        AdminData.setLogInMessage(response?.data?.message);
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
    <LogInFrame>
      <LogInComponent width={width >= 768 ? '425px' : '280px'}>
        <LogInTopFrame>
          <LogInTopComponent>
            <LogInTopTitleImageFrame>
              <LogInTopTitleImageComponent src={LogoIcon} />
            </LogInTopTitleImageFrame>
            <LogInTopContentTextFrame>
              <LogInTopContentTextComponent> ????????????</LogInTopContentTextComponent>
            </LogInTopContentTextFrame>
          </LogInTopComponent>
        </LogInTopFrame>
        <LogInMiddleFrame>
          <LogInMiddleComponent>
            <LogInMiddleContentComponent flexDirection="column">
              <LogInMiddleContentInputFrame>
                <LogInMiddleContentInputComponent
                  placeholder="????????? ?????????"
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
                    placeholder="????????????"
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
                backgroundColor={AdminData.LogInValidateFlag ? 'rgb(0, 178, 100)' : '#E3E3E3;'}
                onClick={onClickLogInButton}
              >
                ???????????????
              </LogInBottomButtonComponent>
            </LogInBottomButtonFrame>
            <LogInBottomTextFrame margin="5px 0px 0px 0px">
              <LogInBottomTextComponent margin="5px 20px 5px 0px">
                ?????? ?????? | 010-5561-5147
              </LogInBottomTextComponent>
              <LogInBottomTextComponent margin="5px 0px 5px 0px">
                ????????? ?????? ?????? | 02-555-0774
              </LogInBottomTextComponent>
            </LogInBottomTextFrame>
          </LogInBottomComponent>
        </LogInBottomFrame>
      </LogInComponent>
    </LogInFrame>
  );
});

export default LogInPage;
