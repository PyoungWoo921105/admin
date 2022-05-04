import React from 'react';

import { observer } from 'mobx-react';

import { TreatmentFrame } from 'styles/components/treatment/Treatment';

const TreatmentPage = observer(() => {
  return <TreatmentFrame />;
});

export default TreatmentPage;
