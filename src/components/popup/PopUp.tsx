import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import {
  PopUpFrame,
  PopUpComponent,
  PopUpTopFrame,
  PopUpTopComponent,
  PopUpTopTitleComponent,
  PopUpTopTitleTextComponent,
  PopUpTopExitComponent,
  PopUpTopExitImageComponent,
  PopUpBorderComponent,
  PopUpMiddleFrame,
  PopUpMiddleComponent,
  PopUpMiddleContentComponent,
  PopUpBottomFrame,
  PopUpBottomComponent,
  PopUpBottomButtonComponent,
  PopUpBottomButtonLeftComponent,
  PopUpBottomButtonRightComponent,
} from 'styles/components/popup/PopUp';

const PopUp = observer(() => {
  const { CommonData } = useStore();

  const onClickExit = () => {
    CommonData.setPopUpFlag(false);
  };

  const keyDownEvent = useCallback(
    (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        CommonData.setPopUpFlag(false);
      }
    },
    [CommonData]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyDownEvent, false);
    return () => {
      document.removeEventListener('keydown', keyDownEvent, false);
    };
  }, [keyDownEvent]);

  return (
    <PopUpFrame>
      <PopUpComponent minWidth="400px">
        <PopUpTopFrame>
          <PopUpTopComponent>
            <PopUpTopTitleComponent>
              <PopUpTopTitleTextComponent>{CommonData.PopUpData?.Title}</PopUpTopTitleTextComponent>
            </PopUpTopTitleComponent>
            <PopUpTopExitComponent onClick={onClickExit}>
              <PopUpTopExitImageComponent src={ExitIcon} />
            </PopUpTopExitComponent>
          </PopUpTopComponent>
        </PopUpTopFrame>
        <PopUpBorderComponent />
        <PopUpMiddleFrame
          justifyContent="center"
          alignItems="center"
          borderRadius={
            !CommonData.PopUpData?.Actions || CommonData.PopUpData?.Actions.length === 0
              ? '0px 0px 10px 10px'
              : ''
          }
        >
          <PopUpMiddleComponent>
            {CommonData.PopUpData?.Contents.map(Content => {
              return (
                <PopUpMiddleContentComponent key={Content}>{Content}</PopUpMiddleContentComponent>
              );
            })}
          </PopUpMiddleComponent>
        </PopUpMiddleFrame>
        {CommonData.PopUpData?.Actions.length === 1 ? (
          <PopUpBottomFrame>
            <PopUpBottomComponent>
              <PopUpBottomButtonComponent>돌아가기</PopUpBottomButtonComponent>
            </PopUpBottomComponent>
          </PopUpBottomFrame>
        ) : null}
        {CommonData.PopUpData?.Actions.length === 2 ? (
          <PopUpBottomFrame>
            <PopUpBottomComponent>
              <PopUpBottomButtonLeftComponent>아니오</PopUpBottomButtonLeftComponent>
              <PopUpBottomButtonRightComponent>네</PopUpBottomButtonRightComponent>
            </PopUpBottomComponent>
          </PopUpBottomFrame>
        ) : null}
      </PopUpComponent>
    </PopUpFrame>
  );
});

export default PopUp;
