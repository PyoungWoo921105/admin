/*
 * Copyright (c) 2022 Medir Inc.
 */

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
    const MetaResponse = response as { status: number; data: { message: string } };
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default PostAuthAdminLogIn;
