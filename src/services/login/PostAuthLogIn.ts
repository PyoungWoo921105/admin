/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogIn = async (data: { username: string | null; password: string | null }) => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/login', data);
    const MetaResponse = response as { status: number; data: { message: string } };
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default PostAuthLogIn;
