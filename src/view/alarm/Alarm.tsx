/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useStore } from 'data/useStore';

import ExitIcon from 'assets/icons/ExitIcon.svg';

import {
  AlarmFrame,
  AlarmComponent,
  AlarmTopFrame,
  AlarmTopComponent,
  AlarmTopTitleFrame,
  AlarmTopTitleComponent,
  AlarmTopTitleTextComponent,
  AlarmTopExitComponent,
  AlarmTopExitImageComponent,
  AlarmBottomFrame,
  AlarmBottomComponent,
  AlarmBottomContentFrame,
  AlarmBottomContentComponent,
  AlarmBottomContentTextComponent,
} from 'styles/components/alarm/Alarm';

import { AlarmElementDataType } from 'data/stores/AlarmData';

const Alarm = observer(() => {
  const { AlarmData } = useStore();

  const onClickExitAlarm = (props: any) => {
    const { id } = props;
    const AlarmListData = JSON.parse(
      JSON.stringify(AlarmData.AlarmListData)
    ) as AlarmElementDataType[];
    AlarmData.setAlarmListData(AlarmListData.filter((element: { ID: any }) => element.ID !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const PreviousAlarmListData = JSON.parse(
        JSON.stringify(AlarmData.AlarmListData)
      ) as AlarmElementDataType[];

      const NextAlarmListData = JSON.parse(
        JSON.stringify(AlarmData.AlarmListData)
      ) as AlarmElementDataType[];

      for (let i = 0; i < AlarmData.AlarmListData.length; i += 1) {
        NextAlarmListData[i].Seconds = PreviousAlarmListData[i].Seconds - 1;
      }

      AlarmData.setAlarmListData(NextAlarmListData);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const AlarmListData = JSON.parse(
      JSON.stringify(AlarmData.AlarmListData)
    ) as AlarmElementDataType[];
    for (let i = 0; i < AlarmData.AlarmListData.length; i += 1) {
      if (AlarmData.AlarmListData[i].Seconds === 0)
        AlarmData.setAlarmListData(
          AlarmListData.filter(
            (element: { ID: any }) => element.ID !== AlarmData.AlarmListData[i].ID
          )
        );
    }
  }, [AlarmData, AlarmData.AlarmListData]);

  return (
    <AlarmFrame>
      {/*  */}
      {AlarmData.AlarmListData.map(AlarmElementData => (
        <AlarmComponent
          minWidth="240px"
          backgroundColor="transparent"
          key={AlarmElementData.ID}
          cursor="pointer"
          onClick={event => {
            onClickExitAlarm({ id: AlarmElementData.ID, event });
            event.stopPropagation();
          }}
        >
          <AlarmTopFrame
            minHeight="40px"
            alignItems="center"
            backgroundColor={AlarmElementData.TitleDesign?.backGroundColor || '#00B264'}
            borderRadius={
              AlarmElementData.Descriptions ? '10px 10px 0px 0px' : '10px 10px 10px 10px'
            }
          >
            <AlarmTopComponent alignItems="center">
              <AlarmTopTitleFrame>
                <AlarmTopTitleComponent>
                  <AlarmTopTitleTextComponent
                    color={AlarmElementData.TitleDesign?.color || '#FFFFFF'}
                    lineHeight="40px"
                  >
                    {AlarmElementData.Title}
                  </AlarmTopTitleTextComponent>
                </AlarmTopTitleComponent>
              </AlarmTopTitleFrame>
              <AlarmTopExitComponent
                onClick={event => {
                  onClickExitAlarm({ id: AlarmElementData.ID, event });
                  event.stopPropagation();
                }}
              >
                <AlarmTopExitImageComponent src={ExitIcon} />
              </AlarmTopExitComponent>
            </AlarmTopComponent>
          </AlarmTopFrame>
          {AlarmElementData.Descriptions ? (
            <AlarmBottomFrame
              minHeight="40px"
              alignItems="center"
              backgroundColor={AlarmElementData.DescriptionsDesign?.backGroundColor || '#00B264'}
              borderRadius="0px 0px 10px 10px"
            >
              <AlarmBottomComponent alignItems="center">
                <AlarmBottomContentFrame>
                  <AlarmBottomContentComponent flexDirection="column">
                    {AlarmElementData.Descriptions?.map(Description => (
                      <AlarmBottomContentTextComponent
                        color={AlarmElementData.DescriptionsDesign?.color || '#FFFFFF'}
                        lineHeight="40px"
                        key={Description}
                      >
                        {Description}
                      </AlarmBottomContentTextComponent>
                    ))}
                  </AlarmBottomContentComponent>
                </AlarmBottomContentFrame>
              </AlarmBottomComponent>
            </AlarmBottomFrame>
          ) : null}
        </AlarmComponent>
      ))}
      {/*  */}
    </AlarmFrame>
  );
});

export default Alarm;
