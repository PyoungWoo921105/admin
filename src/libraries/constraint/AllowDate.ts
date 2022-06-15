/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const AllowDate = (props: string) => {
  if (moment(props, 'YYYYMMDD').isValid() === true) {
    return true;
  }
  if (moment(props, 'YYYYMMDD').isValid() === false) {
    return false;
  }
};

export default AllowDate;
