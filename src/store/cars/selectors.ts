import { AppStore } from 'store';
import { InterfaceCar } from 'store/car/types';

export const isLoading = (store: AppStore): boolean =>
  store.cars.status === 'pending';

export const getCars = (store: AppStore): Array<InterfaceCar> =>
  store.cars.items;

export const getCarsCount = (store: AppStore): number =>
  store.cars.totalCarsCount;

export const getTotalPageCount = (store: AppStore): number =>
  store.cars.totalPageCount;
