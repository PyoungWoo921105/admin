import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogIn = async (data: { username: string | null; password: string | null }) => {
  const { username, password } = data;
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/login', null, {
      params: { username, password },
    });
    const metaResponse = response as { status: number; data: { message: string } };
    return metaResponse;
  } catch (error: unknown) {
    const metaError = error as { response: { status: number; data: { message: string } } };
    return metaError.response;
  }
};

export default PostAuthLogIn;
