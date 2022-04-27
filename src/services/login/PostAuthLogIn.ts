import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogIn = async (data: { username: string | null; password: string | null }) => {
  const { username, password } = data;
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/login', null, {
      params: { username, password },
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default PostAuthLogIn;
