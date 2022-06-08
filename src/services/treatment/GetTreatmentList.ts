/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetTreatmentList = async (data: any) => {
  const { TreatmentData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/treat/list', { params: data });
    const metaResponse = response as { status: number; data: any };
    TreatmentData.setTreatmentListData(metaResponse.data);
    return metaResponse;
  } catch (error: unknown) {
    const metaError = error as { response: { status: number; data: { message: string } } };
    return metaError.response;
  }
};

export default GetTreatmentList;
