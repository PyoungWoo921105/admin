import React from 'react';

import { observer } from 'mobx-react';
import styled, { keyframes } from 'styled-components';

import LogoIcon from 'assets/icons/LogoIcon.png';

const HomeFrameAnimation = keyframes`
  from{ 
    opacity: 0;
    transform: translateX(-5%);
  }
  to{
    opacity: 1;
    transform: translateX(0);
    }
`;

const HomeFrame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${HomeFrameAnimation} 0.3s linear 0s 1 normal forwards;
`;
const LogoImageIconFrame = styled.div`
  width: 400px;
`;
const LogoImageIconComponent = styled.img`
  width: 100%;
  height: 100%;
`;

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
