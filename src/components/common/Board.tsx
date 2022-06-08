/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { GlobalBoardFrame } from 'styles/components/common/Frame';

import HomePage from 'page/home/HomePage';
import TreatmentPage from 'page/treatment/TreatmentPage';

const Board = observer(() => (
  <GlobalBoardFrame>
    <Route exact path="/home" component={HomePage} />
    <Route path="/treatment" component={TreatmentPage} />
    {/* <Route path="/medicine" component={MedicineComponent} />
      <Route path="/hospital" component={HospitalComponent} />
      <Route path="/pharmacy" component={PharmacyComponent} />
      <Route path="/doctor" component={DoctorComponent} />
      <Route path="/settlement" component={SettelmentComponent} />
      <Route path="/review" component={ReviewComponent} /> */}
  </GlobalBoardFrame>
));

export default Board;
