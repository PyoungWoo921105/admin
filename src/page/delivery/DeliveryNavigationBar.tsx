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

const DeliveryNavigationBar = observer(() => {
  const history = useHistory();
  const location = useLocation<LocalState>();

  const NavigationBarTitleList = [
    { name: '방문/배달 내역', path: '/delivery/history' },
    { name: '배달 운영', path: '/delivery/operation' },
  ];

  const onClickNavigationBarMenu = (props: { key: number }) => {
    const { key } = props;
    /* if (location.pathname === NavigationBarTitleList[key].path) {
      history.push({
        pathname: "/delivery",
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
    <LocalNavigationBarFrame>
      <LocalNavigationBarTitleFrame>
        <LocalNavigationBarTitleComponent>
          <LocalNavigationBarTitleTextFrame>
            <LocalNavigationBarTitleTextComponent>
              방문/배달 관리
            </LocalNavigationBarTitleTextComponent>
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

export default DeliveryNavigationBar;
