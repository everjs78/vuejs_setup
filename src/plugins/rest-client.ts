import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosBasicCredentials } from 'axios';

export type BasicType = number | string | boolean | null;
export interface JsonSerializable {
  [prop: string]: BasicType | BasicType[] | JsonSerializable[] | JsonSerializable;
}

export interface BasicCredenditals {
  username: string;
  password: string;
}

export interface RequestConfig {
  contentType?: 'json' | 'form-data';
  responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
  auth?: AxiosBasicCredentials;
}

export default class RestClient {
  private baseUrl: string;
  private myAxios: AxiosInstance;
  public constructor(baseUrl: string, init?: (axios: AxiosInstance) => void) {
    this.myAxios = axios.create();
    this.baseUrl = baseUrl;
    if (init) {
      init(this.myAxios);
    }
  }
  // tslint:disable-next-line: max-line-length
  public async get<ItemType = any>(
    endpoint: string,
    queryParams?: JsonSerializable,
    config?: RequestConfig,
  ): Promise<ItemType> {
    if (config) {
      console.log('get' + config);
    }

    return this.formatResponse<ItemType>(await this.getRaw<ItemType>(endpoint, queryParams, config));
  }
  // tslint:disable-next-line: max-line-length
  public async post<ItemType = any>(
    endpoint: string,
    data?: JsonSerializable | FormData,
    config?: RequestConfig,
  ): Promise<ItemType> {
    return this.formatResponse<ItemType>(await this.postRaw<ItemType>(endpoint, data, config));
  }
  // tslint:disable-next-line: max-line-length
  public async put<ItemType = any>(
    endpoint: string,
    data?: JsonSerializable | FormData,
    config?: RequestConfig,
  ): Promise<ItemType> {
    return this.formatResponse<ItemType>(await this.putRaw<ItemType>(endpoint, data, config));
  }
  public async delete<ItemType = any>(endpoint: string, config?: RequestConfig): Promise<ItemType> {
    return this.formatResponse<ItemType>(await this.deleteRaw<ItemType>(endpoint, config));
  }
  // tslint:disable-next-line: max-line-length
  public async getRaw<ItemType = any>(
    endpoint: string,
    queryParams?: JsonSerializable,
    config?: RequestConfig,
  ): Promise<AxiosResponse> {
    return this.myAxios.get<ItemType>(this.urlFor(endpoint), { ...this.configFor(config), params: queryParams });
  }
  // tslint:disable-next-line: max-line-length
  public async postRaw<ItemType = any>(
    endpoint: string,
    data?: JsonSerializable | FormData,
    config?: RequestConfig,
  ): Promise<AxiosResponse> {
    return this.myAxios.post<ItemType>(this.urlFor(endpoint), data, this.configFor(config));
  }
  // tslint:disable-next-line: max-line-length
  public async putRaw<ItemType = any>(
    endpoint: string,
    data?: JsonSerializable | FormData,
    config?: RequestConfig,
  ): Promise<AxiosResponse> {
    return this.myAxios.put<ItemType>(this.urlFor(endpoint), data, this.configFor(config));
  }
  public async deleteRaw<ItemType = any>(endpoint: string, config?: RequestConfig): Promise<AxiosResponse> {
    return this.myAxios.delete<ItemType>(this.urlFor(endpoint), this.configFor(config));
  }

  public setDefaultAccessToken(accessToken: string) {
    if (accessToken !== undefined) {
      this.myAxios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  private configFor(config?: RequestConfig): AxiosRequestConfig {
    const resConfig: AxiosRequestConfig = {
      headers: {
        'content-type': config && config.contentType === 'form-data' ? 'multipart/form-data' : 'application/json',
      },
    };
    if (config && 'responseType' in config) {
      resConfig.responseType = config.responseType;
    }

    if (config && 'auth' in config) {
      resConfig.auth = config.auth;
    }

    return resConfig;
  }
  private urlFor(endpoint: string): string {
    const hasSlash = endpoint.startsWith('/') || this.baseUrl.endsWith('/');
    const slash = !hasSlash ? '/' : '';
    return `${this.baseUrl}${slash}${endpoint}`;
  }
  private formatResponse<ItemType = any>(response: AxiosResponse<ItemType>): ItemType {
    if (response.status < 200 || response.status > 299) {
      throw new Error(`${response.data}`);
    }
    return response.data;
  }
}
