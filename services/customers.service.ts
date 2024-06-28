import { get } from '@/services/base.service';

export const findAllCustomers = async () => {
  return get({ url: '/customers', params: {} });
};
