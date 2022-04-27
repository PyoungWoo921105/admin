import styled, { keyframes } from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

export const LogInFrame = styled.div`
  position: relative;
  height: 100vh;
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LogInComponent = styled.div<CustomProps>`
  width: ${props => (props.width ? props.width : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
  height: ${props => (props.height ? props.height : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
`;
/*  */
export const LogInTopFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  padding: 10px 0px 10px 0px;
`;
export const LogInTopComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  filter: drop-shadow(rgba(0, 0, 0, 0.25) 0px 4px 4px);
`;
export const LogInTopTitleImageFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 190px;
`;
export const LogInTopTitleImageComponent = styled.img<CustomProps>`
  width: 100%;
  height: 100%;
`;
export const LogInTopContentTextFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 60px;
`;
export const LogInTopContentTextComponent = styled.span<CustomProps>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: rgb(57, 57, 57);
`;
/*  */
const ComponentFrameAnimation = keyframes`
  from{ opacity: 0;
    transform: translateX(-10%);}
  to{opacity: 1;
    transform: translateX(0);}
`;
export const LogInMiddleFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  padding: 10px 0px 10px 0px;
  animation: ${ComponentFrameAnimation} 0.3s linear 0s 1 normal forwards;
`;
export const LogInMiddleComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const LogInMiddleContentComponent = styled.div<CustomProps>`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0px 10px 0px 10px;
`;
export const LogInMiddleContentInputFrame = styled.div<CustomProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;
export const LogInMiddleContentInputComponent = styled.input<CustomProps>`
  width: 100%;
  height: 50px;
  margin: 5px 0px 5px 0px;
  box-sizing: border-box;
  border: 1px solid rgb(224, 224, 224);
  padding: 15px;
  border-radius: 4px;
  ::placeholder {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    color: #a8a8a8;
  }
`;
export const LogInMiddleContentImageFrame = styled.div<CustomProps>`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 20px;
  cursor: pointer;
`;
export const LogInMiddleContentImageComponent = styled.img<CustomProps>`
  width: 100%;
  height: 100%;
`;
export const LogInMiddleContentTextFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40px;
  margin: 5px 0px 5px 0px;
  padding: 10px 0px 10px 0px;
`;
export const LogInMiddleContentTextComponent = styled.span<CustomProps>`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: rgb(255, 59, 48);
`;
/*  */
export const LogInBottomFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border-radius: 10px 10px 0px 0px;
  padding: 10px 0px 10px 0px;
`;
export const LogInBottomComponent = styled.div<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px 0px 10px;
`;
export const LogInBottomButtonFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
`;
export const LogInBottomButtonComponent = styled.button<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px 10px 10px 10px;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  cursor: pointer;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  margin: 5px 0px 5px 0px;
`;
export const LogInBottomTextFrame = styled.div<CustomProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: ${props => (props.margin ? props.margin : '')};
`;
export const LogInBottomTextComponent = styled.span<CustomProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  margin: 5px 0px 5px 0px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: rgb(141, 141, 141);
`;
