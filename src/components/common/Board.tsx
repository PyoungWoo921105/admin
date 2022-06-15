/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { GlobalBoardFrame } from 'styles/components/common/Frame';

import HomePage from 'page/home/HomePage';
import TreatmentPage from 'page/treatment/TreatmentPage';
import MedicinePage from 'page/medicine/MedicinePage';
import DeliveryPage from 'page/delivery/DeliveryPage';
import HospitalPage from 'page/hospital/HospitalPage';
import PharmacyPage from 'page/pharmacy/PharmacyPage';
import DoctorPage from 'page/doctor/DoctorPage';

const Board = observer(() => (
  <GlobalBoardFrame>
    <Route exact path="/home" component={HomePage} />
    <Route path="/treatment" component={TreatmentPage} />
    <Route path="/medicine" component={MedicinePage} />
    <Route path="/delivery" component={DeliveryPage} />
    <Route path="/hospital" component={HospitalPage} />
    <Route path="/pharmacy" component={PharmacyPage} />
    <Route path="/doctor" component={DoctorPage} />
    {/*     <Route path="/settlement" component={SettelmentPage} />
    <Route path="/review" component={ReviewPage} /> */}
  </GlobalBoardFrame>
));

export default Board;
