const defaultApiBase = '/api';

export function getApiBaseUrl() {
  return (import.meta.env.VITE_API_URL || defaultApiBase).replace(/\/$/, '');
}
