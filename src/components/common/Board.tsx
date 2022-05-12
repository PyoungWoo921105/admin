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
    <Route path="/treatment_management" component={TreatmentPage} />
    {/* <Route path="/medicine_management" component={MedicineComponent} />
      <Route path="/hospital_management" component={HospitalComponent} />
      <Route path="/pharmacy_management" component={PharmacyComponent} />
      <Route path="/doctor_management" component={DoctorComponent} />
      <Route path="/settlement_management" component={SettelmentComponent} />
      <Route path="/review_management" component={ReviewComponent} /> */}
  </GlobalBoardFrame>
));

export default Board;
