import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogout = async () => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/logout', null);
    const metaResponse = response as { status: number; data: { message: string } };
    return metaResponse;
  } catch (error: unknown) {
    const metaError = error as { response: { status: number; data: { message: string } } };
    return metaError.response;
  }
};

export default PostAuthLogout;
