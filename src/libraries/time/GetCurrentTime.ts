/*
 * Copyright (c) 2022 Medir Inc.
 */

import { useStore } from 'data/useStore';

export const GetCurrentTime = () => {
  const { CommonData } = useStore();

  const date = new Date();
  const year = date.getFullYear().toString();

  let month = (date.getMonth() + 1).toString();
  month = Number(month) < 10 ? `0${month}` : month;

  let day = date.getDate().toString();
  day = Number(day) < 10 ? `0${day.toString()}` : day.toString();

  let hour = date.getHours().toString();
  hour = Number(hour) < 10 ? `0${hour.toString()}` : hour.toString();

  let minites = date.getMinutes().toString();
  minites = Number(minites) < 10 ? `0${minites.toString()}` : minites.toString();

  let seconds = date.getSeconds().toString();
  seconds = Number(seconds) < 10 ? `0${seconds.toString()}` : seconds.toString();

  CommonData.setCurrentTime(year + month + day + hour + minites + seconds);

  return year + month + day + hour + minites + seconds;
};

export default GetCurrentTime;
