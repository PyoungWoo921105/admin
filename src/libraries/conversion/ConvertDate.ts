/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const ConvertDate = (props: string) => {
  if (moment(props, 'YYYYMMDDHHmmss').isValid() === true) {
    return moment(props, 'YYYYMMDDHHmmss').format('YYYY-MM-DD HH:mm:ss');
  }
  return '-';
};

export default ConvertDate;
