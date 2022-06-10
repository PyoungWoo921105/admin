/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const GetTimeCost = (props: { prev: any; next: any; temp: any }) => {
  const { prev, next, temp } = props;
  if (moment(prev, 'YYYYMMDDHHmmss').isValid() === true) {
    if (next && moment(next, 'YYYYMMDDHHmmss').isValid() === true) {
      const prevTimeStamp = moment(prev, 'YYYYMMDDHHmmss');
      const nextTimeStamp = moment(next, 'YYYYMMDDHHmmss');
      return Math.round(nextTimeStamp.diff(prevTimeStamp, 'minutes')).toString();
    }
    if (temp && moment(temp, 'YYYYMMDDHHmmss').isValid() === true) {
      const prevTimeStamp = moment(prev, 'YYYYMMDDHHmmss');
      const tempTimeStamp = moment(temp, 'YYYYMMDDHHmmss');
      return Math.round(tempTimeStamp.diff(prevTimeStamp, 'minutes')).toString();
    }
    return '';
  }
  return '';
};

export default GetTimeCost;
