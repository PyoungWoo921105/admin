import { customAxios } from 'services/common/CreateAxios';

export const PostAuthLogout = async () => {
  try {
    /* axios.post(url[, data[, config]]) */
    const response = await customAxios.post('/auth/logout', null);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export default PostAuthLogout;
