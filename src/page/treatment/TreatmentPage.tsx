import React from 'react';

import { observer } from 'mobx-react';

import LogoIcon from 'assets/icons/LogoIcon.png';

import { HomeFrame, LogoImageIconFrame, LogoImageIconComponent } from 'styles/components/home/Home';

const TreatmentPage = observer(() => {
  return (
    <HomeFrame>
      <LogoImageIconFrame
        onClick={() => {
          window.open('https://www.notion.so/MEDIR-aefcafb8bb1a45c79fdfcf58de8b9962');
        }}
      >
        <LogoImageIconComponent src={LogoIcon} />
      </LogoImageIconFrame>
    </HomeFrame>
  );
});

export default TreatmentPage;
