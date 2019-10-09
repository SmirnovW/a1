import { AxiosResponse } from 'axios';

import { InterfaceCar } from 'store/car/types';

import { CARS } from './actions';

interface InterfaceCarsStore {
  items: Array<InterfaceCar>;
  totalPageCount: number;
  totalCarsCount: number;
  status: string;
}

export const initialState: InterfaceCarsStore = {
  items: [],
  totalPageCount: 0,
  totalCarsCount: 0,
  status: 'pending'
};

export default function cars(
  state = initialState,
  action: InterfaceAction<
    AxiosResponse<{
      cars: Array<InterfaceCar>;
      totalPageCount: number;
      totalCarsCount: number;
    }>
  >
): InterfaceCarsStore {
  switch (action.type) {
    case `${CARS.FETCH}_PENDING`: {
      return { ...state, status: 'pending' };
    }
    case `${CARS.FETCH}_FULFILLED`: {
      return {
        items: action.payload.data.cars,
        totalPageCount: action.payload.data.totalPageCount,
        totalCarsCount: action.payload.data.totalCarsCount,
        status: 'fulfilled'
      };
    }
    default: {
      return state;
    }
  }
}
