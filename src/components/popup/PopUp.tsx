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
  PopUpMiddleContentFrame,
  PopUpMiddleContentComponent,
  PopUpMiddleContentTextFrame,
  PopUpMiddleContentTextComponent,
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

  const onClickAction = (props: (() => void) | undefined) => {
    if (props) {
      props();
    }
  };

  return (
    <PopUpFrame>
      <PopUpComponent minWidth="280px">
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
          <PopUpMiddleComponent padding="0px 20px 0px 20px">
            <PopUpMiddleContentFrame>
              <PopUpMiddleContentComponent flexDirection="column">
                {CommonData.PopUpData?.Contents.map(Content => (
                    <PopUpMiddleContentTextFrame key={Content} margin="5px 0px 5px 0px">
                      <PopUpMiddleContentTextComponent>{Content}</PopUpMiddleContentTextComponent>
                    </PopUpMiddleContentTextFrame>
                  ))}
              </PopUpMiddleContentComponent>
            </PopUpMiddleContentFrame>
          </PopUpMiddleComponent>
        </PopUpMiddleFrame>
        {CommonData.PopUpData?.Actions.length === 1 ? (
          <PopUpBottomFrame>
            <PopUpBottomComponent>
              <PopUpBottomButtonComponent
                onClick={() => onClickAction(CommonData.PopUpData?.Actions[0].Action)}
              >
                {CommonData.PopUpData?.Actions[0].Choice}
              </PopUpBottomButtonComponent>
            </PopUpBottomComponent>
          </PopUpBottomFrame>
        ) : null}
        {CommonData.PopUpData?.Actions.length === 2 ? (
          <PopUpBottomFrame>
            <PopUpBottomComponent>
              <PopUpBottomButtonLeftComponent
                onClick={() => onClickAction(CommonData.PopUpData?.Actions[0].Action)}
              >
                {CommonData.PopUpData?.Actions[0].Choice}
              </PopUpBottomButtonLeftComponent>
              <PopUpBottomButtonRightComponent
                onClick={() => onClickAction(CommonData.PopUpData?.Actions[1].Action)}
              >
                {CommonData.PopUpData?.Actions[1].Choice}
              </PopUpBottomButtonRightComponent>
            </PopUpBottomComponent>
          </PopUpBottomFrame>
        ) : null}
      </PopUpComponent>
    </PopUpFrame>
  );
});

export default PopUp;
