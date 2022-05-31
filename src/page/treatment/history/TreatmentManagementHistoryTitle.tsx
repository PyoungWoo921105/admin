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
} from 'styles/components/common/Title';

const TreatmentManagementHistoryTitle = observer(() => (
  <TitleFrame>
    <TitleComponent>
      <TitleTextFrame>
        <TitleTextComponent>진료 내역</TitleTextComponent>
      </TitleTextFrame>
    </TitleComponent>
  </TitleFrame>
));

export default TreatmentManagementHistoryTitle;
