/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useHistory, useLocation } from 'react-router-dom';

import {
  LocalState,
  LocalNavigationBarFrame,
  LocalNavigationBarTitleFrame,
  LocalNavigationBarTitleComponent,
  LocalNavigationBarTitleTextFrame,
  LocalNavigationBarTitleTextComponent,
  LocalNavigationBarContentFrame,
  LocalNavigationBarContentComponent,
  LocalNavigationBarContentTextFrame,
  LocalNavigationBarContentTextComponent,
} from 'styles/components/common/LocalNavigation';
import { useStore } from 'data/useStore';

const IndicatorNavigationBar = observer(() => {
  const { AdminData } = useStore();
  const history = useHistory();
  const location = useLocation<LocalState>();

  const NavigationBarTitleList = [
    /* { name: '지표 현황', path: '/indicator/live' }, */
    { name: '지표 내역', path: '/indicator/history' },
  ];

  const onClickNavigationBarMenu = (props: { key: number }) => {
    const { key } = props;
    /* if (location.pathname === NavigationBarTitleList[key].path) {
      history.push({
        pathname: "/indicator",
      });
    } else {
      history.push({
        pathname: NavigationBarTitleList[key].path,
      });
    } */
    history.push({
      pathname: NavigationBarTitleList[key].path,
    });
  };

  useEffect(() => {
    if (typeof location.state !== 'undefined' && location.state.initiate === true) {
      history.push({
        pathname: NavigationBarTitleList[0].path,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocalNavigationBarFrame display={AdminData.LocalNavigationBarState ? 'flex' : 'none'}>
      <LocalNavigationBarTitleFrame>
        <LocalNavigationBarTitleComponent>
          <LocalNavigationBarTitleTextFrame>
            <LocalNavigationBarTitleTextComponent>지표 관리</LocalNavigationBarTitleTextComponent>
          </LocalNavigationBarTitleTextFrame>
        </LocalNavigationBarTitleComponent>
      </LocalNavigationBarTitleFrame>
      <LocalNavigationBarContentFrame>
        {NavigationBarTitleList.map((NavigationBarTitle, key) => (
          <LocalNavigationBarContentComponent
            key={NavigationBarTitle.name}
            backgroundColor={
              NavigationBarTitleList[key].path === location.pathname ? '#0d985b' : '#14C276'
            }
            onClick={() => onClickNavigationBarMenu({ key })}
          >
            <LocalNavigationBarContentTextFrame>
              <LocalNavigationBarContentTextComponent>
                {NavigationBarTitle.name}
              </LocalNavigationBarContentTextComponent>
            </LocalNavigationBarContentTextFrame>
          </LocalNavigationBarContentComponent>
        ))}
      </LocalNavigationBarContentFrame>
    </LocalNavigationBarFrame>
  );
});

export default IndicatorNavigationBar;
