import React from 'react';

import { observer } from 'mobx-react';

import { TreatmentFrame } from 'styles/components/treatment/Treatment';

import TreatmentLeftNavigationBar from 'page/treatment/TreatmentLeftNavigationBar';

const TreatmentPage = observer(() => (
  <TreatmentFrame>
    <TreatmentLeftNavigationBar />
  </TreatmentFrame>
));

export default TreatmentPage;
