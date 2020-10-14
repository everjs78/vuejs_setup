import { ApiData, ApiOptionalData, ApiListResponse, DatetimeString } from './types';

const ENDPOINT_UI = '/ui/v1/';

export default {
  login(auth: Auth): Promise<any> {
    // @ts-ignore
    return this.$rest.get(`${ENDPOINT_UI}/login`, auth);
  },
  logout(): Promise<any> {
    // @ts-ignore
    return this.$rest.post(`${ENDPOINT_UI}/logout`);
  },
};

export interface Auth extends ApiData {
  username: string;
  password: string;
}

export interface AuthAPI {
  login: (auth: Auth) => Promise<any>;
  logout: () => Promise<any>;
}
