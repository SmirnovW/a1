import request, { AxiosPromise } from 'axios';

export const COLORS = {
  FETCH: 'COLORS@FETCH'
};

function fetchColors(): InterfaceAction<AxiosPromise> {
  return {
    type: COLORS.FETCH,
    payload: request({
      method: 'get',
      url: '/api/colors'
    })
  };
}

export { fetchColors };
