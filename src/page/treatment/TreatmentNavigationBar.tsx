/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useHistory, useLocation } from 'react-router-dom';

import {
  LocationState,
  LocationNavigationBarFrame,
  LocationNavigationBarTitleFrame,
  LocationNavigationBarTitleComponent,
  LocationNavigationBarTitleTextFrame,
  LocationNavigationBarTitleTextComponent,
  LocationNavigationBarContentFrame,
  LocationNavigationBarContentComponent,
  LocationNavigationBarContentTextFrame,
  LocationNavigationBarContentTextComponent,
} from 'styles/components/common/LocationNavigation';

const TreatmentNavigationBar = observer(() => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const NavigationBarTitleList = [{ name: '진료 내역', path: '/treatment_management/history' }];

  const onClickNavigationBarMenu = (props: { key: number }) => {
    const { key } = props;
    /* if (location.pathname === NavigationBarTitleList[key].path) {
      history.push({
        pathname: "/treatment_management",
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
    <LocationNavigationBarFrame>
      <LocationNavigationBarTitleFrame>
        <LocationNavigationBarTitleComponent>
          <LocationNavigationBarTitleTextFrame>
            <LocationNavigationBarTitleTextComponent>
              진료 관리
            </LocationNavigationBarTitleTextComponent>
          </LocationNavigationBarTitleTextFrame>
        </LocationNavigationBarTitleComponent>
      </LocationNavigationBarTitleFrame>
      <LocationNavigationBarContentFrame>
        {NavigationBarTitleList.map((NavigationBarTitle, key) => (
          <LocationNavigationBarContentComponent
            key={NavigationBarTitle.name}
            backgroundColor={
              NavigationBarTitleList[key].path === location.pathname ? '#0d985b' : '#14C276'
            }
            onClick={() => onClickNavigationBarMenu({ key })}
          >
            <LocationNavigationBarContentTextFrame>
              <LocationNavigationBarContentTextComponent>
                {NavigationBarTitle.name}
              </LocationNavigationBarContentTextComponent>
            </LocationNavigationBarContentTextFrame>
          </LocationNavigationBarContentComponent>
        ))}
      </LocationNavigationBarContentFrame>
    </LocationNavigationBarFrame>
  );
});

export default TreatmentNavigationBar;
