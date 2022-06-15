/*
 * Copyright (c) 2022 Medir Inc.
 */

import React from 'react';

import { observer } from 'mobx-react';

import { LocalFrame } from 'styles/components/common/Frame';

import ReviewNavigationBar from 'page/review/ReviewNavigationBar';
import ReviewBoard from 'page/review/ReviewBoard';

const ReviewPage = observer(() => (
  <LocalFrame>
    <ReviewNavigationBar />
    <ReviewBoard />
  </LocalFrame>
));

export default ReviewPage;
