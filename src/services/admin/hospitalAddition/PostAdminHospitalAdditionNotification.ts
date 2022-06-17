/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxiosTemp';

export const PostAdminHospitalAdditionNotification = async (data: any) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/admin/hospitalAddition/notification', data);
    const MetaResponse = response as {
      status: number;
      data: { result: number; message: null | { body: string } };
    };
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as {
      response: { status: number; data: { result: number; message: null | { body: string } } };
    };
    return MetaError.response;
  }
};

export default PostAdminHospitalAdditionNotification;
