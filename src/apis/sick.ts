import { Sick } from '@/types/sick';

import { client } from '.';

export const getSick = async (params: { q: string }) => {
  const { data } = await client.get<Sick[]>('sick', { params });

  return data;
};
