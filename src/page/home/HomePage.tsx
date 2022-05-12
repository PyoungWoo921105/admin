/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import LogoIcon from 'assets/icons/LogoIcon.png';

import { HomeFrame, LogoImageIconFrame, LogoImageIconComponent } from 'styles/components/home/Home';

const HomePage = observer(() => (
  <HomeFrame>
    <LogoImageIconFrame>
      <LogoImageIconComponent
        src={LogoIcon}
        onClick={() => {
          window.open('https://www.notion.so/MEDIR-aefcafb8bb1a45c79fdfcf58de8b9962');
        }}
      />
    </LogoImageIconFrame>
  </HomeFrame>
));

export default HomePage;
