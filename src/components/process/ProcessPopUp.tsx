/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import {
  ProcessPopUpFrame,
  ProcessPopUpComponent,
  ProcessPopUpTopFrame,
  ProcessPopUpTopComponent,
  ProcessPopUpTopTitleComponent,
  ProcessPopUpTopTitleTextComponent,
  ProcessPopUpTopExitComponent,
  ProcessPopUpTopExitImageComponent,
  ProcessPopUpBorderComponent,
  ProcessPopUpMiddleFrame,
  ProcessPopUpMiddleComponent,
  ProcessPopUpMiddleContentFrame,
  ProcessPopUpMiddleContentComponent,
  ProcessPopUpBottomFrame,
  ProcessPopUpBottomComponent,
  ProcessPopUpBottomButtonComponent,
  ProcessPopUpBottomButtonLeftComponent,
  ProcessPopUpBottomButtonRightComponent,
} from 'styles/components/process/ProcessPopUp';

import { toJS } from 'mobx';
import ProcessStep from './ProcessStep';
import ProcessType from './ProcessType';

const ProcessPopUp = observer(() => {
  const { AdminData } = useStore();

  const onClickExit = () => {
    AdminData.setProcessPopUpFlag(false);
  };

  const keyDownEvent = useCallback(
    (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        AdminData.setProcessPopUpFlag(false);
      }
    },
    [AdminData]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDownEvent, false);
    return () => {
      document.removeEventListener('keydown', keyDownEvent, false);
    };
  }, [keyDownEvent]);

  const onClickAction = (props: (() => void) | undefined) => {
    if (props) {
      props();
    }
  };

  console.log(toJS(AdminData.ProcessPopUpData));

  return (
    <ProcessPopUpFrame>
      <ProcessPopUpComponent>
        <ProcessPopUpTopFrame>
          <ProcessPopUpTopComponent>
            <ProcessPopUpTopTitleComponent
              minWidth={
                AdminData.ProcessPopUpData?.Title && AdminData.ProcessPopUpData?.Title.length !== 0
                  ? `${Number(AdminData.ProcessPopUpData?.Title.length) * 10 + 95}px`
                  : ''
              }
            >
              <ProcessPopUpTopTitleTextComponent>
                {AdminData.ProcessPopUpData?.Title}
              </ProcessPopUpTopTitleTextComponent>
            </ProcessPopUpTopTitleComponent>
            <ProcessPopUpTopExitComponent onClick={onClickExit}>
              <ProcessPopUpTopExitImageComponent src={ExitIcon} />
            </ProcessPopUpTopExitComponent>
          </ProcessPopUpTopComponent>
        </ProcessPopUpTopFrame>
        <ProcessPopUpBorderComponent />
        <ProcessPopUpMiddleFrame
          justifyContent="center"
          alignItems="center"
          borderRadius={
            !AdminData.ProcessPopUpData?.Actions || AdminData.ProcessPopUpData?.Actions.length === 0
              ? '0px 0px 10px 10px'
              : ''
          }
        >
          <ProcessPopUpMiddleComponent padding="0px 20px 0px 20px">
            <ProcessPopUpMiddleContentFrame>
              <ProcessPopUpMiddleContentComponent flexDirection="row">
                <ProcessStep />
                <ProcessType />
              </ProcessPopUpMiddleContentComponent>
            </ProcessPopUpMiddleContentFrame>
          </ProcessPopUpMiddleComponent>
        </ProcessPopUpMiddleFrame>
        {AdminData.ProcessPopUpData?.Actions.length === 1 ? (
          <ProcessPopUpBottomFrame>
            <ProcessPopUpBottomComponent>
              <ProcessPopUpBottomButtonComponent
                onClick={() => onClickAction(AdminData.ProcessPopUpData?.Actions[0].Action)}
              >
                {AdminData.ProcessPopUpData?.Actions[0].Choice}
              </ProcessPopUpBottomButtonComponent>
            </ProcessPopUpBottomComponent>
          </ProcessPopUpBottomFrame>
        ) : null}
        {AdminData.ProcessPopUpData?.Actions.length === 2 ? (
          <ProcessPopUpBottomFrame>
            <ProcessPopUpBottomComponent>
              <ProcessPopUpBottomButtonLeftComponent
                onClick={() => onClickAction(AdminData.ProcessPopUpData?.Actions[0].Action)}
              >
                {AdminData.ProcessPopUpData?.Actions[0].Choice}
              </ProcessPopUpBottomButtonLeftComponent>
              <ProcessPopUpBottomButtonRightComponent
                onClick={() => onClickAction(AdminData.ProcessPopUpData?.Actions[1].Action)}
              >
                {AdminData.ProcessPopUpData?.Actions[1].Choice}
              </ProcessPopUpBottomButtonRightComponent>
            </ProcessPopUpBottomComponent>
          </ProcessPopUpBottomFrame>
        ) : null}
      </ProcessPopUpComponent>
    </ProcessPopUpFrame>
  );
});

export default ProcessPopUp;
