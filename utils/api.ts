const DEFAULT_DEV_API_BASE_URL = 'http://localhost:5000';
const IS_DEV_ENV = import.meta.env.DEV;

const normalizeApiBaseUrl = (baseUrl: string) => baseUrl.replace(/\/+$/, '');

const getApiBaseUrl = () => {
  const defaultApiBaseUrl = IS_DEV_ENV ? DEFAULT_DEV_API_BASE_URL : '';
  return normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl);
};

export const buildApiUrl = (path: string) => {
  if (!path.trim()) {
    throw new Error('API path cannot be empty or whitespace-only');
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
};
