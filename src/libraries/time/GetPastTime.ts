/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const GetPastTime = (props: {
  date: string;
  diff: string;
  format: string;
  unit: string;
}) => {
  const { date, diff, format, unit } = props;
  if (unit === 'months') {
    return moment(date, format).subtract(diff, 'months').format(format);
  }
  if (unit === 'days') {
    return moment(date, format).subtract(diff, 'days').format(format);
  }
  if (unit === 'hours') {
    return moment(date, format).subtract(diff, 'hours').format(format);
  }
  if (unit === 'minutes') {
    return moment(date, format).subtract(diff, 'minutes').format(format);
  }
  if (unit === 'seconds') {
    return moment(date, format).subtract(diff, 'seconds').format(format);
  }
  if (unit === 'milliseconds') {
    return moment(date, format).subtract(diff, 'milliseconds').format(format);
  }
  return '';
};

export default GetPastTime;
