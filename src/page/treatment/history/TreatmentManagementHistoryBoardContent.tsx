/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useState } from 'react';

import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

/* 컨텐츠 */
import { BoardContentFrame } from 'styles/components/common/Frame';
/*  */
/* 레코드 */
import {
  /* 내용 */
  RecordFrame,
  RecordComponent,
  /* 카테고리 */
  CategoryFrame,
  CategoryComponent,
  CategoryElementFrame,
  CategoryElementComponent,
  CategoryElementTitleFrame,
  CategoryElementTitleComponent,
  CategoryElementTitleTextComponent,
  /* 데이터 */
  DataFrame,
  DataComponent,
} from 'styles/components/common/Record';
/*  */

import { AllowNumber } from 'libraries/constraint/AllowNumber';
import { ConvertContactNumber } from 'libraries/conversion/ConvertContactNumber';
/*  */
const BoardContent = observer(() => {
  const { AdminData } = useStore();
  const CategoryList = [
    { title: '진료 번호', width: 100 },
    { title: '생성 일시', width: 120 },
    { title: '진료 상태', width: 90 },
    { title: '병원 이름', width: 100 },
    { title: '의사 이름', width: 100 },
    { title: '회원 이름', width: 100 },
    { title: '환자 이름', width: 100 },
    { title: '접수 항목', width: 90 },
    { title: '결제 금액', width: 80 },
    { title: '처방전 유무', width: 50 },
    { title: '약 수령 방법', width: 50 },
  ];
  return (
    <BoardContentFrame>
      {/* 내용 */}
      <RecordFrame>
        <RecordComponent>
          {/* 카테고리 */}
          <CategoryFrame>
            <CategoryComponent>
              {/*  */}
              {CategoryList.map(element => (
                <CategoryElementFrame minWidth={`${element.width}px`} width={`${element.width}%`}>
                  <CategoryElementComponent>
                    <CategoryElementTitleFrame>
                      <CategoryElementTitleComponent justifyContent="center">
                        <CategoryElementTitleTextComponent>
                          {element.title}
                        </CategoryElementTitleTextComponent>
                      </CategoryElementTitleComponent>
                    </CategoryElementTitleFrame>
                  </CategoryElementComponent>
                </CategoryElementFrame>
              ))}
              {/*  */}
            </CategoryComponent>
          </CategoryFrame>
          {/*  */}
          {/* 데이터 */}
          <DataFrame>
            <DataComponent>진료 내역</DataComponent>
          </DataFrame>
        </RecordComponent>
      </RecordFrame>
    </BoardContentFrame>
  );
});

export default BoardContent;
