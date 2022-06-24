/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const AllowDateDifference = (props: {
  previous: string;
  next: string;
  format: string;
  unit: string;
}) => {
  const { previous, next, format, unit } = props;

  if (unit === 'months') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asMonths();
  }
  if (unit === 'days') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asDays();
  }
  if (unit === 'hours') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asHours();
  }
  if (unit === 'minutes') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asMinutes();
  }
  if (unit === 'seconds') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asSeconds();
  }
  if (unit === 'milliseconds') {
    return moment.duration(moment(next, format).diff(moment(previous, format))).asMilliseconds();
  }
  return moment(next, format).diff(moment(previous, format));
};

export default AllowDateDifference;
