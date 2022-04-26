import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import { RootFrame } from 'styles/components/common/Frame';

import Loading from 'components/loading/Loading';
import PopUp from 'components/popup/PopUp';

const Root = observer(() => {
  const { CommonData } = useStore();

  return (
    <RootFrame>
      {CommonData.LoadingFlag ? <Loading /> : null}
      {CommonData.PopUpFlag ? <PopUp /> : null}
    </RootFrame>
  );
});

export default Root;
