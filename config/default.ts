import { AxiosRequestConfig } from 'axios';

interface IAPIConfig {
  [apiName: string]: Pick<AxiosRequestConfig, 'baseURL' | 'timeout'>;
}

interface IConfig {
  apis: IAPIConfig;
}

export const appConfig: IConfig = {
  apis: {
    defaultApi: {
      baseURL: 'http://172.31.212.165:8000/',
      timeout: 50000,
    }
  }
};
