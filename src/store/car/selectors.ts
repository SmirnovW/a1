import { AppStore } from 'store';

import { InterfaceCar } from './types';

export const getCar = (store: AppStore): InterfaceCar => store.car;

export const isLoading = (store: AppStore): boolean =>
  store.car.status === 'pending';

export const isRejected = (store: AppStore): boolean =>
  store.car.status === 'rejected';
