import { getEnvConfigFactory } from '@axazara/raiton-utils/lib/get-env-config-factory';

const currentEnv: string = process.env.NEXT_PUBLIC_AXAZARA_ENV || 'dev';

const getEnvConfig = getEnvConfigFactory(currentEnv);

export const appConfig = {
  APP_ENV: getEnvConfig({
    dev: 'dev',
    beta: 'beta',
    alpha: 'alpha',
    prod: 'prod',
  }),

  LIVRAIZO_API_BASE_URL: getEnvConfig({
    preset: '',
    prod: '',
  }),

  LIVRAIZO_DOMAIN: getEnvConfig({
    preset: '',
    dev: '',
    beta: '',
    alpha: '',
    prod: '',
  }),
};
