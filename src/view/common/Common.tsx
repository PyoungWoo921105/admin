/*
 * Copyright (c) 2022 Medir Inc.
 */

import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { GlobalFrame } from 'styles/components/common/Frame';

import GlobalNavigationBar from 'components/common/GlobalNavigationBar';
import Board from 'components/common/Board';
import { useStore } from 'data/useStore';

import socketIOClient from 'socket.io-client';
import { SocketTreatmentDataType } from 'data/stores/TreatmentData';
import { SocketMedicineDataType } from 'data/stores/MedicineData';
import { SocketDeliveryDataType } from 'data/stores/DeliveryData';

const Common = observer(() => {
  const { CommonData, TreatmentData, MedicineData, DeliveryData } = useStore();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const Socket = socketIOClient(`${process.env.REACT_APP_API_URL}admin`, {
      withCredentials: true, // Whether or not cross-site requests should made using credentials such as cookies, authorization headers or TLS client certificates. Setting withCredentials has no effect on same-site requests.
      transports: ['websocket'], // The low-level connection to the Socket.IO server can either be established with: 1. HTTP long-polling: successive HTTP requests (POST for writing, GET for reading) 2. WebSocket
      upgrade: false, // Whether the client should try to upgrade the transport from HTTP long-polling to something better.
      forceNew: true, // Whether to create a new Manager instance.
    });
    Socket.on('connect', () => {
      Socket.emit('join');
    });

    Socket.on('joined', () /* message */ => {
      /* console.log(message); */
    });

    Socket.on('notify', () /* data */ => {
      /* console.log(data); */
    });
    Socket.on('treat', data => {
      /* console.log(data); */
      TreatmentData.setSocketTreatmentData(data as SocketTreatmentDataType);
    });
    Socket.on('medicine', data => {
      /* console.log(data); */
      MedicineData.setSocketMedicineData(data as SocketMedicineDataType);
    });
    Socket.on('delivery', data => {
      /* console.log(data); */
      DeliveryData.setSocketDeliveryData(data as SocketDeliveryDataType);
    });
    CommonData.setSocket(Socket);
  }, [CommonData, DeliveryData, MedicineData, TreatmentData]);

  return (
    <GlobalFrame>
      <GlobalNavigationBar />
      <Board />
    </GlobalFrame>
  );
});

export default Common;
