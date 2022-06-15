/*
 * Copyright (c) 2022 Medir Inc.
 */

import { customAxios } from 'services/common/CreateAxios';
import { useStore } from 'data/useStore';

export const GetPharmacyListExport = async (data: any) => {
  const { CommonData } = useStore();
  try {
    /* axios.get(url[, config]) */
    const response = await customAxios.get('/pharmacy/list/export', {
      params: data,
      responseType: 'blob',
    });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `kpi_pharmacy raw data_${CommonData.CurrentTime.substring(0, 8)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    const MetaResponse = response as { status: number; data: any };
    return MetaResponse;
  } catch (error: unknown) {
    const MetaErrorBlob = error as { response: { status: number; data: Blob } };
    const MetaErrorJSON = JSON.parse(await MetaErrorBlob.response.data.text()) as {
      statusCode: number;
      message: string;
      error: string;
    };
    const MetaError = {
      response: { status: MetaErrorJSON.statusCode, data: { message: MetaErrorJSON.message } },
    };
    return MetaError.response;
  }
};

export default GetPharmacyListExport;
