/*
 * Copyright (c) 2022 Medir Inc.
 */

/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import ExitIcon from 'assets/icons/ExitIcon.svg';
import { Route, useHistory } from 'react-router-dom';

import { RootFrame } from 'styles/components/common/Frame';

import Loading from 'components/loading/Loading';
import PopUp from 'components/popup/PopUp';
import ProcessPopUp from 'components/process/ProcessPopUp';

import LogInPage from 'view/login/LogInPage';
import Common from 'view/common/Common';

import { PostAuthLogIn } from 'services/login/PostAuthLogIn';
import { PostAuthAdminLogIn } from 'services/admin/login/PostAuthAdminLogIn';
import {
  AlarmFrame,
  AlarmComponent,
  AlarmTopFrame,
  AlarmTopComponent,
  AlarmTopTitleFrame,
  AlarmTopTitleComponent,
  AlarmTopTitleTextComponent,
  AlarmTopExitComponent,
  AlarmTopExitImageComponent,
  AlarmMiddleFrame,
  AlarmMiddleComponent,
  AlarmMiddleContentFrame,
  AlarmMiddleContentComponent,
  AlarmMiddleContentTextComponent,
} from 'styles/components/alarm/Alarm';

const Alarm = observer(() => {
  const { CommonData, AlarmData } = useStore();

  return (
    <AlarmFrame>
      {/*  */}
      <AlarmComponent minWidth="240px" backgroundColor="#00B264" minHeight="100px">
        <AlarmTopFrame minHeight="50px" alignItems="center">
          <AlarmTopComponent alignItems="center">
            <AlarmTopTitleFrame>
              <AlarmTopTitleComponent>
                <AlarmTopTitleTextComponent color="white">
                  {/*  */}의사 회원가입 URL 전송
                </AlarmTopTitleTextComponent>
              </AlarmTopTitleComponent>
            </AlarmTopTitleFrame>
            <AlarmTopExitComponent>
              <AlarmTopExitImageComponent src={ExitIcon} />
            </AlarmTopExitComponent>
          </AlarmTopComponent>
        </AlarmTopFrame>
        <AlarmMiddleFrame minHeight="50px" alignItems="center">
          <AlarmMiddleComponent alignItems="center">
            <AlarmMiddleContentFrame>
              <AlarmMiddleContentComponent>
                <AlarmMiddleContentTextComponent color="white">
                  {/*  */}의사 회원가입 URL이 전송되었습니다.
                </AlarmMiddleContentTextComponent>
              </AlarmMiddleContentComponent>
            </AlarmMiddleContentFrame>
          </AlarmMiddleComponent>
        </AlarmMiddleFrame>
      </AlarmComponent>
      {/*  */}
    </AlarmFrame>
  );
});

export default Alarm;
