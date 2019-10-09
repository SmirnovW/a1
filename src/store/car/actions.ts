import request, { AxiosPromise } from 'axios';

export const CAR = {
  FETCH: 'CAR@FETCH'
};

export function fetchCar(id: number | string): InterfaceAction<AxiosPromise> {
  return {
    type: CAR.FETCH,
    payload: request({
      method: 'get',
      url: `/api/cars/${id}`
    })
  };
}
