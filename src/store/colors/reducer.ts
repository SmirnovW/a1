import { AxiosResponse } from 'axios';

import { COLORS } from './actions';

interface InterfaceColorsStore {
  items: Array<string>;
  status: string;
}

const initialState: InterfaceColorsStore = {
  items: [],
  status: 'pending'
};

export default function colors(
  state: InterfaceColorsStore = initialState,
  action: InterfaceAction<
    AxiosResponse<{
      colors: Array<string>;
    }>
  >
): InterfaceColorsStore {
  switch (action.type) {
    case `${COLORS.FETCH}_PENDING`: {
      return { items: [], status: 'pending' };
    }
    case `${COLORS.FETCH}_FULFILLED`: {
      return { items: action.payload.data.colors, status: 'fulfilled' };
    }
    default: {
      return state;
    }
  }
}
