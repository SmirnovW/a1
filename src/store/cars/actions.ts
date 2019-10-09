import request, { AxiosPromise } from 'axios';

export const CARS = {
  FETCH: 'CARS@FETCH'
};

export function fetchCars(query = ''): InterfaceAction<AxiosPromise> {
  return {
    type: CARS.FETCH,
    payload: request({
      method: 'get',
      url: `/api/cars${query ? `?${query}` : ''}`
    })
  };
}
