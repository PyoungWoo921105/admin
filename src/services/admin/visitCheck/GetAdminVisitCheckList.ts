/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxiosTemp';
import { useStore } from 'data/useStore';

export const GetAdminVisitCheckList = async (data: any) => {
  const { TreatmentData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/admin/visitCheck/list', { params: data });
    const MetaResponse = response as { status: number; data: any };
    TreatmentData.setAdminVisitCheckListData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetAdminVisitCheckList;
