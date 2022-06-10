/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetRiderListBasic = async () => {
  const { RiderData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/rider/list/basic');
    const MetaResponse = response as { status: number; data: any };
    RiderData.setRiderListBasicData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetRiderListBasic;
