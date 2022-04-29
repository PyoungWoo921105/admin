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
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const GlobalNavigationBarLogoImageFrame = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100px;

  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarLogoImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
export const GlobalNavigationBarTitleTextComponent = styled.span`
  min-width: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #393939;
  margin: 0px 10px 0px 10px;
`;
export const GlobalNavigationBarShowContentImageFrame = styled.button`
  width: 20px;
  height: 20px;
  margin: 0px 10px 0px 10px;
  background-color: transparent;
  border: none;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
`;
export const GlobalNavigationBarShowContentImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
export const GlobalNavigationBarShortCutFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 60px 0px 60px;
`;
export const GlobalNavigationBarShortCutComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 20px 0px 20px;
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
  margin: 10px 0px 10px 0px;
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
  margin: 0px 10px 0px 10px;
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
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  margin: 0px 10px 0px 10px;
  background-color: transparent;
  border: none;
  padding: 0px 0px 0px 0px;
  cursor: pointer;
`;
export const GlobalNavigationBarLogoutImageComponent = styled.img`
  width: 100%;
  height: 100%;
`;
