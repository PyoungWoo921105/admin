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

const TreatmentLeftNavigationBar = observer(() => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const LeftNavigationBarTitleList = [{ name: '진료 내역', path: '/treatment_management/history' }];

  const onClickLeftNavigationBarMenu = (props: { key: number }) => {
    const { key } = props;
    /* if (location.pathname === LeftNavigationBarTitleList[key].path) {
      history.push({
        pathname: "/treatment_management",
      });
    } else {
      history.push({
        pathname: LeftNavigationBarTitleList[key].path,
      });
    } */
    history.push({
      pathname: LeftNavigationBarTitleList[key].path,
    });
  };

  useEffect(() => {
    if (typeof location.state !== 'undefined' && location.state.initiate === true) {
      history.push({
        pathname: LeftNavigationBarTitleList[0].path,
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
        {LeftNavigationBarTitleList.map((LeftNavigationBarTitle, key) => (
          <LocationNavigationBarContentComponent
            key={LeftNavigationBarTitle.name}
            backgroundColor={
              LeftNavigationBarTitleList[key].path === location.pathname ? '#0d985b' : '#14C276'
            }
            onClick={() => onClickLeftNavigationBarMenu({ key })}
          >
            <LocationNavigationBarContentTextFrame>
              <LocationNavigationBarContentTextComponent>
                {LeftNavigationBarTitle.name}
              </LocationNavigationBarContentTextComponent>
            </LocationNavigationBarContentTextFrame>
          </LocationNavigationBarContentComponent>
        ))}
      </LocationNavigationBarContentFrame>
    </LocationNavigationBarFrame>
  );
});

export default TreatmentLeftNavigationBar;
