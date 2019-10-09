import { AxiosResponse } from 'axios';

import { MANUFACTURERS } from './actions';
import { InterfaceManufacturer } from './types';

interface InterfaceManufacturersStore {
  items: Array<InterfaceManufacturer>;
  status: string;
}

const initialState: InterfaceManufacturersStore = {
  items: [],
  status: 'pending'
};

export default function manufacturers(
  state: InterfaceManufacturersStore = initialState,
  action: InterfaceAction<
    AxiosResponse<{
      manufacturers: Array<InterfaceManufacturer>;
    }>
  >
): InterfaceManufacturersStore {
  switch (action.type) {
    case `${MANUFACTURERS.FETCH}_PENDING`: {
      return { items: [], status: 'pending' };
    }
    case `${MANUFACTURERS.FETCH}_FULFILLED`: {
      return { items: action.payload.data.manufacturers, status: 'fulfilled' };
    }
    default: {
      return state;
    }
  }
}
