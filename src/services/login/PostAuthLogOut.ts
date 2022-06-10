import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogout = async () => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/logout', null);
    const MetaResponse = response as { status: number; data: { message: string } };
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default PostAuthLogout;
