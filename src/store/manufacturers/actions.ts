import request, { AxiosPromise } from 'axios';

export const MANUFACTURERS = {
  FETCH: 'MANUFACTURERS@FETCH'
};

function fetchManufacturers(): InterfaceAction<AxiosPromise> {
  return {
    type: MANUFACTURERS.FETCH,
    payload: request({
      method: 'get',
      url: '/api/manufacturers'
    })
  };
}

export { fetchManufacturers };
