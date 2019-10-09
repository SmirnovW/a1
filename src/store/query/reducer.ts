import { LOCATION_CHANGE } from 'connected-react-router';

import { parseQueryString } from 'utils/url';

import { QUERY } from './actions';

export interface InterfaceQuery {
  sort: string;
  manufacturer: string;
  color: string;
  page: number;
  [key: string]: string | number;
}

export const defaultState: InterfaceQuery = {
  sort: 'asc',
  manufacturer: '',
  color: '',
  page: 1
};

function getState(state: InterfaceQuery, search = ''): InterfaceQuery {
  if (search) {
    return { ...state, ...parseQueryString(window.location.search) };
  }

  return state;
}

const initialState: InterfaceQuery = getState(
  defaultState,
  window.location.search
);

export default function query(
  state: InterfaceQuery = initialState,
  action: InterfaceAction<InterfaceQuery> &
    InterfaceAction<{ location: Location }>
): InterfaceQuery {
  switch (action.type) {
    case QUERY.SET_PARAMETERS: {
      return { ...state, ...action.payload };
    }
    case LOCATION_CHANGE: {
      return { ...getState(defaultState, action.payload.location.search) };
    }
    default: {
      return state;
    }
  }
}
