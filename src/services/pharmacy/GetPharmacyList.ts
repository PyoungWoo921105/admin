/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetPharmacyList = async (data: any) => {
  const { PharmacyData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/pharmacy/list', { params: data });
    const MetaResponse = response as { status: number; data: any };
    PharmacyData.setPharmacyListData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetPharmacyList;
