import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const GlobalNavigationBarFrame = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
`;
export const GlobalNavigationBarTitleFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;
export const GlobalNavigationBarTitleComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const GlobalNavigationBarTitleMainFrame = styled.div`
  display: flex;
  width: 100%;
`;
export const GlobalNavigationBarTitleSubFrame = styled.div`
  display: flex;
  width: 50px;
`;
export const GlobalNavigationBarLogoImageFrame = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  height: 100%;
  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarLogoImageComponent = styled.img`
  width: 100%;
`;
export const GlobalNavigationBarTitleTextFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  min-width: 50px;
  margin: 0px 0px 0px 10px;
`;
export const GlobalNavigationBarTitleTextComponent = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #393939;
`;
export const GlobalNavigationBarShowContentImageFrame = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 10px 0px 0px;
`;
export const GlobalNavigationBarShowContentImageComponent = styled.img`
  width: 100%;
`;
export const GlobalNavigationBarShortCutFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarShortCutComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  min-width: 60px;
  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarShortCutTextComponent = styled.span<CustomProps>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: ${props => (props.color ? props.color : '#393939')};
  text-decoration-line: ${props => (props.textDecoration ? props.textDecoration : '')};
  cursor: pointer;
`;
export const GlobalNavigationBarContentComponentAnimation = keyframes`
  from{ 
    opacity: 0;
    transform: translateY(-10%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
    }
`;
export const GlobalNavigationBarContentOpeningComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
  animation: ${GlobalNavigationBarContentComponentAnimation} 0.3s linear 0s 1 normal forwards;
  background: #393939;
  z-index: 10;
`;
export const GlobalNavigationBarContentClosingComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
  animation: ${GlobalNavigationBarContentComponentAnimation} 0.3s linear 0s 1 reverse forwards;
  background: #393939;
  z-index: 10;
`;
export const GlobalNavigationBarContentTitlesComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const GlobalNavigationBarContentTitleComponent = styled.button<CustomProps>`
  width: 100%;
  height: 100%;
  min-height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 10px 0px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#393939')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  border: none;
  cursor: pointer;
`;
export const GlobalNavigationBarContentTitleTextComponent = styled.span`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
`;
export const GlobalNavigationBarLogoutImageFrame = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 30px;
  min-height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarLogoutImageComponent = styled.img`
  width: 100%;
`;
