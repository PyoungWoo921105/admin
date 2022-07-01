/*
 * Copyright (c) 2022 Medir Inc.
 */

import styled from 'styled-components';

import { CustomProps } from 'styles/interface/CustomProps';

/* 내용 */
export const RecordFrame = styled.div`
  width: 100%;
`;

export const RecordComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
/* 카테고리 */
export const CategoryFrame = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
export const CategoryComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const CategoryElementFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: #3c9e3f;
  border: 1px solid #e5f7ef;
  box-sizing: border-box;
  display: flex;
  display: flex;
  flex-direction: row;
  flex-direction: row;
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const CategoryElementComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  height: 100%;
  width: 100%;
`;
export const CategoryElementTitleFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const CategoryElementTitleComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  overflow: hidden;
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const CategoryElementTitleTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const CategoryElementContentFrame = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const CategoryElementContentComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  overflow: hidden;
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const CategoryElementContentTextComponent = styled.span`
  color: #ffffff;
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
/* 데이터 */
export const DataFrame = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;
export const DataComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DataElementFrame = styled.div<CustomProps>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 40px;
  min-height: 40px;
  width: 100%;
`;
export const DataElementComponent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
export const DataElementContentFrame = styled.div<CustomProps>`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e5f7ef;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 100%;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  width: ${props => (props.width ? props.width : '')};
`;
export const DataElementContentComponent = styled.div<CustomProps>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  overflow: hidden;
  padding: 0px 10px 0px 10px;
  width: 100%;
`;
export const DataElementContentTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '#000000')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const DataElementContentButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px 10px 10px 10px;
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  min-height: 30px;
  min-width: 80px;
  overflow: hidden;
  padding: 0px 10px 0px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const DataElementContentExtraButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px 10px 10px 10px;
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: ${props => (props.height ? props.height : '')};
  justify-content: center;
  margin: 0px 0px 0px 5px;
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${props => (props.width ? props.width : '')};
`;
export const DataElementContentInputComponent = styled.input<CustomProps>`
  color: ${props => (props.color ? props.color : '#000000')};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  height: ${props => (props.height ? props.height : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${props => (props.width ? props.width : '')};
`;
/* 네비게이션 */
export const NavigationFrame = styled.div<CustomProps>`
  display: flex;
  justify-content: center;
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
`;
export const NavigationComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  min-height: 40px;
`;
/*  */
export const NavigationButtonFrame = styled.div`
  align-items: center;
  display: flex;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export const NavigationPluralParagraphButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: ${props => (props.cursor ? props.cursor : '')};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  position: relative;
  width: 50px;
`;
export const NavigationSingularParagraphButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: ${props => (props.cursor ? props.cursor : '')};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  position: relative;
  width: 50px;
`;
export const NavigationPageButtonComponent = styled.button<CustomProps>`
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : '')};
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: ${props => (props.cursor ? props.cursor : '')};
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  position: relative;
  width: 50px;
`;
export const NavigationPageEmptyComponent = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 30px;
  justify-content: center;
  margin: 0px 5px 0px 5px;
  position: relative;
  width: 50px;
`;
export const NavigationTextComponent = styled.span<CustomProps>`
  color: ${props => (props.color ? props.color : '')};
  font-family: 'Spoqa Han Sans Neo';
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
`;
