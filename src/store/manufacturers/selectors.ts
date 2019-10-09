import { AppStore } from 'store';

import { InterfaceManufacturer } from './types';

export const getManufacturers = (
  store: AppStore
): Array<InterfaceManufacturer> => store.manufacturers.items;
