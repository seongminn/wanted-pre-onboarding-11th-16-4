import axios from 'axios';

import { EXPIRATION_TIME } from '@/constants/cache';
import { Sick } from '@/types/sick';

const BASE_URL = 'http://localhost:4000/';

export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const cache: { [key: string]: { data: Sick[]; timestamp: number } } = {};

client.interceptors.request.use((config) => {
  const { q } = config.params;
  const cacheKey = `${q}`;

  if (cache[cacheKey]) {
    const { timestamp, data } = cache[cacheKey];
    const currentTime = Date.now();
    const expireTime = timestamp;

    if (currentTime - expireTime < EXPIRATION_TIME) {
      return Promise.resolve({ ...config, data });
    } else {
      delete cache[cacheKey];
    }
  }

  console.info('calling api');

  return config;
});

client.interceptors.response.use((response) => {
  const { q } = response.config.params;
  const cacheKey = `${q}`;

  cache[cacheKey] = {
    timestamp: Date.now(),
    data: response.data,
  };

  return response;
});
