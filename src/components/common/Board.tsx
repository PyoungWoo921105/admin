/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { GlobalBoardFrame } from 'styles/components/common/Frame';

import HomePage from 'view/home/HomePage';
import TreatmentPage from 'view/treatment/TreatmentPage';
import MedicinePage from 'view/medicine/MedicinePage';
import DeliveryPage from 'view/delivery/DeliveryPage';
import HospitalPage from 'view/hospital/HospitalPage';
import PharmacyPage from 'view/pharmacy/PharmacyPage';
import DoctorPage from 'view/doctor/DoctorPage';
import ReviewPage from 'view/review/ReviewPage';
import SettlementPage from 'view/settlement/SettlementPage';
import PromotionPage from 'view/promotion/PromotionPage';
import IndicatorPage from 'view/indicator/IndicatorPage';

const Board = observer(() => (
  <GlobalBoardFrame>
    <Route exact path="/home" component={HomePage} />
    <Route path="/treatment" component={TreatmentPage} />
    <Route path="/medicine" component={MedicinePage} />
    <Route path="/delivery" component={DeliveryPage} />
    <Route path="/hospital" component={HospitalPage} />
    <Route path="/pharmacy" component={PharmacyPage} />
    <Route path="/doctor" component={DoctorPage} />
    <Route path="/review" component={ReviewPage} />
    <Route path="/settlement" component={SettlementPage} />
    <Route path="/promotion" component={PromotionPage} />
    <Route path="/indicator" component={IndicatorPage} />
  </GlobalBoardFrame>
));

export default Board;
