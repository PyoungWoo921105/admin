/*
 * Copyright (c) 2022 Medir Inc.
 */
import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL_TEMP,
  withCredentials: true,
});

export default customAxios;
