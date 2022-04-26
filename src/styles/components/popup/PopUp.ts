import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const PopUpFrame = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  background-color: rgba(102, 102, 102, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PopUpComponent = styled.div<CustomProps>`
  position: absolute;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  box-sizing: border-box;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 10px 10px;
`;
/*  */
export const PopUpTopFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 10px 10px 0px 0px;
`;
export const PopUpTopComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const PopUpTopTitleComponent = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const PopUpTopTitleTextComponent = styled.span<CustomProps>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #000000;
`;
export const PopUpTopExitComponent = styled.div<CustomProps>`
  position: absolute;
  right: 20px;
  width: 15px;
  height: 100%;
  cursor: pointer;
`;
export const PopUpTopExitImageComponent = styled.img<CustomProps>`
  width: 100%;
  height: 100%;
`;
/*  */
export const PopUpMiddleFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  width: 100%;
  min-height: 40px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
`;
export const PopUpMiddleComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const PopUpMiddleContentComponent = styled.div<CustomProps>`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
/*  */
export const PopUpBottomFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#ffffff')};
  border-radius: 0px 0px 10px 10px;
`;
export const PopUpBottomComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const PopUpBottomButtonComponent = styled.button<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0px 0px 10px 10px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0, 178, 100)'};
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => (props.color ? props.color : '#ffffff')};
`;
export const PopUpBottomButtonLeftComponent = styled.button<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0px 0px 0px 10px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(100, 100, 100)'};
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => (props.color ? props.color : '#ffffff')};
`;
export const PopUpBottomButtonRightComponent = styled.button<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0px 0px 10px 0px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'rgb(0, 178, 100)'};
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => (props.color ? props.color : '#ffffff')};
`;
/*  */
export const PopUpBorderComponent = styled.div`
  border-bottom: 1px solid rgb(224, 224, 224);
  margin: 0px 15px;
`;
