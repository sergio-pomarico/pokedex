import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

/**
 * @class HTTP Class is a es6 wrapper class for axios.
 */
class Http {
  private instance: AxiosInstance;
  private config: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig) {
    this.config = config;
    this.instance = axios.create(this.config);
    //this.init(tokenHandler, errorHandler);
  }

  /**
   * Configure Axios inteceptors to handler token injection on request
   * and hander HTTP errors on responses
   * @param {(config: AxiosRequestConfig) => AxiosRequestConfig} tokenHandler
   * @param {(error: AxiosError) => void} errorHandler
   * @return {void}
   */
  init(
    tokenHandler: (config: AxiosRequestConfig) => AxiosRequestConfig,
    errorHandler: (error: AxiosError) => void,
  ) {
    this.instance.interceptors.request.use(tokenHandler, (error: AxiosError) =>
      Promise.reject(error),
    );
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      errorHandler,
    );
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}

export default Http;
