import React from 'react';

import { observer } from 'mobx-react';

import LogoIcon from 'assets/icons/LogoIcon.png';

import { HomeFrame, LogoImageIconFrame, LogoImageIconComponent } from 'styles/components/home/Home';

const Home = observer(() => {
  return (
    <HomeFrame className="HomeFrame">
      <LogoImageIconFrame className="LogoImageIconFrame">
        <LogoImageIconComponent className="LogoImageIconComponent" src={LogoIcon} />
      </LogoImageIconFrame>
    </HomeFrame>
  );
});

export default Home;
