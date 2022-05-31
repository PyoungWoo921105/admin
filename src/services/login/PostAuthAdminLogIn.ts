/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxiosTemp';

export const PostAuthAdminLogIn = async (data: {
  username: string | null;
  password: string | null;
}) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/admin/login', data);
    const metaResponse = response as { status: number; data: { message: string } };
    return metaResponse;
  } catch (error: unknown) {
    const metaError = error as { response: { status: number; data: { message: string } } };
    return metaError.response;
  }
};

export default PostAuthAdminLogIn;
