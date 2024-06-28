import { get } from '@/services/base.service';

export const findAllReceptions = async () => {
  return get({ url: '/receptions', params: {} });
};
