import * as qs from 'qs';
import {PathLike} from 'fs';
import {AxiosRequestConfig} from 'axios';

/**
 *
 * @param {string} url
 * @return {AxiosRequestConfig}
 */
export const buidConfig = (url: string): AxiosRequestConfig => {
  const common = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  /**
   * serialize query string
   * @param {PathLike} params
   * @return {string}
   */
  const serializer = (params: PathLike) =>
    qs.stringify(params, {indices: false});

  /**
   * build Axios config request
   */
  const config: AxiosRequestConfig = {
    baseURL: url,
    withCredentials: true,
    timeout: 30000,
    headers: {...common},
    paramsSerializer: serializer,
  };
  return config;
};
