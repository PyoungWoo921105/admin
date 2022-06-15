/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetDoctorList = async (data: any) => {
  const { DoctorData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/doctor/list', { params: data });
    const MetaResponse = response as { status: number; data: any };
    DoctorData.setDoctorListData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetDoctorList;
