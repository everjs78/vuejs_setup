import _Vue from 'vue';
import RestClient from './rest-client';
import { AxiosInstance } from 'axios';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IPrototype {
  prototype: any;
}
interface RestOptions {
  baseUrl?: string;
  init?: (axios: AxiosInstance) => void;
}
export default class RestPlugin {
  public static install(Vue: typeof _Vue, options?: RestOptions): void {
    const defaultOptions = {
      baseUrl: '',
      // tslint:disable-next-line: no-empty
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      init: () => {},
    };
    const mergedOptions = {
      ...defaultOptions,
      ...options,
    };
    (Vue as IPrototype & typeof _Vue).prototype.$rest = new RestClient(mergedOptions.baseUrl, mergedOptions.init);
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $rest: RestClient;
  }
}
