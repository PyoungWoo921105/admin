import React from 'react';
import { observer } from 'mobx-react';

import { Route } from 'react-router-dom';

import { BoardFrame } from 'styles/components/common/Frame';

import Home from 'page/home/Home';

const Board = observer(() => {
  return (
    <BoardFrame>
      <Route exact path="/home" component={Home} />
      {/*  <Route path="/treatment_management" component={TreatmentComponent} />
      <Route path="/medicine_management" component={MedicineComponent} />
      <Route path="/hospital_management" component={HospitalComponent} />
      <Route path="/pharmacy_management" component={PharmacyComponent} />
      <Route path="/doctor_management" component={DoctorComponent} />
      <Route path="/settlement_management" component={SettelmentComponent} />
      <Route path="/review_management" component={ReviewComponent} /> */}
    </BoardFrame>
  );
});

export default Board;
