/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import {
  TitleFrame,
  TitleComponent,
  TitleTextFrame,
  TitleTextComponent,
} from 'styles/components/common/Filter';

const TreatmentManagementHistoryFilter = observer((props: any) => {
  const { title } = props;
  return (
    <TitleFrame>
      <TitleComponent>
        <TitleTextFrame>
          <TitleTextComponent>{title}</TitleTextComponent>
        </TitleTextFrame>
      </TitleComponent>
    </TitleFrame>
  );
});

export default TreatmentManagementHistoryFilter;
