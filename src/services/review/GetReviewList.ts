/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetReviewList = async (data: any) => {
  const { ReviewData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/review/list', { params: data });
    const MetaResponse = response as { status: number; data: any };
    ReviewData.setReviewListData(MetaResponse.data);
    return MetaResponse;
  } catch (error: unknown) {
    const MetaError = error as { response: { status: number; data: { message: string } } };
    return MetaError.response;
  }
};

export default GetReviewList;
