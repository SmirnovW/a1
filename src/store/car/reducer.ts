import { AxiosResponse } from 'axios';

import { CAR } from './actions';
import { InterfaceCar } from './types';

const initialState: InterfaceCar = {
  stockNumber: 0,
  manufacturerName: '',
  modelName: '',
  color: '',
  mileage: {
    number: 0,
    unit: 'km'
  },
  fuelType: '',
  pictureUrl: '',
  status: 'pending'
};

export default function cars(
  state = initialState,
  action: InterfaceAction<AxiosResponse<{ car: InterfaceCar }>>
): InterfaceCar {
  switch (action.type) {
    case `${CAR.FETCH}_PENDING`: {
      return { ...initialState, status: 'pending' };
    }
    case `${CAR.FETCH}_FULFILLED`: {
      return { ...action.payload.data.car, status: 'fulfilled' };
    }
    case `${CAR.FETCH}_REJECTED`: {
      return { ...initialState, status: 'rejected' };
    }
    default: {
      return state;
    }
  }
}
