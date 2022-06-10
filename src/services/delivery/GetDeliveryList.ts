/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetDeliveryList = async (data: any) => {
  const { DeliveryData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/delivery/list', { params: data });
    const MetaResponse = response as { status: number; data: any };
    DeliveryData.setDeliveryListData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetDeliveryList;
