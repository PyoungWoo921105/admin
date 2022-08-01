/*
 * Copyright (c) 2022 Medir Inc.
 */

import { observable } from 'mobx';

/* Alarm */
export interface AlarmElementDataType {
  ID: string;
  Code: string;

  Title: string;
  TitleDesign?: { backGroundColor: string; color: string };

  Descriptions?: string[];
  DescriptionsDesign?: { backGroundColor: string; color: string };

  Seconds: number;
}

export interface AlarmDataType {
  AlarmListData: AlarmElementDataType[];
  setAlarmListData: (e: [] | AlarmElementDataType[]) => void;
  pushAlarmListData: (e: AlarmElementDataType) => void;
}

const AlarmData = observable<AlarmDataType>({
  AlarmListData: [],
  setAlarmListData(e: [] | AlarmElementDataType[]) {
    this.AlarmListData = e;
  },
  pushAlarmListData(e: AlarmElementDataType) {
    this.AlarmListData.push(e);
  },
});

export { AlarmData };
