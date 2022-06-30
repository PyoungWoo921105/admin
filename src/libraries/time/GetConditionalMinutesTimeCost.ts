/*
 * Copyright (c) 2022 Medir Inc.
 */

import moment from 'moment';

export const GetConditionalMinutesTimeCost = (props: {
  prev: string;
  next: string;
  alt: string[];
  curr: string;
}) => {
  const { prev, next, alt, curr } = props;
  if (moment(prev, 'YYYYMMDDHHmmss').isValid() === true) {
    if (next && moment(next, 'YYYYMMDDHHmmss').isValid() === true) {
      const prevTimeStamp = moment(prev, 'YYYYMMDDHHmmss');
      const nextTimeStamp = moment(next, 'YYYYMMDDHHmmss');
      return Math.round(nextTimeStamp.diff(prevTimeStamp, 'minutes'));
    }
    if (alt && alt.length !== 0) {
      const alternatives = alt.map(Number).filter(Boolean);
      const alternative = Math.min.apply(null, alternatives);
      if (alternative && moment(alternative, 'YYYYMMDDHHmmss').isValid() === true) {
        const prevTimeStamp = moment(prev, 'YYYYMMDDHHmmss');
        const altTimeStamp = moment(alternative, 'YYYYMMDDHHmmss');
        return Math.round(altTimeStamp.diff(prevTimeStamp, 'minutes'));
      }
    }
    if (curr && moment(curr, 'YYYYMMDDHHmmss').isValid() === true) {
      const prevTimeStamp = moment(prev, 'YYYYMMDDHHmmss');
      const currTimeStamp = moment(curr, 'YYYYMMDDHHmmss');
      return Math.round(currTimeStamp.diff(prevTimeStamp, 'minutes'));
    }
    return '';
  }
  return '';
};

export default GetConditionalMinutesTimeCost;
